'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Jogadores", [
      {
        nome: 'Karim Benzema',
        idade: 34,
        time: 'Real Madrid',
        imagem: 'https://www.realmadrid.com/img/vertical_380px/benzema_380x501_20210826062812.jpg'
      },
      { 
        nome: 'Vinicius Jr',
        idade: 21,
        time: 'Real Madrid',
        imagem: 'https://premierleaguebrasil.com.br/wp-content/uploads/2022/01/Vinicius-Junior-se-torna-o-jogador-mais-valioso-do-mundo.jpg'
      },
      { 
        nome: 'Neymar Jr',
        idade: 30,
        time: 'Paris Saint German',
        imagem: 'https://conteudo.imguol.com.br/c/esporte/b8/2022/03/10/neymar-durante-partida-entre-psg-e-real-madrid-na-liga-dos-campeoes-1646926708591_v2_3x4.jpg'
      },
    ])
  }, 
  down: async (queryInterface, _Sequelize) => {
    queryInterface.bulkDelete("Jogadores", null, {})
  }
}