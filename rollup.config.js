import babel from 'rollup-plugin-babel'

export default {
  entry: './index.js',
  dest: 'vue-mouse-follower.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
  format: 'umd',
  moduleName: 'VueMouseFollower'
}
