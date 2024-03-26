#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

async function chalk_Animation() {
  let rainbow = chalkAnimation.rainbow(
    " <<<====>>> Let's Get Started <<<====>>>"
  );
  await sleep();
  rainbow.stop();
}
await chalk_Animation();

let todos: string[] = [];
let loop: boolean = true;

while (loop) {
  let answers = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: chalk.blue.bold("Add Todos......"),
    },
    {
      name: "Addmore",
      type: "input",
      message: "Do You Want To Add More Todo",
      default: false,
    },
  ]);
  let { todo, Addmore } = answers;
  loop = Addmore;

  if (todo) {
    todos.push(todo);
  } else {
    console.log("Enter A Valid Input.");
  }
}

if (todos.length > 0) {
  console.log(chalk.green.bold.underline("Your Todos List"));
  todos.forEach((value) => {
    console.log(value);
  });
} else {
  console.log(chalk.red.bold("No Todos Found"));
}
