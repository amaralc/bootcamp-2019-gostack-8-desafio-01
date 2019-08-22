// Importa express como "express"
const express = require('express');

// Instancia servidor "server"
const server = express();

// Define forma de receber corpo da requisição
server.use(express.json());

// Define lista de projetos
const projects = [];

// CMétodo http post para criar projeto
server.post('/projects', (req, res) => {
  console.log('/projects is working');

  // Cria variável "name" desestruturando o corpo da requisição que deve constar com atributo "name"
  const { name } = req.body;

  // Adiciona "name" à lista de projetos
  projects.push(name);

  // Responde à requisição no formato json com a lista de projetos
  return res.json(projects);
})

// Método http post para ler lista de projetos
server.get('/projects', (req, res) => {
  console.log('/projects is working');
  return res.json(projects);
})

// Método http put para alterar nome do projeto
server.put('/projects/:id', (req, res) => {
  console.log('/projects is working');
})

// Método http delete para deletar projeto
server.delete('/projects/:id', (req, res) => {
  console.log('/projects is working');
})

// Método http post para adicionar tarefa a um projeto específico
server.post('/projects/:id/tasks', (req, res) => {
  console.log('/projects is working');
})

// Diz para instância do servidor escutar na porta 3000
server.listen(3000);
