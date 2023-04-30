/*

Enter the Character %
Enter the n times 5
    %
   %%%
  %%%%%
 %%%%%%%
%%%%%%%%%

*/

// Written by Vinay Vishwakarma


const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment = max_num; increment >= 1; increment--) {
      console.log(
        " ".repeat(increment - 1) +
          value.repeat(max_num - increment + 1) +
          value.repeat(max_num - increment)
      );
    }
    interface.close();
  });
});



/*

// Written By Vaibhav Patel

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment = max_num; increment >= 1; increment--) {
      console.log(
        " ".repeat(increment -1) +
          value.repeat(max_num - increment + 1) +
          value.repeat(max_num - increment)
      );
    }
    interface.close();
  });
});

*/