import express from 'express'
const router = express.Router()

router.get('/google-maps-api-key', (_, res) => {
  res.json({ apiKey: process.env.GOOGLE_API_KEY })
})

export default router
