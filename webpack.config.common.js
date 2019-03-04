// -------------------------------------------------------------------------------
//
// Description: Add common webpack configurations
// ===============================================================================
//

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '/src'),
  styles: path.join(__dirname, '/src/assets/styles/scss'),
  images: path.join(__dirname, '/src/assets/images'),
  scripts: path.join(__dirname, '/src/assets/scripts'),
  templates: '/src/templates',
}

module.exports = {
  entry: [`${PATHS.scripts}/main.js`, `${PATHS.styles}/wb-styles.scss`],

  plugins: [new HtmlWebpackPlugin({ template: `${PATHS.src}/index.html` })],
}
