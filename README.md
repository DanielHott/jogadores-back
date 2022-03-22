# Back-end da aplicação Jogadores!

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DanielHott/Pagina-de-Receitas/blob/master/LICENSE)

### Disponível em https://back-jogadores.herokuapp.com/

#### Esta aplicação é o back-end da aplicação postada em https://front-jogadores.herokuapp.com/, confira o repositório do front em: https://github.com/DanielHott/jogadores-front

## Tecnologias utilizadas:

Node.js, Sequelize, Cors, Body-Parser, Heroku, Docker, MySql, Nodemon, Dotenv e Postgres.

## Aplicação: 

Esta aplicação possui 2 endpoints, um que retorna todos os jogadores cadastrados na url https://back-jogadores.herokuapp.com/
#### Retorno do endpoint "/":
![Web 1](https://github.com/DanielHott/imagens/blob/master/jogadoresback.png)

## Segundo endpoint
O segundo endpoint é utilizado para cadastrar novos jogadores pelo metodo post no banco de dados em https://back-jogadores.herokuapp.com/jogador
#### Retorno de uma requisição post no endpoint "/jogador":
![Web 1](https://github.com/DanielHott/imagens/blob/master/jogadoresback2.png)

## Copiando para sua máquina:

Clone o projeto

```bash
  git clone https://github.com/DanielHott/jogadores-back.git
```

Entre no diretório do projeto

```bash
  cd jogadores-back
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

### Detalhes:

Neste projeto utilizei o Supabase para hospedar o servidor da aplicação, conteinerizei com docker, deploy com Heroku, Imnsonia para requisições à API
durante o desenvolvimento. Utilizei Cors para lidar com as requisições do front, bodyparser para ler o body no formato json.

 ### Desenvolvido por Daniel Hott
