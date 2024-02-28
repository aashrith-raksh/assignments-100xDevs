// Middleware for handling auth
const {Admin} = require("../db/index.js");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  // Find the first document where the "name" field equals "John"
  const val = await Admin.findOne({ username: username, password: password });

  if(val){
    next();
  }else{
    res.json({
      msg: "Admin doesn't exist"
    })
  }
}

module.exports = adminMiddleware;