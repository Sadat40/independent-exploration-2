// number of seconds that have passed
let time = 0;
time++;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

intervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
    counterElement.innerText=time;
    time++;
}

