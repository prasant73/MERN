/*

    *
   **
  ***
 ****
*****



*/

// written by Smit Trivedi, Chirag Singh

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Q1

rl.question('Enter the Character ', (value)=>{
    rl.question('Enter the n times ', (max_num) =>{
        for(let increment = 1; increment <= max_num; increment++){
            console.log(" ".repeat(max_num - increment) + value.repeat(increment));
        }
        rl.close()
    })
    
})


/*

Chirag Singh

function pattern(n, val) {
    for(let i=1; i<=n; i++) {
      console.log(" ".repeat(n-i) + "*".repeat(i))
    }
  }
*/


/*

// Vaibhav Patel

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
          value.repeat(max_num - increment +1) 
      );
    }
    interface.close();
  });
});

*/