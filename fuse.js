/* eslint-disable */

const { FuseBox, QuantumPlugin, WebIndexPlugin, Sparky } = require('fuse-box')

let fuse
let bundle
let isProduction = false


// bundle name needs to be changed too (as we are making an isolate build and
// and we need to bundle the API into it
let bundleName = 'es6'

let instructions = '> index.ts'


Sparky.task('config', () => {
  let output = isProduction ? 'dist' : 'dev'
  fuse = FuseBox.init({
    homeDir: 'src',
    globals: { default: '*' }, // we need to expore index in our bundles
    target: isProduction ? 'browser@es6':'browser@es6',
    output: `${output}/$name.js`,
    cache: false,
    tsConfig: [{ target: bundleName }], // override tsConfig
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
  let output = isProduction ? 'dist' : 'dev'
  return Sparky.src(`${output}/`).clean(`${output}/`)
})

Sparky.task('copy-src', () => {
  let output = isProduction ? 'dist' : 'dev'
  Sparky.src('./**', { base: './src' }).dest(`${output}/`)
})

Sparky.task('copy-pkg', () => {
  let output = isProduction ? 'dist' : 'dev'
  Sparky.src('./package.json').dest(`${output}/`)
})

Sparky.task('dev', ['clean'], () => {
  bundleName = 'app'
  instructions = '> dev.ts'
})

Sparky.task('dist-es5', async () => {
  target = 'browser@es5'
  isProduction = true
  bundleName = 'es5'
  await Sparky.resolve('config')
  // await fuse.run()
  await fuse.dev()
  bundle.hmr().watch()
  fuse.run()
})

Sparky.task('dist', ['clean', 'copy-src', 'copy-pkg', 'dist-es5'], () => {

})


// Development
Sparky.task('default', ['dev', 'config'], () => {
  fuse.dev()
  bundle.hmr().watch()
  fuse.run()
})
