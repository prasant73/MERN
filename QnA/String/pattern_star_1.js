/*

*
**
***
****
*****

*/

// Written by Ankit Sharma, Ranjith Kumar K


const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment = 1; increment <= max_num; increment++) {
      console.log(value.repeat(increment));
    }
    interface.close();
  });
});