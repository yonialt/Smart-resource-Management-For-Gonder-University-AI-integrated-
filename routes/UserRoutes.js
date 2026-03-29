const express = require('express')
const router = express.Router()
const controller = require('../controller/UserController')
const {protect,authorizeRoles} = require('../middleware/authMiddleware')
//get user
router.get('/',protect,controller.getAllUser)
//get user by id 
router.get('/:id',protect,authorizeRoles('admin'),controller.getUserById)
// register
router.post('/register',controller.registerUser)
 //login
 router.post('/login',controller.loginUser)
 //update
 router.put('/:id',protect,authorizeRoles('admin'),controller.updateUser)
 //delete
 router.delete('/:id',protect,authorizeRoles('admin'),controller.deleteUser)
 module.exports =router;