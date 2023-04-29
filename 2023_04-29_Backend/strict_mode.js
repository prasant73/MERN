// "use strict";
// let a = "olshdfklbns";
// console.log(a);
// // Infinity = 123;
// // undefined = 'w36456';
// console.log(Infinity);
// console.log(undefined);


function strictFunction() {
    "use strict";
    function abcd() {
        return "I am also strict!!"
    }
    return `I am already strict;
    ${abcd()}`
}

function notStrict(){
    return 'Not a strict function'
}

export default strictFunction;