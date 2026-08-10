'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      order_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      total_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },

      status: {
        type: Sequelize.STRING(50),
        allowNull: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orders');
  }
};
