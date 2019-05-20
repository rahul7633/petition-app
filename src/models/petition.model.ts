import { Sequelize, DataTypes } from 'sequelize'
import db from '../configurations/db.config'

/*
* model and schema for User
*/
const Model = db.sequelize.define('petition', {
  // attributes
  creator_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sponsor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created: {
    type: DataTypes.STRING,
    allowNull: true
  },
  modified: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  // options
})

class PetitionModel {
  createNew (formData) {
    return Model.create(formData)
  }
}

export const Petition: PetitionModel = new PetitionModel()
