var timeRemaining = new Date("June 30, 2021 00:00:00").getTime()

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = timeRemaining - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // seconds = seconds > 9 ? seconds : '0' + seconds; 
    if(seconds < 10 ) {
        seconds = '0' + seconds;
    }
    else {
        seconds;
    }
    
    document.getElementById("timeremaining").innerHTML = hours +" : " + minutes + " : "+ seconds;
    if(distance < 0){
        clearInterval(x);
        document.getElementById("timeremaining").innerHTML = "EXPIRED";
    }
    document.getElementById("time").innerHTML = hours +"h " + minutes + "m " + seconds + "s ";
    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
})
