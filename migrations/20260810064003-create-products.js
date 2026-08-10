'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      product_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },

      category: {
        type: Sequelize.STRING(100),
        allowNull: true
      },

      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },

      stock: {
        type: Sequelize.INTEGER,
        allowNull: true
      },

      image: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};
