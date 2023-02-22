const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const Manager = require('./lib/Manager')
const Team = []

const mainMenu = () => {
  prompt({
    type: "list",
    name: "direction",
    message: "What type of Employee would you like to create?",
    choices: ["Manager", "Engineer", "Intern", "Done"],
  }).then(answers => {
    if (answers.direction === 'Manager'){
        askManager()
    }
    else if (answers.direction === 'Engineer'){
        askEngineer()
    }
    else if (answers.direction === 'Intern'){
        askIntern()
    }
    else {
        buildTeam()
    }
  })
};
const askManager = () =>{
    prompt({
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office number',
      message: 'What is your office number?',
    }
    ).then(answers => {
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber)
        Team.push(manager)
        mainMenu()
    })
  };

    const askEngineer = () =>{
      prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      }
      ).then(answers => {
          const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
          Team.push(engineer)
          mainMenu()
      })
};

const askIntern = () =>{
  prompt({
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the school you?',
  }
  ).then(answers => {
      const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
      Team.push(intern)
      mainMenu()
  })
};

mainMenu()