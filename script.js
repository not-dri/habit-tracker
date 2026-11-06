var date = new Date();
console.log(date);

var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

console.log("The current month is" + currentMonth);
console.log("The current weekday is" + currentDay);
console.log("The current date is" + currentDate);
console.log("The current year is" + currentYear);

var months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var title = document.getElementById("title");
title.innerHTML = months[currentMonth];

var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function(){

    let habits = prompt("What's your habit?", habitTitle.innerHTML);
    if (habits.length == 0){
         habitTitle.innerHTML = "click to set routine";
    }else{
        habitTitle.innerHTML = habits;
    }
} 

var daysInTheMonthList = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth;

var dayCount =  0;
var rowCount = 0;
var days = document.getElementsByClassName("days");

for(var i=0; i < days.length; i++){
    var day = days[rowCount].getElementsByClassName("day");
    for (var j=0; j < day.length; j++){
        if(dayCount == currentDate - 1){
            day[j].setAttribute("style", "color: rgb(234, 1, 144);");
            day[j].setAttribute("style", "border:2px solid black");
        }

        if (dayCount < daysInThisMonth){
            day[j].innerHTML = dayCount + 1;
            day[j].setAttribute("id", "day" + (dayCount + 1));
            dayCount++;
        } else {
            day[j].innerHTML = "";
            day[j].setAttribute("style", "background-color:white");
        }
    }
    rowCount++;
}

var complete = new Array(31);
for (var i = 0; i < dayCount; i++){
    var tempString = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log("storing date:" + tempString);
    var tempDay = localStorage.getItem(tempString);
    connsole.log(tempDay);
    if (tempDay == null || tempDay == "false"){
        localStorage.setItem(tempString, "false");
    } else if (tempDay == "true"){
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}

console.log("complete array:" + completed);
console.log("total days completed:" + daysCompleted);

for (var i = 0; i < currentDate; i++){
    var tempString = "" + (currentMonth + 1) + "-"
}