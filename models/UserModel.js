import Model from '../core/Model';

export default class extends Model {
  static async getAll() {
    return await super.findAll({attributes:['id','role','email','name','createdAt','updatedAt'],raw:true});
  }

  static async getByID(id) {
    return await super.findOne({attributes:['id','role','email','name','createdAt','updatedAt'],where: {id}, raw:true});
  }

  static async authorize(email,password) {
    return await super.findOne({attributes:['email','name','role'], where:{email,password},raw:true});
  }

  static get _table(){
    return 'users';
  }

  static get _attributes() {
    return {
      id:{
        type: this.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      role:{
        type: this.DataTypes.ENUM('admin','operator'),
        allowNull: false,
        references: {
          model: 'roles',
          key: 'type'
        }
      },
      email: {
        type: this.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: this.DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: this.DataTypes.STRING,
        allowNull: false
      }
    }
  }
}