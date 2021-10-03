module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('news', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false
      },
      subtitle:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      content:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      date:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('news')
  }
};
