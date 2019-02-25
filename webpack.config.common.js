// -------------------------------------------------------------------------------
//
// Description: Add common webpack configurations
// ===============================================================================
//

let src = `./src`
let styles = `${src}/styles/scss`
let scripts = `${src}/scripts`

module.exports = {
  entry: [`${scripts}/main.js`, `${styles}/styles.scss`],

  module: {
    rules: [{}],
  },
}
