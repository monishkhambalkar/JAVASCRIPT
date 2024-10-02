const exp1 = new RegExp("/abc/");

const exp2 = /abc/;
const year = "12367";

// console.log(/[0123456789]/.test(year));
// console.log(/[0-9]/.test(year));

// check for date
const dateRegExp = /\d\d-\d\d-\d\d\d\d/;
const date = "20-08-2000";
// console.log(dateRegExp.test(date));

// check for time
const timeRegExp = /\d\d:\d\d/;
const time = "12:00 AM";
//console.log(timeRegExp.test(time));

const timeRegExpComplete = /\d\d:\d\d \D\D/;
const completeTime = "12:00 30";
// console.log(timeRegExpComplete.test(completeTime));

const numberRegExp = /\d+/;
const digits = 1233;
// console.log(numberRegExp.test(digits));

// check for date
const dateRegExpD = /\d{1,2}-\d{1,2}-\d{1,4}/;
const dateD = "20-08-2000";
// console.log(dateRegExpD.test(dateD));

// message regexp
const messageRegExp = /\w+/;
let message = "Test";
message = 1234;
message = "";
// message = console.log(messageRegExp.test(message));

// message regexp
const checkNumbers = /d+/;
let numbers = 1234;
message = console.log(checkNumbers.test(numbers));
