const { persistence } = require('../config/environment')
const MongoProductDao = require('./mongoProductDao')
const MemoryProductDao = require('./memoryProductDao')

let productsDao = undefined

const getDao = async() => {
  if( !productsDao ) {
    if ( persistence === 'MEMORY' ) {
      productsDao = new MemoryProductDao()
    } else {
      productsDao = await new MongoProductDao()
    }
  }
  return {
    products: productsDao
  }
}


module.exports = getDao