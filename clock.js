function currentDateTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var dayString = "";
    var monthString = "";
    var yearString = "";
    var hoursString = "";
    var minutesString = "";
    var secondsString = "";
    var am_pm = "AM"
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    if(day<10){
        dayString = "0"+ day.toString()
    }else{
        dayString = day.toString()
    }

    monthString = months[month]

    if(year<10){
        yearString = "0"+ year.toString()
    }else if(year<100){
        yearString = "00"+ year.toString()
    }else if(year<1000){
        yearString = "000"+ year.toString()
    }
    else{
        yearString = year.toString()
    }

    if(hours>12){
        am_pm = "PM";
        hours = hours - 12;
    }

    if(hours<10){
        hoursString = "0"+ hours.toString()
    }else{
        hoursString = hours.toString()
    }

    if(minutes<10){
        minutesString = "0"+minutes.toString()
    }else{
        minutesString = minutes.toString()
    }

    if(seconds<10){
        secondsString = "0"+seconds.toString()
    }else{
        secondsString = seconds.toString()
    }

    var fullDate = monthString + ' '+ dayString + ', ' +  yearString;
    var currentTime = hoursString + ':' + minutesString + ':' + secondsString;

    var myClock = document.getElementById('clock');
    var myAmPm = document.getElementById('am_pm');
    var myDate = document.getElementById('date');

    myClock.innerHTML = currentTime;
    myAmPm.innerHTML = am_pm;
    myDate.innerHTML = fullDate;
}

function updateDateTime(){
    setInterval(currentDateTime, 1000)
}


