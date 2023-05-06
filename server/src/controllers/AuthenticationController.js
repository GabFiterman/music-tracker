const { User } = require("../models");
const jtw = require('jsonwebtoken')
const config = require('../config/config')

function jtwSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jtw.sign(user, config.authentication.jtwSecret, {
      expiresIn: ONE_WEEK
    })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jtwSignUser(userJson)
      });


    } catch (err) {
      res.status(400).send({
        error: 'This email already exists'
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Email not found'
        })
      }

      //TODO: preciso descobrir pq diabos fico caindo aqui direto, acredito que ele esteja caindo no if antes do resultado do comparePassword
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        return res.status(403).send({
          error: 'The password was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jtwSignUser(userJson)
      });

    } catch (err) {
      res.status(403).send({
        error: 'An error has occured trying to login information'
      });
    }
  },
};
