const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  // const authHeader = req.body.headers['Authorization']
	// const token1 = authHeader && authHeader.split(' ')[1]
  
  const token =
    req.body.token || req.query.token || req.headers["token"] || req.body.headers['Authorization'].split(' ')[1];

  // console.log("This is token1: " + token1)
  console.log("This is token:" + token)

  if (!token) {
    return res.status(403).send({
      error: "Require Token"
    });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN);
    req.user = decoded;
  } catch (err) {
    console.log(err);
    return res.status(401).send({
      error: "Invaild Token"
    });
  }
  return next();
};

module.exports = verifyToken;