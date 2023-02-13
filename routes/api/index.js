const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute')
const userRoutes = require('./userRoutes')

router.use('/thoughts',thoughtRoutes)
router.use('/user',userRoutes)

module.exports = Router