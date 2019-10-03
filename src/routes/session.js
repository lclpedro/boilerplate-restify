
const serviceTokenAuth = require('../services/token_auth')

const session = app =>{
    app.get('/login', (req, res, next) => {
        console.log(serviceTokenAuth)
        return res.json({"token_access":"Bearer <token>"})
    })
}

module.exports = session;