


window.onload = function() {

    var tens = 00;
    var seconds = 00;
    var minutes = 00;
    var hours = 00;

    var textTens = document.getElementById("tens");
    var textSeconds = document.getElementById("s");
    var textMinutes = document.getElementById("min");
    var textHours = document.getElementById("h");

    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");

    var interval;

    btnStart.onclick = function() {
        btnStart.style.display = "none";
        btnStop.style.display = "block";

        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function() {
        btnStop.style.display = "none";
        btnStart.style.display = "block";

        clearInterval(interval);
    }

    btnReset.onclick = function() {
        if(btnStop.style.display == "block"){
            btnStop.style.display = "none";
            btnStart.style.display = "block";
        }
        clearInterval(interval);

        tens = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";

        textTens.innerHTML = tens;
        textSeconds.innerHTML = seconds;
        textMinutes.innerHTML = minutes;
        textHours.innerHTML = hours;
    }

    function startTimer() {
        tens++;

        if(tens < 9) {
            textTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            textTens.innerHTML = tens;
        }
        
        if(tens > 99) {
            seconds++;
            textSeconds.innerHTML = "0" + seconds;
            tens = 0;
            textTens.innerHTML = "00";
        }

        if(seconds > 9) {
            textSeconds.innerHTML = seconds;
        }

         if(seconds > 59) {
            minutes++;
            textMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            textSeconds.innerHTML = "00";
        }

        if(minutes > 9) {
            textMinutes.innerHTML = minutes;
        }

        if(minutes > 59) {
            hours++;
            textHours.innerHTML = "0" + hours;
            minutes = 0;
            textMinutes.innerHTML = "00";
        }

        if(hours > 9) {
            textHours.innerHTML = hours;
        }
    }   
}