/*

*
**
***
****
*****
****
***
**
*

*/

// Written by Vinay Vishwakarma

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("Enter the Character ", (value) => {
  interface.question("Enter the n times ", (max_num) => {
    for (let increment = 1; increment <= max_num * 2; increment++) {
      if (increment <= max_num) {
        console.log(value.repeat(increment));
      } else if (increment >= max_num && increment < max_num * 2) {
        console.log(value.repeat(max_num * 2 - increment));
      }
    }
    interface.close();
  });
});


/*

// Written by Subhash Kandhway


function arrowRight1(max, value) {
  for (let increment = 1; increment <= 2 * max; increment++) {
    if (increment <= max) {
      console.log(value.repeat(increment));
    } else {
      console.log(value.repeat(2 * max - increment));
    }
  }
}
arrowRight1(5, "*");

*/


/*

// Written by Aniket Mukherjee

const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('Enter the Character ', (value) => {
    interface.question('Enter the n times ', (max_num) => {
        for(increment = 1; increment < max_num * 2; increment++){
            if(increment <= max_num) {
                console.log(value.repeat(increment))
            } else if (increment >= max_num){console.log(value.repeat(max_num * 2 - increment))}
            };
      interface.close();
    });
  });


*/