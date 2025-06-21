const btn = document.getElementById('startStopBtn');
const btn2 = document.getElementById('resetBtn');
const btn3 = document.getElementById('lapBtn');
let sec=0;
let hr=0;
let min=0;
let id= null;
let lap = 1;
btn.addEventListener('click', function() {

      if (btn.innerText == 'Start') {
        btn.innerText = 'Stop';
        startStopwatch('start');
       
      } else {
        btn.innerText = 'Start';
        startStopwatch('stop');
      }

})

btn2.addEventListener('click', function() {
    sec = 0;
    hr = 0;
    min = 0;
    clearInterval(id);
    document.getElementById('display').innerText = `${hr}:${min}:${sec}`;
    btn.innerText = 'Start';
})

btn3.addEventListener('click', function() {
    const lapTime = document.createElement('ul');
    lapTime.innerText = `lap ${lap++}: ${hr}:${min}:${sec}`;
    document.getElementById('lapList').appendChild(lapTime);
});


function startStopwatch(action) {
   
  if(action == 'start'){
 
      id = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        document.getElementById('display').innerText = `${hr}:${min}:${sec}`;
    }, 1000);

  }else{
 clearInterval(id);
    
  document.getElementById('display').innerText = `${hr}:${min}:${sec}`;
    
  }
   
}





