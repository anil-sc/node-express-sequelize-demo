'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users',[
	{
		role: 'admin',
		email: 'anil@gmail.com',
		password: 'pass!234',
		name: 'Anil Shrestha',
		createdAt: new Date(),
		updatedAt: new Date()
	},{
		role: 'operator',
		email: 'test@gmail.com',
		password: 'pass1234',
		name: 'Test',
		createdAt: new Date(),
		updatedAt: new Date()
	}

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
