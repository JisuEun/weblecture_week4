'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [{
      title: 'First Post',
      author: 'Yuna Kim',
      content: 'This is the first post.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Second Post',
      author: 'Taylor Swift',
      content: 'This is the second post.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};