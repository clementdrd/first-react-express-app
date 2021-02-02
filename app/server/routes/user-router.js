const express = require('express')
const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

console.log("TEST1 from router.js");

router.post('/user', UserCtrl.createUser)
console.log("TEST1.5");
router.put('/user/:id', UserCtrl.updateUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

console.log("TEST2 from router.js");

module.exports = router;