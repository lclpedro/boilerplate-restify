const restify = require('restify')
const config = require('./config')
const routes = require('./routes')

// Declaration factory app.
app = restify.createServer({
    name: config.name,
    version: config.version
})

//Definitions application
// app.use(restify.plugins.queryParser)
app.use(restify.plugins.bodyParser())

//Import Modules
routes(app)


//Settins localhost
app.listen(config.port, ()=>{
    console.log('Server %s listening with port %s', config.host, config.port)
})

module.exports = app;