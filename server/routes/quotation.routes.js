import express from 'express'
import { saveQuotationController, getQuotationsByUserIdController, getQuotationsByUserEmailController } from '../controllers/quotation.controller.js'

const router = express.Router()

router.post('/quotation', saveQuotationController)

router.get('/quotation/user/:userId', getQuotationsByUserIdController)

router.get('/quotation/email/:email', getQuotationsByUserEmailController)

export default router
