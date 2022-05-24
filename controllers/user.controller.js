const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    register: async (req, res) => {
        try {
            const {username, password } = req.body;
            if (!(username && password)) {
              res.status(400).send("All input is required");
            }
            const oldUser = await User.findOne({ username });
        
            if (oldUser) {
              return res.status(409).send("User Already Exist. Please Login");
            }
            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
              username: username.toLowerCase(),
              password: encryptedPassword,
            });

            const token = jwt.sign(
              { user_id: user._id, username },
              process.env.TOKEN,
              {
                expiresIn: "24h",
              }
            );
            user.token = token;
            return res.status(201).json(user);
          } catch (err) {
            console.log(err);
          }
    },
  login: async (req, res) => { 
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
          res.status(400).send("All input is required");
        }
        let user = await User.findOne({ username });
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN,
            {
              expiresIn: "24h",
            }
          );
          user.token = token;
          return res.send(user);
        }
        return res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
    
}
};
