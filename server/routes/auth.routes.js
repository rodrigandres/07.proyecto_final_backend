import express from 'express'
import {
  registerUser,
  login,
  returnUser
} from '../controllers/auth.controller.js'
import verifyToken from '../middlewares/users.middleware.js'

const router = express.Router()

router.post('/users', registerUser)
router.post('/login', login)

router.get('/users', verifyToken, returnUser)

export default router
