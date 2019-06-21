process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const config = Object.assign(environment.toWebpackConfig(), require('./vue.config'))

module.exports = config
