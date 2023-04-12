const { users } = require('../class/userContainer')


const validateEmail = ( email ) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return email.match(mailformat) !== null
}


const newUser = async ( username, password ) => {
  if ( validateEmail( username ) & password ) {
    await users.addUser ( username, password )
    return true
  }
  return false  
}

module.exports = { newUser }