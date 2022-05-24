const User = require('../models/user')
const extend = require('lodash/extend')
const errorHandler = require('./dbErrorHandler')

const create = async (req, res) => {

  console.log(req.body)

  const user = new User(req.body)
  try {
    // if (req.body.password !== req.body.passwordConfirm) 
    //   return res.status(400).json({error: "Passwords do not match!"})

    await user.save()

    return res.status(200).json({
      message: "Successfully signed up!"
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if (!user)
      return res.status('400').json({
        error: "User not found"
      })
    req.profile = user
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created')
    res.json(users)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const update = async (req, res) => {
  try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    await user.save()
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
  try {
    let user = req.profile
    let deletedUser = await user.remove()
    deletedUser.hashed_password = undefined
    deletedUser.salt = undefined
    res.json(deletedUser)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const isEducator = (req, res, next) => {
  const isEducator = req.profile && req.profile.educator
  if (!isEducator) {
    return res.status('403').json({
      error: "User is not an educator"
    })
  }
  next()
}

module.exports = {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  isEducator
}
