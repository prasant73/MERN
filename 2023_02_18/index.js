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



// Without using eval, create a calculator