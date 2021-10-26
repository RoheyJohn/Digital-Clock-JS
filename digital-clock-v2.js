const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

let year = "";
let month = "";
let day = "";

let today = "";

const date = document.querySelector("#date");
const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const timerContainer = document.querySelector("main");

const time = () => {
  let now = new Date();

  today =
    days[now.getDay()] + " " + months[now.getMonth()] + " " + now.getFullYear();

  date.textContent = today;

  hour.textContent =
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  minutes.textContent =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  seconds.textContent =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
};

setInterval(time, 1000);

// handle date and time zoom effect
timerContainer.addEventListener("click", () => {
  timerContainer.classList.toggle("zoomIn");
});



