const Jogadores = (sequelize, DataTypes) => {
    const Jogadores = sequelize.define('Jogadores', {
        id_jogador: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        nome: DataTypes.STRING,
        idade: DataTypes.INTEGER,
        time: DataTypes.STRING,
        imagem: DataTypes.STRING,
    }, { 
        freezeTableName: true,
        timestamps: false
    })
    return Jogadores
}

module.exports = Jogadores;