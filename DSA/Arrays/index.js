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
/*
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
*/



/* 

// Removing elements from an array


// removing elements from the back
var nums = [1, 2, 3, 4, 5];
var popped = nums.pop(); // pop removes an element from the end of an array and returns it back

console.log(popped);
console.log(nums);

// Removing elements from the front

// Removing elements from the middle
//  - removing elements by index
//  - removing element by value 
//        -> [1, 2, 3, 4, 5] => [1, 2, 4, 5]
//        -> [1, 2, 3, 4, 3,5] => 3 => [1, 2, 4, 5]
*/


/*
var nums = [1, 2, 3, 4, 5];
// SHIFT demonstration
// console.log(nums)

// for (var i = 0; i < nums.length; ++i) {
//     nums[i] = nums[i + 1]
//     console.log(i, nums)
// }

// console.log(nums)
// nums.length = nums.length - 1

// console.log(nums)

var removed_value = nums.shift() // also returns the value it has removed
console.log(nums)
console.log(removed_value)
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let temp = nums;

function popp(arr) {
    /*
        docstring
        remove element from the end and return back the array and the popped value
        input: array
        output: [array, popped_value]
    */
        let popped_value = arr[arr.length - 1]; // [1,2,3,4,5]
        
        for (let i = arr.length - 1; i > 0; i--) {
            // console.log(arr, "Before")
            arr[i] = arr[i - 1]
            // console.log(arr, "After")
        }

        arr = arr.slice(1, )
        // arr = [...arr]
        return [arr, popped_value]
}

function rotate(nums, times) {
    times = times % nums.length
    if (! times) {
        return nums
    }
    for (let i = 1; i <= times; ++i) {
        
        // var popped_value = nums.pop()
        let return_value = popp(nums) // [[1,2,3,4], 5]
        let popped_value = return_value[1]
        let array_after_popping = return_value[0]
        // console.log(popped_value, array_after_popping)
        nums = [popped_value, ...array_after_popping]
        // console.log(`Array after rotation ${i} : ${nums}`)
        
    }
    return nums;
}

temp = rotate(nums, 9)
console.log(temp)
console.log("--------------------------------")

temp = rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)
console.log(temp)
console.log("--------------------------------")

temp = rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 11)
console.log(temp)
console.log("--------------------------------")

temp = rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 21)
console.log(temp)
console.log("--------------------------------")

temp = rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 100000000000)
console.log(temp)