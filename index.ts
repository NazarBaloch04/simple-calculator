#!/usr/bin/env node
import inquire from "inquirer";
const answer = await inquire.prompt([
  
        { message: "enter first number", type: "number", name: "firstNumber" },
        { message: "enter second number", type: "number", name: "secondNumber" },
        {
            message: "select any one the operator to perform any operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponent", "Modulus"],
        },
    ]);
    // Conditions
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber);
    }
    else if (answer.operator === "Exponent") {
        console.log(Math.pow(answer.firstNumber, answer.secondNumber));
    }
    else if (answer.operator === "Modulus") {
        console.log(answer.firstNumber % answer.secondNumber);
    }
    else {
        console.log("Select an invalid operator");
    }