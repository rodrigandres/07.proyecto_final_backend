import 'dotenv/config'
import genericSqlQuery from '../dataAccess/pg.js'

export const createUser = async (name, email, gender, phoneNumber, password, termsAndConditions) => await genericSqlQuery('INSERT INTO users (name, email, gender, phoneNumber, password, termsAndConditions) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;', [name, email, gender, phoneNumber, password, termsAndConditions])

export const verifyUser = async (email) => await genericSqlQuery('SELECT * FROM users WHERE email = $1;', [email])

export const getUserProfileById = async (id) => await genericSqlQuery('SELECT * FROM users WHERE id = $1;', [id])
