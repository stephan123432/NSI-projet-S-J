// Function to extract URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Populate order details from URL parameters
document.getElementById("name").textContent = getQueryParam("name") || "N/A";
document.getElementById("email").textContent = getQueryParam("email") || "N/A";
document.getElementById("phone").textContent = getQueryParam("phone") || "N/A";
document.getElementById("location").textContent = getQueryParam("location") || "N/A";
document.getElementById("date").textContent = getQueryParam("date") || "N/A";
document.getElementById("time").textContent = getQueryParam("time") || "N/A";
document.getElementById("instructions").textContent = getQueryParam("instructions") || "None";

// Countdown Timer
let countdownTime = 30 * 60; // 30 minutes in seconds
const timerElement = document.getElementById("timer");

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    countdownTime--;

    if (countdownTime >= 0) {
        setTimeout(updateCountdown, 1000);
    } else {
        timerElement.textContent = "Your order has been delivered!";
    }
}

updateCountdown();

