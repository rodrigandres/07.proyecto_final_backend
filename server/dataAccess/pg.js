import 'dotenv/config'
import pkg from 'pg'

const { Pool } = pkg

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  allowExistOnIdle: true,
  ssl: {
    rejectUnauthorized: true
  }
}

const pool = new Pool(config)

// Prueba BD
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error al conectar a la base de datos:', err)
//   } else {
//     console.log('Conexión exitosa a la base de datos, hora actual:', res.rows[0].now)
//   }
// })

// export const testQuotationsTable = async () => {
//   try {
//     const result = await pool.query('SELECT * FROM quotations LIMIT 1')
//     console.log('Prueba de conexión a la tabla quotations:', result.rows)
//   } catch (error) {
//     console.error('Error al conectar con la tabla quotations:', error)
//   }
// }

const genericSqlQuery = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch(({ code, message }) => {
    const error = { status: '[ERROR]', code, message }
    throw error
  })

export default genericSqlQuery
