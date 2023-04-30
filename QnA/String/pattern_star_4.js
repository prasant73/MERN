/*

*****
 ****
  ***
   **
    *

*/

// Written by Vaibhav Patel

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment = 1; increment <= max_num; increment++) {
      console.log(
        " ".repeat(increment - 1) +
          value.repeat(max_num - increment + 1) 
      );
    }
    interface.close();
  });
});


/*

// Written by Ranjith Kumar K

const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Enter the Character ',(value)=>{
    interface.question('Enter the n times ',(max_num) =>{
        for(let increment = max_num-1; increment >= 0; increment--){
        console.log(value.repeat(increment+1) + " ".repeat(max_num-increment));
      }  
    interface.close() 
    })

})

*/