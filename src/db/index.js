import mysql from 'mysql'
import { dbconfig } from '../config.js'

const connection = mysql.createConnection(dbconfig)

await connection.connect()

connection.query('SELECT * from user', (error, results, fields) => {
  if (error) throw error
  console.log('The solution is: ', results)
})

connection.end()
