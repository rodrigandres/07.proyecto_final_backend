import 'dotenv/config'
import genericSqlQuery from '../dataAccess/pg.js'

export const createTransferDetail = async (
  idDetalleTraslado,
  destino,
  fechaSolicitud,
  tipoCarga,
  descripcionTraslado,
  volumenEstimado,
  serviciosAdicionales,
  Numer) => await genericSqlQuery('INSERT INTO users (name, email, gender, phoneNumber, password, termsAndConditions) VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;', [name, email, gender, phoneNumber, password, termsAndConditions])
