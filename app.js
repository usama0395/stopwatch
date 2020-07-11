
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;
var startbtn = document.getElementById('startbtn')
function timer(){
  msec++
  msecHeading.innerHTML = msec;
  if(msec >= 100){
    sec++
    secHeading.innerHTML = sec
    msec = 0
  }
  if(sec >= 60){
      min++
      minHeading.innerHTML = min
      secHeading.innerHTML = '00' 
      sec = 00
  }
  }

function start(){  
    interval = setInterval(timer,10)
    startbtn.disabled = true
} 

function stop(){
    clearInterval(interval)
    startbtn.disabled = false
}

function Reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
 }