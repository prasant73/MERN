/*

    *
   **
  ***
 ****
*****

n = spaces + characters

characters = n - spaces


n = 4
horizontal => n * 2
vertical lines = n + 1

********
********
   **
   **
   **
   **
   **

A

n = 4
num of charac => l = n + 2
l1 = 1 space + n characters + 1 space
l2 => l characters
l3 => 2 characters + 2 spaces + 2 characters
l4 => l characters
l5 & l6 = l3

 ****
******
**  **
******
******
**  **
**  **


*/


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

