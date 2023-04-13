const connectToDb = require('../config/connectToMongo')
const { productModel } = require('../schemas/mongoDbModel')


class Dao { // MongoDB

  constructor( schema ) {
      this.schema = schema
  }
  

  async getAll() {
    try{
      const documentsInDb = await this.schema.find()
      return documentsInDb
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }
 

  async getById( id ) {
    try {
      await connectToDb()
      const documentInDb = await this.schema.find({_id: id})
      return documentInDb ? documentInDb : null

    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }


  async deleteById( id ) {  
    try {
      await connectToDb()
      await this.schema.deleteOne({ _id: id })
      return 
    } catch(err) {
      console.log(`Error: ${err}`)
      return false
    }
  }


  async deleteAll() {
    try {
      await connectToDb()
      await this.schema.deleteMany()
      return 
    } catch(err) {
      console.log(`Error: ${err}`)
      return false
    }
  }


  async add( item ) {
    try{
      await connectToDb()
      const newProduct = new productModel( item )
      await newProduct.save()
        .then(product => console.log(`Se ha agregado a la base de datos elemento con id: ${product._id}`))
        .catch(err => console.log(err))
      return
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }

}

const products = new Dao( productModel )


module.exports = { products } 