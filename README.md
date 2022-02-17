# Boas vindas ao repositório do projeto Ebytr Task List (Backend)!

# Sobre

Neste projeto foi implementada uma REST API que realiza C.R.U.D. em um banco de dados que armazena listas de tarefas. Cada usuário deve passar por um cadastro e em seguida login, etapa na qual é gerado um token de autenticação. Cada usuário tem acesso apenas às suas tarefas, e deve estar autenticado para realizar as operações de criar, ler, editar ou deletar tarefas.

# Tecnologias utilizadas

`JavaScript` `Node.js` `express` `MongoDB` `dotenv` `joi` `jsonwebtoken` `http-status-codes` `nodemon`

# Endpoints

[ descupe, essa seção está em construção! ]

# Como rodar o projeto na sua máquina

Abra o seu Visual Studio Code e aperte ctrl + J ou abra um terminal e siga as instruções a seguir.

1. Clone o repositório com o comando:
`git clone git@github.com:camila-mp/ebytr-task-list-back.git`

2. Entre na pasta clonada com o comando:
`cd ebytr-task-list-back`

3. Instale as dependências com o comando:
`npm install` ou `yarn install`

4. Inicialize o servidor da API localmente com o comando:
`npm start` ou `yarn start`

5. Caso você não tenha o mongoDB instalado na sua máquina, instale-o seguindo as instruções deste <a href="https://insomnia.rest/download">link.</a> Com o mongoDB instalado na sua máquina, ative-o com o comando abaixo:
`sudo service mongod start`

6. Abra ou instale o software Insomnia, ou outro de sua preferência, para testar os endpoints.
<a href="https://insomnia.rest/download">Link para baixar o Insomnia.</a>