require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const { Jogadores } = require('./models')


app.use(express.json());

const PORT = process.env.PORT || 3010;

 app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
}) 

app.get('/', async (req, res) => {
    try { 
    const jogador = await Jogadores.findAll();
    return res.status(200).json(jogador);
}
    catch(err) { 
        return res.status(400).json({message: err.message})
    }
})

app.post('/jogador', async (req, res) => {
    try { 
    const { nome, time, idade, imagem } = req.body;
    if (!nome || !time || !idade || !imagem ) return res.status(500).json({
        message: 'Precisa preencher todos os campos!!'
    })
    const nomeJogador = await Jogadores.findOne({
        where: { nome }});
    if (nomeJogador) return res.status(400).json({ message: "Jogador já registrado!" })
      const jogador = await Jogadores.create({
          nome, time, idade, imagem
      });
    return res.status(200).json(jogador);
}
    catch(err) { 
        return res.status(400).json({message: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})