const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const gravatar = require('gravatar')
const config = require('config')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../../models/User')

// register user
// @ route : localhost:4000/api/users
router.post(
  '/',
  [
    [
      check('name', 'name is required').notEmpty(),
      check('adress', 'adress is required').notEmpty(),
      check('email', 'email is required').isEmail(),
      check('password', 'password required').isLength({ min: 5 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, pseudo, email, password, adress } = req.body
    try {
      //check if user exist
      let user = await User.findOne({ email })
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }
      //get users avatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      })
      user = new User({
        name,
        pseudo,
        email,
        password,
        adress,
        avatar,
      })
      //encrypt password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      await user.save()
      const payload = {
        user: {
          id: user.id,
        },
      }
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)
module.exports = router
