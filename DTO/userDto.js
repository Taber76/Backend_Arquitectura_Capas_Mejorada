const { users } = require('../DAO/mongoUserDao')


const checkUserDto = async( email, password ) => {
  const userCheck = await users.checkUser( email, password )
  return userCheck
}

const addUserDto = async( email, password ) => {
  const newUser = await users.addUser( email, password )
  return newUser
}



module.exports = { checkUserDto, addUserDto }

