'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM('admin', 'operator'),
	allowNull: false,
	references: {
	  model: 'roles',
	  key: 'type'
	}
      },
      email: {
        type: Sequelize.STRING,
	allowNull: false,
	unique: true
      },
      password: {
        type: Sequelize.STRING,
	allowNull: false
      },
      name: {
        type: Sequelize.STRING,
	allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
