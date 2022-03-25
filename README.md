# Boas vindas ao repositório do projeto Ebytr Task List (Backend)!

** Alguns detalhes deste projeto ainda estão em fase de melhoria/construção **
** Front-End deste projeto ainda está em construção **

# Sobre

Neste projeto foi implementada uma REST API que realiza C.R.U.D. em um banco de dados que armazena listas de tarefas. A arquitetura seguiu o modelo MSC. Cada usuário deve passar por um cadastro e em seguida login, etapa na qual é gerado um token de autenticação. Cada usuário tem acesso apenas às suas tarefas, e deve estar autenticado para realizar as operações de criar, ler, editar ou deletar tarefas. Os dados são armazenados em duas collections: `users` e `tasks`.

# Tecnologias e ferramentas utilizadas

`JavaScript`\
`MongoDB`\
`Node.js`\
`express`\
`dotenv`\
`joi`\
`jsonwebtoken`\
`http-status-codes`\
`nodemon`

# Endpoints

## /users POST

Endpoint para cadastro de usuários. Recebe os dados do usuário em JSON pelo body da requisição:

```json
{
  "username": "Nome Sobrenome",
  "email": "nome@gmail.com",
  "password": "password"
}
```

Caso o usuário seja criado com sucesso a resposta terá status HTTP 200 e os dados no formato a seguir:

```json
{
  "username": "Nome Sobrenome",
  "email": "nome@gmail.com",
  "password": "password",
  "_id": "621252041a4a8e965c30ce38"
}
```
No caso de inserção de dados incompletos ou de formato inválido, erros específicos serão exibidos. Se as informações pertencerem a um usuário já cadastrado, a API também retornará uma mensagem de erro.

## /login POST

Endpoint para login de usuários cadastrados. Recebe os dados do usuário em JSON pelo body da requisição:

```json
{
  "email": "nome@gmail.com",
  "password": "password"
}
```
Caso o usuário seja logado com sucesso a resposta terá status HTTP 200 e o token de autenticação:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYyMGZmMWYwZmE4NDRkM2ZhZTg3MWYxNCIsImVtYWlsIjoiY2FtaWxheEBnbWFpbC5jb20ifSwiaWF0IjoxNjQ1MzcwMzM1LCJleHAiOjE2NDU5NzUxMzV9.RXCBnnPyv30tTapOpsaYNaVXSnJla9vvnApd3QUhQ8g"
}
```
No caso de inserção de dados incompletos ou de formato inválido, erros específicos serão exibidos.

## /tasks POST

Endpoint para criação de tarefas. O usuário precisa estar autenticado para ter sucesso na requisição. A API recebe os dados da tarefa em JSON pelo body da requisição (e o token pelos headers na chave `authorization`). Abaixo o formato do body:

```json
{
  "description": "minha tarefa",
  "status": "pendente",
  "dateCreated": "18/02/2022",
  "deadline": "25/02/2022"
}
```

Caso a tarefa seja criada com sucesso, a resposta terá o status HTTP 200 e as informações inseridas:

```json
{
  "userId": "620ff1f0fa844d3fae871f14",
  "task": {
    "description": "tarefa",
    "status": "pendente",
    "dateCreated": "18/02/2022",
    "deadline": "25/02/2022"
  }
}
```
No caso de inserção de dados incompletos, um status HTTP 400 e uma mensagem de erro estarão na resposta.

## /tasks GET

Endpoint para leitura das tarefas pelo usuário, que deve estar autenticado. Caso a requisição tenha sucesso, a resposta terá um status HTTP 200 e a lista de tasks no seguinte formato:

```json
{
  "tasks": [
    {
      "_id": "621261db8f0bc1897a5b8bea",
      "userId": "620ff1f0fa844d3fae871f14",
      "task": {
        "description": "minha tarefa",
        "status": "pendente",
        "dateCreated": "18/02/2022",
        "deadline": "10/10/2022"
      }
    },
    {
      "_id": "6212a08c306cf2e13a7acc8c",
      "userId": "620ff1f0fa844d3fae871f14",
      "task": {
        "description": "uma tarefa",
        "status": "pendente",
        "dateCreated": "18/02/2022",
        "deadline": "25/02/2022"
      }
    }
  ]
}
```

## /tasks/update/:id PATCH

Endpoint para update de uma tarefa pelo usuário, que deve estar autenticado. A API permite que o usuário modifique apenas as tarefas criadas por ele. O body deverá ter o seguinte formato:

```json
{
	"description": "minha tarefa",
	"status": "pronto",
	"dateCreated": "18/02/2022",
	"deadline": "10/10/2022"
}
```

Caso a requisição tenha sucesso, a resposta terá um status HTTP 200 e a seguinte mensagem:

```json
{
  "message": "Task was successfully modified."
}
```
Em caso de id incorreto ou informações incompletas no body, a API envia respostas com erros específicos.

## /tasks/:id DELETE

Endpoint para o usuário autenticado remover tarefas, sendo que o usuário pode remover apenas as tarefas criadas por ele. A requisição não recebe informações no body. Caso a requisição tenha sucesso, a resposta terá um status HTTP 200 e a seguinte mensagem:

```json
{
  "message": "Task was successfully deleted."
}
```
Em caso de id incorreto ou inválido, respostas de erros específicas serão recebidas.

# Como rodar o projeto na sua máquina

## Pré-requisitos

Ter instalado o MongoDB e algum cliente HTTP (como o Insomnia).
<a href="https://docs.mongodb.com/manual/administration/install-community/">Link MongoDB</a>.
<a href="https://insomnia.rest/download">Link Insomnia</a>.

Abra o seu Visual Studio Code e aperte ctrl + J ou abra um terminal e siga as instruções a seguir.

1. Clone o repositório com o comando:
`git clone git@github.com:camila-mp/ebytr-task-list-back.git`

2. Entre na pasta clonada com o comando:
`cd ebytr-task-list-back`

3. Instale as dependências com o comando:
`npm install` ou `yarn install`

4. Inicialize o servidor da API localmente com o comando:
`npm start` ou `yarn start`

5. Inicie o MongoDB com o comando:
`sudo service mongod start`

6. Abra o software Insomnia, ou outro cliente HTTP de sua preferência, e teste os endpoints.
