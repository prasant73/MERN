
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

/*

// Written by Subhash Kandhway

function rotate(nums, times) {
  let results=[];
  for (let index = 0; index < nums.length; index++) {
    let key=(index+times)%nums.length;
    results[key]=nums[index];
  }
  return results;
}

*/