// function addNumbers(num1, num2){
//     return num1 + num2
// }

// var sum = addNumbers(5, 4) 
// // () -> call

// function Car(type, fuelType){
//     this.type = type;
//     this.fuelType = fuelType
// }

// function setBrand(brand){
//     Car.call(this, "sedan", "diesel"); // setting the context
//     // this.type = type;
//     // this.fuelType = fuelType
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function setPrice(price){
//     Car.call(this, "SUV", "petrol");
//     this.price = price;
//     console.log(`Car details = `, this);

//     const newerBrand = new setBrand(this, "Hatchback", "diesel");
//     this.price = price;
//     console.log(`Car details again = `, this);

// }


// -----------------------------------------------------------------


// const newBrand = new setBrand("Mahindra")
// const newPrice = new setPrice(1000000)


// function Car(type, fuelType){
//     this.type = type;
//     this.fuelType = fuelType
// }

// function setBrand(brand, arr){
//     Car.apply(this, arr);
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function setPrice(price){
//     Car.apply(this, ["SUV", "petrol"]);
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand("Mahindra", arr=["sedan", "diesel"])
// const newPrice = new setPrice(1000000)

// console.log(newBrand)


// --------------------------------------------------------------------------


// bind

let runner = {
    name: "Suraj",
    run: function(speed){
        console.log(this.name + " is running at " + speed + "kmph")
    }
}

let flyer = {
    name: "Antony",
    fly: function (speed){
        console.log(this.name + " is flying at " + speed + "kmph")
    }
}

let run = runner.run.bind(flyer, 20); // overriding the context you have set internally
// sets the context except for all the functions

// function borrowing -> the bind() function/method it allows an object to borrow a method from another object without making a copy of that method

// overriding the contxt which is already set inside the function

// this === context

run();











