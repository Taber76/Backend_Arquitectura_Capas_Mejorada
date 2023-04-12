const { Router } = require('express')   
const infoRouter = Router()

const { infoTemplate } = require('../controllers/info')

const { logger, loggererr } = require('../log/logger')

infoRouter.get('/', async (req, res) => {
  const tabla = infoTemplate()
  logger.info(`Ruta: /info, metodo: ${req.method}`)
  res.send(tabla)
})


module.exports = infoRouter