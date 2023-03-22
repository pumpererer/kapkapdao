// Get elements
const dateToday = document.getElementById("date_today");
const dateTomorrow = document.getElementById("date_tom");
const nameElement = document.getElementById("name");
const studentIdElement = document.getElementById("student_id");

// Prompt values
const name = prompt("Enter name: (Last Name, First Name Middle Name)");
const studentId = prompt("Enter id: (201934188)");

// Get today's date
const today = new Date();
// Get tomorrow's date
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

// Format today to string
const todYear = today.getFullYear();
const todMonth = today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
const todDate = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

// Format tomorrow to string
const tomYear = tomorrow.getFullYear();
const tomMonth = tomorrow.getMonth() < 9 ? "0" + (tomorrow.getMonth() + 1) : tomorrow.getMonth() + 1;
const tomDate = tomorrow.getDate() < 10 ? "0" + tomorrow.getDate() : tomorrow.getDate();

// Get a random time between 8am and 12pm
const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8);
const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12);
const randomTime = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

let hours = randomTime.getHours();
let minutes = randomTime.getMinutes().toString().padStart(2, "0");
hours = hours % 12;
hours = hours ? hours : 12;
const formattedTime = hours.toString().padStart(2, "0") + ":" + minutes;

// Populate elements
dateToday.innerText = todYear + "/" + todMonth + "/" + todDate + " " + formattedTime;
dateTomorrow.innerText = tomYear + "/" + tomMonth + "/" + tomDate;

nameElement.innerText = name.toUpperCase();
studentIdElement.innerText = studentId

