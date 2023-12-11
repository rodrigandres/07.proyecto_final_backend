import * as sql from '../models/users.dao.js'
import { HTTP_STATUS } from '../../config/constants.js'
import { jwtSign } from '../utils/jwt.js'
import { encrypt, compare } from '../utils/crypts.js'

export const registerUser = async (req, res) => {
  try {
    const { name, email, gender, phoneNumber, password, termsAndConditions } = req.body
    console.log(req.body)
    const passEncrypted = encrypt(password)
    const [user] = await sql.createUser(name, email, gender, phoneNumber, passEncrypted, termsAndConditions)
    res.status(HTTP_STATUS.created.code).json({ id: user.id, email: user.email })
  } catch (error) {
    res.status(HTTP_STATUS.internal_server_error.code).json(error)
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const response = await sql.verifyUser(email)
    if (response.length === 0) return res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
    const [{ password: pass, name, id }] = response
    compare(password, pass)
      .then((userValid) => {
        userValid
          ? res.status(HTTP_STATUS.ok.code).json({ token: jwtSign({ email: req.body.email, name, id }) })
          : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.not_found.text })
      })
      .catch((error) => res.status(500).json(error))
  } catch (error) {
    console.warn(error)
    res.status(500).json(error)
  }
}

export const returnUser = (req, res) => {
  res.status(HTTP_STATUS.ok.code).json([{ ...req.user, message: HTTP_STATUS.ok.text }])
}
