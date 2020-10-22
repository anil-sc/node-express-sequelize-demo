import Sequelize from 'sequelize';
export default class extends Sequelize.Model {
  static init() {
    //Get the environment
    const env = process.env.NODE_ENV || 'development';

    //Read DB connection information
    const config = require('../config/database.json')[env];

    //Generate Db connection object
    let sequelize;
    if(config.use_env_variable){
      sequelize = new Sequelize(process.env[config.use_env_variable],config);
    }else{
      sequelize = new Sequelize(config.database,config.username,config.password,config);
    }

    return super.init(this._attribute, {
      sequelize,
      freezeTableName: true,
      modelName: this._table
    });
  }

  static get DataTypes() {
    return Sequelize.DataTypes;
  }

  static get _table() {
    return 'table name';
  }

  static get _attributes() {
    return {};
  }
}