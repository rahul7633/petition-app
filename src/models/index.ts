/* src/models/index.ts */
import db from '../configurations/db.config'
db.connectMySQL()
// db.connectMongo()

export { User } from './user.model'
