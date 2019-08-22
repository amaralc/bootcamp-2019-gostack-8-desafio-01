// Import the express dependency as "express"
const express = require('express');

// Create an instance of express called "server"
const server = express();

// IMPORTANT! Define format to receive the body of the requisition
server.use(express.json());

// Define an initial empty list of projects
const projects = [];

// HTTP Method POST for creating a project
server.post('/projects', (req, res) => {

  // Create variables "id" and "title" destructuring the requisition's body
  // which must have the attributes "id" and "title"
  const { id } = req.body;
  const { title } = req.body;

  // Create a "project" object storing the id and title from "req" and with
  // a blank list of tasks 
  const project = {
    "id": id,
    "title": title,
    "tasks": []
  }

  // Add the object "project" to the list "projects"
  projects.push(project);

  // Respond to the requisition with a list of projects in JSON format
  return res.json(projects);
})

// HTTP Method POST to read list of projects
server.get('/projects', (req, res) => {
  return res.json(projects);
})

// HTTP Method POST to read specific project
server.get('/projects/:index', (req, res) => {
  console.log('/projects is working');
  const { index } = req.params;

  return res.json(projects[index]);
})

// HTTP Method PUT to change project title
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.forEach((arrayItem) => {
    if (arrayItem.id == id) {
      arrayItem.title = title;
    }
  });

  // Respond to the requisition with a list of projects in JSON format
  return res.json(projects);

})

// HTTP Method DELETE to delete project
server.delete('/projects/:id', (req, res) => {
  console.log('/projects is working');
})

// HTTP Method POST to add task to a specific project
server.post('/projects/:id/tasks', (req, res) => {
  console.log('/projects is working');
})

// Tell the express instance "server" to listen to port 3000
server.listen(3000);
