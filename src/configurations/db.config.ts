// import { connect } from 'mongoose'
import { Sequelize } from 'sequelize'

/**
 * Database connection
 */
class Database {
  public sequelize

  /* public connectMongo (callback?: any) {
    const DB_USER = process.env.DB_USER
    const DB_PASS = process.env.DB_PASS
    const DB_HOST = process.env.DB_HOST
    const DB_PORT = process.env.DB_PORT
    const DB_NAME = process.env.DB_NAME
    let connString = null
    if (process.env.DB_AUTH === 'true') {
      connString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    } else {
      connString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
    }
    connect(connString, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.log('Failed to connect to MongoDB:', err)
        if (callback) callback(err)
        return
      }
      console.log('Successfully connected to MongoDB')
      if (callback) callback()
    })
} */

  public connectMySQL (callback?: any) {
    const DB_USER = process.env.MYSQL_USER
    const DB_PASS = process.env.MYSQL_PASS
    const DB_HOST = process.env.MYSQL_HOST
    const DB_PORT = process.env.MYSQL_PORT
    const DB_NAME = process.env.MYSQL_DB
    this.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      host: DB_HOST,
      dialect: 'mysql',

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

      define: {
        timestamps: false // true by default
      }
    })

    this.sequelize
      .authenticate()
      .then(() => {
        console.log('Successfully connected to MySQL')
        if (callback) callback()
      })
      .catch((err) => {
        console.error('Unable to connect to the MySQL:', err)
        if (callback) callback(err)
      })
  }
}

export default new Database()
