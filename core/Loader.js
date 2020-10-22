import Sequelize from 'sequelize';
export default class {
  static model(modelName) {
    const {default: modelClass} = require(`../models/${modelName}`);
    return modelClass.init();
  }
}