process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const config = Object.assign(environment.toWebpackConfig(), require('./vue.config'))

module.exports = config
