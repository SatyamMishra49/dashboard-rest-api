const { registerUser, loginUser } = require('../controllers/userController');

const router = require('express').Router();

router.get('/register', registerUser)
router.post('/login', loginUser)


module.exports = router