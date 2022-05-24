const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('auth-header')

    if (!token) return res.status(401).send('Access Denied!')
    
    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRECT)
        req.user = verified
        next()

    } catch (error) {
        res.status(400).send('Invalid Token!')
    }
}