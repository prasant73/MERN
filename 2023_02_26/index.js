// alert("This is from an external js file");
/* document.write("External JS can write as well");
alert("Hi");
document.getElementById("temp").innerHTML="Hurray";

functions don't execute themselves unless being called upon
*/
function permanent() {
    document.getElementById('temp').innerHTML="I am permanent now!";
}

function userSubmit() {
    // var is a keyword 
    // word next to var is the variable name - var a = 10
    // const MONTHS = 12
    // var ui = document.getElementById("userInput").value; // this is a comment
    // document.getElementById('result').innerHTML="You entered : " + ui + ", 2023 has " + MONTHS + " months";
    // // MONTHS = 13
    // // var ui = 10
    // document.getElementById('result1').innerHTML="You entered : " + ui + ", a year has " + MONTHS + " months";

    let inp1 = document.getElementById("userInput1").value
    // let inp2 = document.getElementById("userInput2").value
    // document.getElementById('result').innerHTML= Number(inp1, 10) + Number(inp2, 10);
    document.getElementById('result').innerHTML = eval(inp1)
}

function expWithConsole(){
    let inp2 = document.getElementById("userInput2").value
    if (inp2 <= 5) {
        console.log("input is less than or equals to 5")
    } else if (inp2 > 5 && inp2 <= 10) {
        console.log("inp2 is greater than 5 and less than or equals to 10")
    } else {
        console.log("inp2 is greater than 10")
    }
}

function alphabetical_sort(){
    student_names = ["Siddharth", "Shubham", "prateek", "subhash", "chandrakala", "Lakshmi", "Zeba"]
    s = student_names.sort()
    document.getElementById("post_alphabetical_sort").innerText = s
}

function ascending_numerical_sort(){
    numbers = [3, 10, 2, 1, 5]
    numbers.sort(function(a, b){return a - b})
    document.getElementById("post_ascending_numerical_sort").innerHTML = numbers
}

function descending_numerical_sort(){
    numbers = [3, 10, 2, 1, 5]
    numbers.sort(function(a, b){return b - a})
    document.getElementById("post_descending_numerical_sort").innerHTML = numbers
}

function while_loop(){
    const list = ['aaa', 'bbb', 'ccc']
    let i = 0 // initialization
    while (i < list.length /*condition checking*/) {
        // things to do
        console.log(i + " : " + list[i])
        i++
    }
}

function slicing(){
    const name = "reddysekhar_derangula"

    do {
        a = Math.floor(100 * (Math.random()))
        b = Math.floor(100 * (Math.random()))
        console.log(a, b)
    } while (
        ((b - a) > 0) && 
        (a < name.length) && 
        (b < name.length)
        )

    document.getElementById("post_slicing").innerHTML = name.slice(a, b)
}

function ternary(){
    let age = parseInt(document.getElementById("age_input").value)
    let result = (age >= 18) ? "eligible to vote" : "not eligible to vote"
    document.getElementById('check_eligibility').innerHTML = result
}

// function comma1(){
//     console.log("from comma1")
//     return 1
// }

// function comma2(){
//     console.log("from comma2")
//     return 2
// }

// function comma3(){
//     console.log("from comma3")
//     return 3
// }

// var x = (comma1(), comma2(), comma3());

// console.log(x)


// const abc = () => console.log("from abc");
// abc()

function checkPrime (num){
    // var num_check = !isNaN(num) ;
    var isPositiveNum = (num > 0);
    if (num_check && isPositiveNum){
        isPrime = true;
        if (num == 1){
            console.log("1 is neither a prime nor a composite number")
        }
        else if (num > 1){
            for (let i = 2; i < num; i++){
                if ((num % i) == 0){
                    isPrime = false
                    break
                }
            }
        }
        if (isPrime){
            console.log(`${num} is prime`)
        } else {
            console.log(`${num} is not prime`)
        }

    }
    
    if (!isPositiveNum){
        console.log('we are checking only for positive numbers')
    }
}

// function prime_detector(){
//     let num = parseInt(document.getElementById("num_input").value)
//     // let result = (age >= 18) ? "eligible to vote" : "not eligible to vote"
//     // document.getElementById('check_eligibility').innerHTML = result
//     checkPrime(num)
// }

// let prime_detector(num)=>{
//     let num = parseInt(document.getElementById("num_input").value)
//     checkPrime(num)
// }

let prime_detector=()=>{
    let num=parseInt(document.getElementById("num_input").value);
    checkPrime(num)
}

// ------------------------------------------------------------------------------------------

// const Student = new Object()
// const Student = Object.create(null)

let REGD = []

// function is_in(value, array){
    // if a value exists, it returns the index of the value, else it returns -1
//     return array.indexOf(value)
// }

const Class_to_Subject_mapping = {
    // a student in a partucular class will be having the subjects assigned to him
    10: ['maths', 'history'],
    9: ["maths", "english"],
    8: ["history", "english"]
}

const Subject_to_Chapter_Mapping = {
    "maths_9":["Algebra","Trigonometry"],
    "maths_10":["Algebra","Polynomial "],
    "history_8":["women caste and reform","Ruling the Countryside"],
    "history_9":["the french revolution","nazism"],
    "history_10":["nationalism in india","the age on industrialisation"],
    "english_10":["dust of snow","the proposal"],
    "english_9":["the lost child","the adventure of toto"],
    "english_8":["the tsunami","glimpses of the past"]
}

function reg_generator(){
    // generate random 4 digit numbers which should be unique
    do{
        var regd = Math.floor(1000 + Math.random() * 1000);
    }
    while (
        REGD.includes(regd)
        // !REGD.includes(regd) == true
        // is_in(regd, REGD) == -1
    )
    REGD.push(regd)
    return regd
}

function Chapter(student){
    this.chapters = chapter
}

function Subject(name, standard){
    this.name = name
    this.standard = standard
    this.chapters = Subject_to_Chapter_Mapping[`${this.name}_${this.standard}`]
}

function Student(nm, standard){ // this referes to the object who is calling this function
    // student object initialization
    this.name = nm
    this.standard = standard
    this.regd = reg_generator()
    this.subjects = Class_to_Subject_mapping[this.standard] // this.subjects = [maths, history]
    
    allot_chapters = () => {
        // allot chapters to subjects the student has been allotted
        chapters = {}
        for(let subject of this.subjects){
            chapters[subject] = (Subject_to_Chapter_Mapping[`${subject}_${this.standard}`])
        }
        return chapters
    }
    this.chapters = allot_chapters()
}



// const sub1 = new Subject()

// const st1 = new Student('Karthik', 10) // st1.name = 'Karthik'
// const st2 = new Student('Chandrakala', 9)
// const st3 = new Student('Akash', 8)
// const st4 = new Student('Amol', 8)
// const st5 = new Student('chirag', 9)
// const st6 = new Student('Reddy', 9)
// const st7 = new Student('Siddharth', 8)

// // console.log()

// // const sub1 = new(Maths, 10, )

// console.log(st1)
// console.log(st2)
// console.log(st3)
// console.log(st4)
// console.log(st5)
// console.log(st6)
// console.log(st7)


// Without using eval, create a calculator

// ------------------------------------------------------------------------------------------

function sayHello(){
    console.log(name)
    console.log(age)
    var name = "priyanka"
    let age = 21
}

sayHello()