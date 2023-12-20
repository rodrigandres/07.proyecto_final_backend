import 'dotenv/config'
import genericSqlQuery from '../dataAccess/pg.js'

export const saveQuotation = async (
  distanceText,
  distanceValue,
  label,
  name,
  toLabel,
  toName,
  userId,
  userEmail
) =>
  await genericSqlQuery(
    ' INSERT INTO quotations (distanceText, distanceValue, label, name, toLabel, toName, userId, userEmail) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
    [
      distanceText,
      distanceValue,
      label,
      name,
      toLabel,
      toName,
      userId,
      userEmail
    ]
  )

export const getQuotationsByUserId = async (userId) =>
  await genericSqlQuery('SELECT * FROM quotations WHERE userId = $1;', [userId])

export const getQuotationsByUserEmail = async (userEmail) =>
  await genericSqlQuery('SELECT * FROM quotations WHERE userEmail = $1;', [userEmail])
