function timeFormatter(inst) {
    var number = inst;
    var hours = (number/3600);
    var rHours = Math.floor(hours);
    var minutes;
    var rMinutes;
    var seconds;
    var rSeconds

    if(number>=3600){      
        minutes = (hours - rHours)*60;        
    } else {       
        minutes = (number/60);        
    }   
    rMinutes = Math.floor(minutes);
    seconds = (minutes - rMinutes)*60;
    rSeconds = Math.round(seconds);
    return number + ' seconds = ' + rHours + ' hour(s) ' + rMinutes + ' minute(s) and ' + rSeconds + ' second(s)'; 
         
}

exports.time = timeFormatter;