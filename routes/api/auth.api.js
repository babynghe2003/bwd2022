const router = require("express").Router();
const AuthController = require('../../controllers/auth.controller')
const UserController = require('../../controllers/user.controller')


router.route('/signin')
  .post(AuthController.signin)
router.route('/signout')
  .get(AuthController.signout)

router.route('/users')
  .get(UserController.list)
  .post(UserController.create)

router.route('/users/:userId')
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.remove)

router.param('userId', UserController.userByID)

module.exports = router;
