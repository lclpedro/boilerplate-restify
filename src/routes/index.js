const session = require('./session')

const routes = app => {
    session(app)
}

module.exports = routes;