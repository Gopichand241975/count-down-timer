// Set your target date here (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).getTime();

const daysEl = document.querySelector('#days span');
const hoursEl = document.querySelector('#hours span');
const minutesEl = document.querySelector('#minutes span');
const secondsEl = document.querySelector('#seconds span');
const endMsg = document.getElementById('end');

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(timerInterval);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        endMsg.textContent = "Countdown Complete!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
    endMsg.textContent = "";
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();