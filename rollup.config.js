const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')

const lo = 'es5/'
export default {
  useStrict: false,
  entry: lo + 'index.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      module: true,
      main: true,
      preferBuiltins: true,
    }),
    commonjs({
      include: '**/**',
    }),
    uglify(
      {
        warnings: true,
        parse: {
          html5_comments: false,
          shebang: false,
        },
        compress: {
          dead_code: true,
          drop_debugger: true,
          booleans: true,
          unused: true,
          comparisons: true,
          conditionals: true,
          hoist_funs: true,
          if_return: true,
          join_vars: true,
          cascade: true,
          collapse_vars: true,

          // for now
          keep_fargs: true,
          keep_fnames: true,
          passes: 3,
        },

        sourceMap: true,
        toplevel: false,
        ie8: false,
      },
      minify
    ),
  ],
  targets: [{dest: 'lib/index.js', format: 'cjs'}],
}
