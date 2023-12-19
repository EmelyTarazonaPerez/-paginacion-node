import express from 'express'
const routerProduct  = require('./router.product')
const routerClassification  = require('./router.classification')

function appRouter(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', routerProduct)
    router.use('/classifications', routerClassification)

}

module.exports = appRouter;