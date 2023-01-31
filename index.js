#!/usr/bin/env node
import inquirer from "inquirer";
console.log("hello world");
inquirer.prompt([
    {
        message: "first number",
        name: "first_num",
        type: "number"
    },
    {
        message: "second   number",
        name: "second_num",
        type: "number"
    },
    {
        message: "select operation",
        type: "list",
        name: "operator",
        choices: [`add +`, `subtract -`, `multiply * `, `divide /`, `modulus %`]
    }
])
    .then(result => {
    console.log(result);
    console.log(result.first_num);
    console.log(result.second_num);
    // console.log("sum is:", result.first_num + result.second_num);
    if (result.operator == `add +`) {
        console.log(`your result is `, result.first_num + result.second_num);
    }
    else if (result.operator == `subtract -`) {
        console.log(`your result is `, result.first_num - result.second_num);
    }
    else if (result.operator == `multiply *`) {
        console.log(`your result is `, result.first_num * result.second_num);
    }
    else if (result.operator == `divide /`) {
        console.log(`your result is `, result.first_num / result.second_num);
    }
    else {
        console.log(`your result is `, result.first_num % result.second_num);
    }
    // console.log(
    //         "sum is:",
    //          Number(result.first_num) + Number(result.second_num));  
})
    .catch(error => {
    if (error.isTtyError) {
        console.log(`in error`, error);
        // Prompt couldn't be rendered in the current environment
    }
    else {
        console.log(`in else error`, error);
        // Something else went wrong
    }
});
