function time() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const el = document.getElementById('c1');
    let now = new Date()
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    format = 'PM'
    if (hours < 12) {

        format = 'AM';


    } else {

        hours = hours - 12;
    }

    el.innerText = `${hours}:${minutes}:${seconds} ${format}`;

    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    const dateEl = document.getElementById('c2');
    dateEl.innerText = `${day} ${date} ${month} ${year}`;

}

setInterval(time, 1000);

time();






