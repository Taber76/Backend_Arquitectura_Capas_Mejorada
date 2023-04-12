const { products } = require('../class/productContainer')


const validateObject = ( objeto ) => { // retorna true si hay algun campo vacio
  return Object.values(objeto).includes('')
}


const imageUrl = ( url ) => {
  const ext = /(\.jpg|\.jpeg|\.png|\.gif)$/i
  return ext.test( url )
}


const newProduct = async ( productToAdd ) => {
  if ( !validateObject( productToAdd ) & imageUrl ( productToAdd.thumbnail )) {
    await products.add ( productToAdd )
    return true
  }
  return false  
}

module.exports = { newProduct }