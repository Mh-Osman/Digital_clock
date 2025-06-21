
const btn = document.getElementById('startBtn');
const btn2 = document.getElementById('resetBtn');
const btn3 = document.getElementById('startStopBtn');
let min = 0;
let sec = 0;
let interval = null;
let totalSeconds = 0;
btn.addEventListener('click', function () {
    min = parseInt(document.getElementById('min').value);
    sec = parseInt(document.getElementById('sec').value);
    document.getElementById('display').style.display = 'none';
    document.getElementById('controls').style.display = 'none';
    document.getElementById('countdown').style.display = 'block';
    startCountdown(min, sec);
});

btn3.addEventListener('click', () => {

    if (btn3.innerText == 'Start') {

        btn3.innerText = 'Stop';
        min = parseInt(document.getElementById('min').value);
        console.log(sec);
        sec = parseInt(document.getElementById('sec').value);
        document.getElementById('display').style.display = 'none';
        document.getElementById('controls').style.display = 'none';
        document.getElementById('countdown').style.display = 'block';
        startCountdown(min, sec);
    } else {


        btn3.innerText = 'Start';
        min = Math.floor(totalSeconds / 60);
        sec = totalSeconds % 60;
        document.getElementById('min').value = min;
        document.getElementById('sec').value = sec;

        clearInterval(interval);
    }


});

btn2.addEventListener('click', () => {
    min = 0;
    sec = 0;
    totalSeconds = 0;
    clearInterval(interval);
    document.getElementById('countdownDisplay').innerText = "00:00";
    document.getElementById('controls').style.display = 'block';
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('display').style.display = 'block';
    const startStopBtn = document.getElementById('startStopBtn');
    document.getElementById('min').value = 0;
    document.getElementById('sec').value = 0;
    startStopBtn.innerText = "Start";
});

function startCountdown(min, sec) {
    totalSeconds = min * 60 + sec;
    const startStopBtn = document.getElementById('startStopBtn');
    startStopBtn.innerText = "Stop";
    const countdownDisplay = document.getElementById('countdownDisplay');

    interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            countdownDisplay.innerText = "Time's up!";
            return;
        }

        min = Math.floor(totalSeconds / 60);
        sec = totalSeconds % 60;

        countdownDisplay.innerText = `${min}:${sec}`;
        totalSeconds--;
    }, 1000);
}

