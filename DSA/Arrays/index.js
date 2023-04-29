const readline = require('readline');
/*
var numbers = [1, 2, 3, 4, 5];
// console.log(numbers.length)

var num1 = new Array(10); // length of the array
console.log(num1.length)
console.log(num1)
*/

/*
var num2 = new Array(1, 0); // the values inside the array
// var num2 = new Array([1,0].length)
// num2[0] = [1, 0][0]
// num2[1] = [1, 0][1]
console.log(num2.length)
console.log(num2)
*/

/*

// Object Verification

var objects = [1, 'ranjith', true, null, undefined];
console.log(Array.isArray(objects)); // verifies if objects is an array
console.log(Array.isArray(objects[1]));
*/


/*
// we want to assign values inside an array
var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i*2;
};
console.log(nums)

// sum of all the elements inside an array
var sum = 0;
for (var i = 0; i < nums.length; ++i) {
    sum += nums[i]
}

console.log(sum)

*/


/*

String to array => slice

var sentence = "there are 60 students in my class";
var words = sentence.split(sentence);
console.log(words);
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + " :" + words[i]);
}

*/


/*

// AGGREGATE OPERATIONS

var nums = [];
var array_length = 10

for (var i = 0; i < array_length; ++i) {
    nums[i] = i + 1
}

// console.log(nums);

// assigning array to a different variable/array

var nums1 = nums;

nums[0] = "HI hello";

// console.log(nums);
// console.log(nums1);

function copy (arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i];
    }
};



var nums2 = new Array(nums1.length);
copy (nums1, nums2);

// var nums2 = [...nums]; // spread operator is deep copy

console.log(nums);
console.log(nums1);
console.log(nums2);

console.log('\n');

nums[0] = "Subhash";
console.log(nums);
console.log(nums1); // nums1 is shallow copy of nums
console.log(nums2); // nums2 is deep copy of nums1

*/


/*

// ACCESSOR Functions : access the elements of an array



var names = ["vaibhav", "babita", "vipin", 'vinay', "smit"];
let interface = readline.createInterface(process.stdin, process.stdout); // defining readline interface to accept inputs from stdin

interface.question('Enter a name to search : ', (name) => {
    var position = names.indexOf(name);
    if (position >= 0) {
        console.log("found " + name + " at position " + position)
    } else {
        console.log(name + " - element not found")
    }
    interface.close();
})

*/


/*

// array to string -> join

var names = ["vaibhav", "babita", "vipin", 'vinay', "smit"];
console.log(names.join())
console.log(names.toString())
console.log(names)

*/



/*
 Array concatenation
*/

var tech = ["vaibhav", "babita", "vipin", 'vinay', "smit"];

var non_tech = ["subhash", "akash", "lee", "amol", "antony"];

// var students = tech.concat(non_tech);

var students = [...tech, ...non_tech]

var students2 = non_tech.concat(tech);



// console.log(students);

// console.log(students2);


// splice

var spliced = students.splice(3, 3)

// console.log(spliced)

// console.log(students)


const numbers = [1,3,4,6];

numbers.splice(1, 0, 2); // at the index 1, replacing 0 elements on the right, insert 2

console.log(numbers); // [1,2,3,4,6]

numbers.splice(4, 1, 5); // at index 4, replacing 1 element on the right, insert 5

console.log(numbers);
