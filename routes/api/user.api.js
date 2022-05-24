const router = require("express").Router()
const UserController = require('../../controllers/user.controller')


router.route('/users')
  .get(UserController.list)
  .post(UserController.create)

router.route('/users/:userId')
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.remove)

module.exports = router;
