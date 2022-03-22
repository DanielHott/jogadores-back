'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Jogadores", {
      id_jogador: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      time : {
        allowNull: false,
        type: Sequelize.STRING,
      },
      idade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imagem: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  }, 
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Jogadores")
  }
}