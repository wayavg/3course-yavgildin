const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ])
]

module.exports = htmlPages
