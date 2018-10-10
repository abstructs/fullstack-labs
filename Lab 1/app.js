var moment = require("moment")

moment.locale('en');
let now = moment().format('LLLLL');

console.log(now)

const greet = _ => {
    for(var i = 0; i < 10; i++) {
        console.log("hello world");
    }
}

greet();

const getCurrentTimeAndDate = _ => {
    const date = new Date()
    console.log(`Current Date: ${date.getFullYear()}-${ (date.getMonth() < 10 ? "0" : "") + 
    date.getMonth()}-${date.getDay()} Current Time: ${date.getTime()}`);
}

getCurrentTimeAndDate();