import { Sequelize, DataTypes } from 'sequelize'
import db from '../configurations/db.config'

/*
* model and schema for User
*/
const Model = db.sequelize.define('user', {
  // attributes
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
});


class UserModel {

  constructor () {
  }

  createUser (user) {
    return Model.create(user)
  }

  getAllUsers (where, options, projection = null) {
  }

  findUserByEmail (email: string) {
    return Model.findOne({where: {email} })
  }

  findUserById (id: string) {
    return Model.findByPk(id)
  }

  deleteUserById (userid: string) {
  }
}

export const User: UserModel = new UserModel()
