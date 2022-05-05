function showTime(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let timeDifference = 'AM';

    if (hours === 0){
        hours = 12;
    }

    if (hours > 12){
        hours = hours - 12;
        timeDifference = 'PM';
    }

    //operator 
    hours = (hours < 10) ? + '0' + hours : hours;
    minutes = (minutes < 10)? + '0' + minutes : minutes;
    seconds = (seconds < 10)? + '0' + seconds :seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + timeDifference;

    document.getElementById('clock-display').innerHTML = currentTime;
    document.getElementById('clock-display').textContent = currentTime;

    setTimeout(showTime, 1000);
}

showTime();


let copyYear = new Date().getFullYear();
document.getElementById('year').innerHTML = copyYear;
