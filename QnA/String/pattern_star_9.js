/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


*/

// Written by 


const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Q1

interface.question('Enter the Character ',(value) => {
    interface.question('Enter the n times ', (max_num) => {
        for (let increment = max_num; increment > 0; increment--) {
            console.log(" ".repeat(increment) + value.repeat(max_num - increment + 1) +
             value.repeat(max_num - increment));
        } 
        for (let increment = 0 ; increment <= max_num; increment++) {
            console.log(" ".repeat(increment) + value.repeat(max_num - increment + 1) +
             value.repeat(max_num - increment));
        }
        interface.close() 
    })
})