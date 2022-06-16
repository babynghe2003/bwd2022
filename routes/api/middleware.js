const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["token"];

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