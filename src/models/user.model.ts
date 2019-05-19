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
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  language: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM('1', '2', '3', '4'),
    allowNull: false
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  // options
})

class UserModel {
  createUser (user) {
    return Model.create(user)
  }

  getAllUsers (where, options, projection = null) {
    return Model.findAll({
      where: { deleted: 0, ...where },
      attributes: { exclude: ['password'] },
      order: [ ['first_name', 'asc'] ],
      limit: options.limit,
      offset: options.offset
    })
  }

  findUserByEmail (email: string) {
    return Model.findOne({ where: { email, deleted: 0 } })
  }

  findUserById (id: string) {
    return Model.findByPk(id, { where: { delete: 0 }, attributes: { exclude: ['password'] } })
  }

  deleteUserById (userid: string) {
    return Model.update({ deleted: 1 }, { where: { id: userid } })
  }
}

export const User: UserModel = new UserModel()
