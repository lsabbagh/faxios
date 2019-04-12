const {
  FuseBox,
  QuantumPlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box')

let fuse; let bundle
let isProduction = true

// we can change the target when making a seperate bundle
let target = 'browser'

// bundle name needs to be changed too (as we are making an isolate build and
// and we need to bundle the API into it
let bundleName = 'es5'

let instructions = '> index.js'

Sparky.task('config', () => {
  fuse = FuseBox.init({
    homeDir: 'src',
    // globals: { 'default': '*' }, // we need to expore index in our bundles
    output: 'dist/$name.js',
    target,
    plugins: [
      WebIndexPlugin(),
      isProduction && QuantumPlugin({
        containedAPI: true,
        ensureES5: false,
        uglify: true,
        bakeApiIntoBundle: bundleName
      })
    ]
  })
  bundle = fuse.bundle(bundleName).instructions(instructions)
})


Sparky.task('clean', () => {
  return Sparky.src('dist/').clean('dist/')
})

Sparky.task('copy-src', () => Sparky.src('./**', {
  base: './src'
}).dest('dist/'))
Sparky.task('copy-pkg', () => Sparky.src('./package.json').dest('dist/'))

Sparky.task('dev', ['clean'], () => {
  bundleName = 'app'
  instructions = '> index.js'
})

Sparky.task('dist-es5', async () => {
  isProduction = true
  // isProduction = false;
  bundleName = 'es5'
  instructions = '> index.js'
  await Sparky.resolve('config')
  await fuse.run()
})

Sparky.task('dist', ['clean', 'dist-es5'], () => {

})


// Development
Sparky.task('default', ['dev', 'config'], () => {
  fuse.dev()
  bundle
    .hmr()
    .watch()
  fuse.run()
})
