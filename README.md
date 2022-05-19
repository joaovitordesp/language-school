<h1 align="center"><b> Api for language school </b></h1>

![Language School](https://user-images.githubusercontent.com/52571090/169300610-250d9963-16a4-4af9-a470-65d4c2ea3da0.png)


## Badges
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20PRONTO&color=GREEN&style=for-the-badge"/>
</p>

## Índice 

* [Título e Imagem de capa](#Título-e-Imagem-de-capa)
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-Projeto)
* [Funcionalidades do projeto](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Conclusão](#conclusão)


## Descrição do Projeto

- Essa api feita em Node.js usando Sequeliza, foi desenvolvida com o intuito de criar um crud de uma escola de idiomas, mas que não possui um front-end.

## Status do Projeto

- Concluído

## :hammer: Funcionalidades do projeto

-Pessoa
  - Consulta as pessoas cadastradas 
    - GET http://localhost:3000/pessoas/ 
  - Consulta as pessoas cadastradas por id
    - GET http://localhost:3000/pessoas/id (um id deve ser passado no lugar de "id", o mesmo também deve existir) 
  - Cadastrar uma pessoa
    - POST http://localhost:3000/pessoas/id
      - Corpo da requisição
          {
                "nome": "Antonio",
                "ativo": true,
                "email": "antonio@gmail.com",
                "role": "docente"
            }
  - Atualiza o cadastro de uma pessoa
    - PUT http://localhost:3000/pessoas/id (um id deve ser passado no lugar de "id", o mesmo também deve existir) 
      - Corpo da requisição 
        {
        "nome": "Antonio",
        } 
  - Deletar uma pessoa
    - DELETE http://localhost:3000/pessoas/id (um id deve ser passado no lugar de "id", o mesmo também deve existir) 
- Turma
  - Consulta as turmas cadastradas
    - GET http://localhost:3000/turmas/    
  - Consulta as turmas cadastradas por id
    - GET http://localhost:3000/turmas/id (um id deve ser passado no lugar de "id", o mesmo também deve existir)      
  - Cadastrar uma turma
    - POST http://localhost:3000/turmas/id
      - Corpo da requisição
        {
          "data_inicio": "2020-02-01",
        } 
  - Atualiza o cadastro de uma turma
    - PUT http://localhost:3000/turmas/id
      - Corpo da requisição
        {
          "data_inicio": "2020-02-01",
        } 
  - Deletar uma turma
    - DELETE http://localhost:3000/pessoas/id (um id deve ser passado no lugar de "id", o mesmo também deve existir) 
- Matrícula
  - Consulta as matrículas cadastradas
    - GET  http://localhost:3000/pessoas/1/matricula/1
  - Consulta as matrículas cadastradas por id
  - Cadastrar uma matrícula
    - POST http://localhost:3000/pessoas/1/matricula/
      - Corpo da requisição
          {
            "status": "confirmado",
                  "turma_id":4
          }
  - Atualiza o cadastro de uma matrícula
    - PUT http://localhost:3000/pessoas/1/matricula/1
      - Corpo da requisição 
          {
                "status": "cancelado"
            }
  - Deletar matrícula
      -DELETE http://localhost:3000/pessoas/1/matricula/5
      
      
## 📁 Acesso ao projeto

**Você pode acessar o código fonte principal do projeto nesse repositório ou baixá-lo como arquivo zip**

## 🛠️ Abrir e rodar o projeto

**Primeiramente, atente-se e veja se você já possui o node instalado. Para isso, vá ao seu prompt de comando e digite node -v. O resultado esperado deve ser a versão 
 do seu node, caso contrário, baixe-o e instale-o. 
  Depois rode o comando, npm install, e depois de ter rodado as dependências, rode o comando node api/index.js. O resultado esperado deve ser o servidor rodando e te
  retornando uma mensagem "Servidor rodando na porta 3000". Depois é só testar com os comandos. Ressalto aqui que você deve ter o Postman na sua máquina para testar a
  Api. 
**

## Tecnologias utilizadas
  - Node.js
  - Sequelize
  - Sqlite

## 📁 Conclusão
  A intenção do projeto e mostrar como criar uma api do zero, e o exemplo a ser praticado foi uma escola de idiomas. Qualquer dúvida você pode entrar em contato comigo,
  meus contatos estão disóníveis no meu README que esta no meu perfil. TMJ Comunidade!!
