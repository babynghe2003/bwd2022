const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getUserById: async (req, res) => {
    console.log(req.params)  
    try {
        const user = await User.findById(req.params.id);
        if(user) {
            return res.status(200).send(user);
        }
                
      } catch (err) {
        console.log(err)
        return res.status(400).send({
            message: "Bad request"
        });
      }
        
    },
    register: async (req, res) => {
      console.log(req.body);
        try {
            const { username, email, password } = req.body;

            if (!(email && username && password)) {
              return res.status(404).send({
                message: "Username, email and password are required"
              });
            }
            const oldUser = await User.findOne({ username });
        
            if (oldUser) {
              return res.send({
                message: "Username already exists"
              });
            }

            encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
              username: username.toLowerCase(),
              email: email,
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
            console.log(user)
            await user.save()
            return res.status(200).json(user)
              
        } catch (err) {
          console.log(err);
        }
    },
    login: async (req, res) => {
      try {
        let user = await User.findOne({
          "email": req.body.email
        })
        if (!user)
          return res.status('401').json({
            error: "User not found"
          })
        const result = await bcrypt.compare(req.body.password, user.password)
        console.log(req.body.password + " " + result);
        if (!result) {
          return res.status('401').send({
            error: "Email and password don't match."
          })
        }

        const token = jwt.sign(
          { user_id: user._id, user },
          process.env.TOKEN,
          {
            expiresIn: "24h",
          }
        );
        user.token = token;

        return res.status(200).send({user: {user_id: user._id, username: user.username, email: user.email, result: result},token, data: result})

      } catch (err) {
        console.log(err)
        return res.status('401').json({
          error: "Could not sign in"
        })

      }
    }
};
