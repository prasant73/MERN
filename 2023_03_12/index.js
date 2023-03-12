// Date and Time

let date = new Date() // create a date object with the current date as value
let date1 = new Date(2000) // passing a single value creates an epoch date

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
/*
year -> 0-99 -> 1900 - 1999
month -> 0 January, 11 December
day -> 1 - 31
hours: 0-23
min -> 0-59
sec -> 0 - 59
milliseconds -> 0-999
*/
let date2 = new Date(92, 3, 8, 16, 23, 56, 324)

let date3 = new Date('2000-06-12') // YYYY-MM-DDTHH:mm:ss.sssZ, T-> separator between date and time

let date4 = new Date("2023-03-11T10:42:43.450+05:30")
console.log(date.getMonth() + 1)

// toLocaleDateTime()

// console.log(date4)

// console.log("date: ", date4)
// console.log("Year: ", date4.getFullYear())
// console.log("Month: ", date4.getMonth())
// console.log("Day: ", date4.getDay())
// console.log("Hours: ", date4.getHours())
// console.log("Minutes: ", date4.getMinutes())
// console.log("Seconds: ", date4.getSeconds())
// console.log("Milliseconds: ", date4.getMilliseconds())
// console.log("TimeZoneOffset: ", date4.getTimezoneOffset())

let date5 = new Date('2023-02-11')
date5.setFullYear(2022)
date5.setMonth(05)
// setDate, 
// console.log(date5)

// console.log(date5.toDateString())
date6 = Date.now()
// console.log(date6.toDateString())
date7 = new Date(2021,1,32)
console.log(date7)


function getNumberOfDays(month, year){
    return 32 - new Date(year, month, 32).getDate()
}

console.log(getNumberOfDays(1, 2016))
console.log(getNumberOfDays(11, 2016))





