import express from 'express'
import {
  registerUser,
  login,
  returnUser
} from '../controllers/auth.controller.js'
import verifyToken from '../middlewares/users.middleware.js'

import { getUserProfile } from '../controllers/users.controller.js'

const router = express.Router()

router.post('/users', registerUser)
router.post('/login', login)
router.get('/profile', verifyToken, getUserProfile)

router.get('/users', verifyToken, returnUser)

export default router
