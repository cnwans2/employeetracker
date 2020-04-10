const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./employee.db");
require("console.table");

init();

function init() {
  const logoText = logo({ name: "Employee Manager" }).render();

  console.log(logoText);

  loadMainPrompts();
}

async function loadMainPrompts() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View Employees",
          value: "view employee"
        },
        {
          name: "View Employees By Department",
          value: "Departments"
        },
        {
          name: "View Employees By Manager",
          value: "management"
        },
        {
          name: "Add Employee",
          value: "add employee"
        },
        {
          name: "Remove Employee",
          value: "remove employee"
        },
        {
          name: "Update Employee Role",
          value: "update employee"
        {
          name: "Update Employee Manager",
          value: "update managment"
        },
        {
          name: "View All Roles",
          value: "view roles"
        },
        {
          name: "Add Role",
          value: "add role"
        },
        {
          name: "Remove Role",
          value: "remove role"
        },
        {
          name: "View All Departments",
          value: "view departments"
        },
        {
          name: "Add Department",
          value: "add department"
        },
        {
          name: "Remove Department",
          value: "remove department"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);

 