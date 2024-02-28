
const { User } = require("../db")
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const { username, password } = req.headers;

  // Find the first document where the "name" field equals "John"
  console.log("userMIddleware")
  const user = await User.findOne({ username: username, password: password });
  console.log("found user")
  if(user){
    console.log("calling next")
    next();
  }else{
    res.json({
      msg: "User doesn't exist"
    })
  }
}

module.exports = userMiddleware;