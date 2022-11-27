import resolve from '@rollup/plugin-node-resolve'

export default [{
  input: ['src/shell.js'],
  output: [{
    dir: 'www',
    format: 'es'
  }],
  plugins: [
    resolve()
  ]
}]