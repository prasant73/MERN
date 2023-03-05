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

// let REGD = []

// // function is_in(value, array){
//     // if a value exists, it returns the index of the value, else it returns -1
// //     return array.indexOf(value)
// // }

// const Class_to_Subject_mapping = {
//     // a student in a partucular class will be having the subjects assigned to him
//     10: ['maths', 'history'],
//     9: ["maths", "english"],
//     8: ["history", "english"]
// }

// const Subject_to_Chapter_Mapping = {
//     "maths_9":["Algebra","Trigonometry"],
//     "maths_10":["Algebra","Polynomial "],
//     "history_8":["women caste and reform","Ruling the Countryside"],
//     "history_9":["the french revolution","nazism"],
//     "history_10":["nationalism in india","the age on industrialisation"],
//     "english_10":["dust of snow","the proposal"],
//     "english_9":["the lost child","the adventure of toto"],
//     "english_8":["the tsunami","glimpses of the past"]
// }

// function reg_generator(){
//     // generate random 4 digit numbers which should be unique
//     do{
//         var regd = Math.floor(1000 + Math.random() * 1000);
//     }
//     while (
//         REGD.includes(regd)
//         // !REGD.includes(regd) == true
//         // is_in(regd, REGD) == -1
//     )
//     REGD.push(regd)
//     return regd
// }

// function Chapter(student){
//     this.chapters = chapter
// }

// function Subject(name, standard){
//     this.name = name
//     this.standard = standard
//     this.chapters = Subject_to_Chapter_Mapping[`${this.name}_${this.standard}`]
// }

// function Student(nm, standard){ // this referes to the object who is calling this function
//     // student object initialization
//     this.name = nm
//     this.standard = standard
//     this.regd = reg_generator()
//     this.subjects = Class_to_Subject_mapping[this.standard] // this.subjects = [maths, history]
    
//     allot_chapters = () => {
//         // allot chapters to subjects the student has been allotted
//         chapters = {}
//         for(let subject of this.subjects){
//             chapters[subject] = (Subject_to_Chapter_Mapping[`${subject}_${this.standard}`])
//         }
//         return chapters
//     }
//     this.chapters = allot_chapters()
// }



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

// function sayHello(){
//     console.log(name)
//     console.log(age)
//     var name = "priyanka"
//     let age = 21
// }

// sayHello()


// ------------------------------------------------------------------------------

// let a = ['a', 'b', 'c'] // [[0, 'a'], [1, 'b'], [2, 'c']]
// for (let i in a){
//     console.log(i, a[i])
// }

// // console.log("------------------------------------")

// for (const [idx, val] of a.entries()){
//     console.log(idx, val)
// }

// console.log("------------------------------------")

// a.forEach((idx, val) => {
//     console.log(idx, val)
//     }
// )

// console.log("------------------------------------")

// console.log(a.entries())


// ------------------------------------------------------------------------------------------


// reference passing
// reference passing allows a variable to be modified by the function it is passed to

// passing by value

// let num = 0;

// function incrementValue(number){
//     number ++ // num ->1
//     console.log("inside function")
//     console.log(number)
// }

// incrementValue(num) // the value of num is getting passed, not the variable
// console.log("Outside Function")
// console.log(num)

// passing by reference

// let arr = [3,4]
// console.log('post declaration')
// console.log(arr)

// // declaring a function
// function arrayModify(arg){
//     arg[0] = 5
//     arg[1] = 6
//     console.log("inside function")
//     console.log(arr)
// }

// arrayModify(arr); // arr is getting passed not the value of the array
// console.log("Outside Function")
// console.log(arr)

// objects are always passed by reference


// let num = 5

// function decrement(num){
//     num--;
//     console.log(num) // 4
// }

// decrement(num);
// console.log(num); // 5

// 4 5


// objects are always passed by reference

// let arr = [10, 11, 21, 13, 14, 15]

// function incrArr(arr){
//     // arr[0]++
//     // arr[1]++
//     // console.log(arr)
//     for (let j = 0; j < arr.length; j ++){
//         for (let i = 0; i < arr.length; i++){
//             if (i % 2 == 1) {
//                 arr[i] = "a";
//                 console.log(arr);
//                  // stop the execution of the inner loop - depends on the scope as well
//             }
//         }
//         break; 
//     }
// }

// // continue -> continue executing but skip the rest of the steps below me in the current execution

// incrArr(arr)
// console.log(arr)


// for (var i = 1; i < 6; i++){
//     if (i == 3){
//         continue // skip all the statements below me and go to the next execution
//     }
//     console.log(i)
// }

// console.log(`broken at ${i}`)


// ------------------------------------------------------------------------

// SET - collection of unique elements

// let emptySet = new Set();

// let names = new Set(['reddy', 'chandrakala', 'ankit', 'priyanka', 'reddy'])

// let names1 = new Set(['reddy', 'chandrakala', 'ankit', 'priyanka'])

// console.log(names == names1) // equality operator of sets ??


// let names = new Set()
// // add values inside Set
// names.add('Subhash')
// names.add('Kiran')
// names.add('ankit')
// names.add('Subhash')
// names.add('Subhash')

// console.log(names)
// console.log(names.size)


// names.delete('ankit')

// console.log(names)
// console.log(names.size)

// console.log(names.has('Kiran'))

// names.forEach(
//     function(name){
//         console.log(name)
//     }
// )

// console.log(names[0]) // you cannot access an set element by its index

// indexing doesnot work inside a set


// let places = new Set(['noida', 'ahmedabad', 'jalgaon', 'delhi', 'noida', 'goa'])

// places.forEach(function(place){
//     console.log(place)
// })



// ------------------------------------------------------------------------------

// recursion - technique by which a function calls itself

// function fact(num){
//     if (num == 0){
//         return 1
//     }
//     return num * fact(num - 1)
// }

// function fact(num){
//     // 
// }

// let fac = fact(10)
// console.log(fac)



//
/*
all the unacceptable blocks
all the eliminated cases
ideal case
*/

// if num < 0 -> fact of negative numbers not possible
// if number == 0 or number == 1 -> return 1
// ideal case



function sum(num){
    try{
        if (num == 0){
            return 1;
        }
    }
    catch{
        return num + sum(num - 1)
    }
}
// console.log(sum(6))

// stack overflow exception

// --------------------------------------------------------------------------

// defined a class
class Person{
    // class has a function introduceYourselves
    introduceYourselves(){
        console.log(`Hi, my name is ${this.name}, and my age is ${this.age}`)
    }
}

let person1 = new Person(); // defined an object

// defining object attributes and setting their values
person1.name = "priyanka"; 
person1.age = 21
// person1.introduceYourselves() // calling a function


let person2 = new Person(); // defined an object

// defining object attributes and setting their values
person2.name = "ankit"; 
person2.age = 22
// person2.introduceYourselves() // calling a function


// this -> refers to the current class object
// it is used to access/modify object properties/attributes and call the functions inside the class

// class Rectangle{
//     calcArea(){
//         return this.height * this.width
//     }
//     calcPerimeter(){
//         return 2 * (this.height + this.width)
//     }
//     printData(){
//         console.log("Width = " + this.width)
//         console.log("Height = " + this.height)
//         let area = this.calcArea()
//         let perimeter = this.calcPerimeter()
//         console.log("Area = " + area + ", Perimeter : ", + perimeter)
//     }
// }

// var rectangle = new Rectangle()
// rectangle.width = 3
// rectangle.height = 4
// rectangle.printData()


// implement Square, Circle


// ------------------------------------------------------------------

class Rectangle{
    
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }

    setValues(_width, _height){ // customized setter
        this._width = _width
        this._height = _height
    }

    // set width(_width){
    //     this._width = _width
    // }

    // set height(_height){
    //     this._height = _height
    // }

    get area(){ // property functions
        console.log("calling getter func")
        return this._height * this._width
    }
    
    calcPerimeter(){
        return 2 * (this._height + this._width)
    }
    printData(){
        console.log("Width = " + this._width)
        console.log("Height = " + this._height)
        let area = this.area
        let perimeter = this.calcPerimeter()
        console.log("Area = " + area + ", Perimeter : ", + perimeter)
    }
}

let rec1 = new Rectangle;

// rec1.printData()

// rec1.width = 3 // by default calling the setter function
// rec1.height = 4 // by default calling the setter function
rec1.setValues(3, 4)

// console.log(rec1.height) // calling getter function by default
// console.log(rec1.width) // calling getter function by default
// console.log(rec1.area)

// ------------------------------------------------------------------------------

class Teacher{
    constructor(name, age){ // constructors are special functions which gets called automatically at object declaration
        console.log("Teacher creation")
        this.name = name
        this.age = age
    }
    printData(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}


// let teacher1 = new Teacher('Prasant', 21)
// teacher1.printData()


// function is_in(value, array){
    // if a value exists, it returns the index of the value, else it returns -1
//     return array.indexOf(value)
// }



// function Student(nm, standard){ // this referes to the object who is calling this function
//     // student object initialization
//     this.name = nm
//     this.standard = standard
//     this.regd = reg_generator()
//     this.subjects = Class_to_Subject_mapping[this.standard] // this.subjects = [maths, history]
    
    // allot_chapters = () => {
    //     // allot chapters to subjects the student has been allotted
    //     chapters = {}
    //     for(let subject of this.subjects){
    //         chapters[subject] = (Subject_to_Chapter_Mapping[`${subject}_${this.standard}`])
    //     }
    //     return chapters
    // }
//     this.chapters = allot_chapters()
// }



class Student{

    REGD = []

    Class_to_Subject_mapping = { // class variable which is not static
        // a student in a partucular class will be having the subjects assigned to him
        10: ['maths', 'history'],
        9: ["maths", "english"],
        8: ["history", "english"]
    }

    static Subject_to_Chapter_Mapping = { // static class variable
        "maths_9":["Algebra","Trigonometry"],
        "maths_10":["Algebra","Polynomial "],
        "history_8":["women caste and reform","Ruling the Countryside"],
        "history_9":["the french revolution","nazism"],
        "history_10":["nationalism in india","the age on industrialisation"],
        "english_10":["dust of snow","the proposal"],
        "english_9":["the lost child","the adventure of toto"],
        "english_8":["the tsunami","glimpses of the past"]
    }
    
    constructor (name, standard) {
        this._name = name
        this._standard = standard
        this._regd = this.reg_generator
        this.subjects = this.Class_to_Subject_mapping[this._standard]
        this.chapters = this.allot_chapters()
    }

    get reg_generator(){
        // generate random 4 digit numbers which should be unique
        do{
            var regd = Math.floor(1000 + Math.random() * 1000);
        }
        while (
            this.REGD.includes(regd)
        )
        this.REGD.push(regd)
        return regd
    }

    viewData(){
        console.log(this._name)
        console.log(this._standard)
        console.log(this._regd)
        console.log(this.subjects)
        console.log(this.chapters)
    }

    allot_chapters(){
        // allot chapters to subjects the student has been allotted
        let chapters = {}
        for(let subject of this.subjects){
            chapters[subject] = (Student.Subject_to_Chapter_Mapping[`${subject}_${this._standard}`])
        }
        return chapters
    }
}


// let st1 = new Student('antony', 10)
// st1.viewData()

// -------------------------------------------------------------
// relationship between classes

// Inheritance

// inheritance is basically a way by which the properties of parent classes are inherited by the child classes

class LessNumberOfArgumentsError extends Error{
    constructor (errorMsg){
        super(errorMsg)
    }
}

// Abstract class -> cannot be instantiated directly - you cannot make a direct object of this class
class Vehicle{
    constructor (brand, model, price) {
        if (this.constructor == Vehicle){
            throw new Error("Abstract classes cannot be instantiated directly")
        }
        this._brand = brand
        this._model = model
        this._price = price
    }

    get gears(){return this._gears}

    get tyre_type(){return this._tyre_type}

    getInsuranceCost(months=12){ // method overriding
        console.log("from Vehicle Class")
        return months * 0
    }

    puncture () { // method overloading -> polymorphism (poly -> many, morph -> forms)
        // depending upon who is calling, it is behaving differently
        console.log(this.constructor.name)
        if (this.constructor.name == "Bicycle") {
            console.log("check " + this._cap)
            console.log("check " + this._tyre_type)
        } else if (this.constructor.name == "SportsBicycle") {
            console.log("take it to mechanic")
        } else if (this.constructor.name == "Scooter"){
            console.log("check " + this._tyre_type)
            console.log("check " + this._gears)
        } else if (arguments.length == 1){
            if (this.constructor.name == "Car"){
                console.log("check " + this._tyre_type)
            }
        }
    }

    printVehicleData () {
        console.log("brand : " + this._brand)
        console.log(this instanceof Car)
        console.log(this.constructor.name) // you can get the class name
        console.log("model : " + this._model)
        console.log("price : " + this._price)
        console.log('gears : ' + this._gears)
        console.log("insurance Cost : " + this.getInsuranceCost())
    }
}

// Scooter is a vehicle
class Scooter extends Vehicle{
    // all the functions from the vehicle class can be accessible from the child(Scooter) class but vice versa is not true
    
    constructor(brand, model, price, gears="1f4b", tyre_type="tubeless") {
        super(brand, model, price)
        this._gears = gears
        this._tyre_type = tyre_type
    }
    
    getInsuranceCost(months=12){ // getInsuranceCost method from Scooter class is OVERRIDING the getInsuranceCost method from its parent class
        // method overriding -> polymorphism
        console.log("from Scooter Class")
        return months * 20
    }

    // puncture()
}

// Car is a a Vehicle
class Car extends Vehicle{
    constructor(brand, model, price, gears="5+R", tyre_type="tubeless") {
        super(brand, model, price)
        this._gears = gears
        this._tyre_type = tyre_type
    }
    getInsuranceCost(months=12){ // method overriding
        console.log("from Car Class")
        return months * 50
    }
}

// bicycle is a vehicle
class Bicycle extends Vehicle{
    constructor(brand, model, price, gears=0, tyre_type="tube", cap="nylon cap") {
        super(brand, model, price)
        this._gears = gears
        this._tyre_type = tyre_type
        this._cap = cap
    }

    get cap(){return this._cap}
    
}

class SportsBicycle extends Bicycle{
    constructor (brand, model, price, gears, body_material="sturdy_aluminium"){
        super(brand, model, price, gears)
        this._body_material = body_material
    }

}

let sc1 = new Scooter('Bajaj', 'Vespa', 95000)
let car1 = new Car('Tata', 'Tiago', 750000)
let bc1 = new Bicycle('TVS', 'Star City', 5000)
let sb1 = new SportsBicycle('KTM',  model='MyByk', price=50000, gears='3f9b') // 'KTM', 'MyByk', 50000, '3f9b' these avaslues are positional arguments

// positional arguments, keyword arguments
// positional arguments -> keyword arguments

sc1.printVehicleData()
car1.printVehicleData()
bc1.printVehicleData()
sb1.printVehicleData()

sc1.puncture()
car1.puncture()
bc1.puncture()
sb1.puncture()

let v1 = new Vehicle()

console.log("Scooter Insurance Cost : " + sc1.getInsuranceCost(12))
console.log("Car Insurance Cost : " + car1.getInsuranceCost(12))
console.log("Bicycle Insurance Cost : " + bc1.getInsuranceCost(12))





/*
Staff - name, desg, salary, 
    Teaching Staff
        Teacher
            - Biology Teacher
            - History Teacher
        Assistants
    Non Teaching Staff
        peons
        principal
        accounts
    

*/