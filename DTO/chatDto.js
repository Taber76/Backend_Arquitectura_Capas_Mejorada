const { chats } = require('../DAO/mongoChatDao')


const getAllChatsDto = async() => {
  const allChats = await chats.getAll()
  return allChats
}

const addChatMsgDto = async( message ) => {
  await chats.add( message )
  return 
}



module.exports = { getAllChatsDto, addChatMsgDto }