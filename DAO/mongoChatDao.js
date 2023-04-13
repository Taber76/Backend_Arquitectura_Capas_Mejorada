const connectToDb = require('../config/connectToMongo')
const { chatModel } = require('../schemas/mongoDbModel')
const { normalizedData } = require('../normalize/normal')


class Dao { // MongoDB

  constructor( schema ) {
      this.schema = schema
  }
  

  async getAll() {
    try{
      await connectToDb()
      const chatInDb = await this.schema.findOne ( { chatid: 'chat1'} )
      return normalizedData(chatInDb.chat)
    
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }
 

  async add( message ) {
    try{
      await connectToDb()
      const chatInDb = await this.schema.findOne ( { chatid: 'chat1' } )
      const newMsj = chatInDb.chat
      newMsj.push({
        user: { 
          email: message.author.id,
          name: message.author.name,
          surmame: message.author.surname,
          age: message.author.age,
          nickname: message.author.nickname,
          avatar: message.author.avatar,
        },
        message: {
          timestamp: message.date,
          text: message.text
          } 
      })
      await this.schema.updateOne({ chatid: 'chat1' },
        { $set: { chat: newMsj }}
        )
      return
    } catch(err) {
      console.log(`Error: ${err}`)
    }
  }

}


const chats = new Dao ( chatModel )


module.exports = { chats }