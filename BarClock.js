$(document).ready(function() {
    
    //Find if it is a leap year
    var currentYear = (new Date).getFullYear();
    isLeap = new Date(currentYear, 1, 29).getMonth() == 1;
    
    setInterval(function(){ //Update every 1 second
    
            //Variables for hours, minutes, seconds
			var currentTime = new Date();
			var h = currentTime.getHours();
			var m = currentTime.getMinutes();
			var s = currentTime.getSeconds();
        
        //Change bar length based on % of time
        $("#hours .clock").css("width", (h/24*100)+"%");
        $("#minutes .clock").css("width", (m/60*100)+"%");
        $("#seconds .clock").css("width", (s/60*100)+"%");
        
        //Find the date out of 365 or 366(Leap year)
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.ceil(diff / oneDay);
        
        //Choose formula based on if leap year or not
        if(isLeap == true){
            $("#days .clock").css("width", (day/366*100)+"%");
        }
        else{
            $("#days .clock").css("width", (day/365*100)+"%");
        }
        
    },1000);

});
