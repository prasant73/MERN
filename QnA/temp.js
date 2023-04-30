const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment =max_num; increment>=0; increment--) {
      console.log(" ".repeat(max_num - increment) +value.repeat(increment));
    }
    interface.close();
  });
});