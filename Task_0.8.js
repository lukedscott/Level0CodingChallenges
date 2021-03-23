function getHoursMinutes(num) {
    var hours;
    var minutes;
    var string1 = "";
    var string2 = "";
        hours = Math.floor(num/60);
        minutes = num - (hours * 60);
        if (hours == 1) {
        string1 = "hour";
        } else {
            string1 = "hours";
        } 
        if (minutes == 1) {
        string2 = "minute";
        } else {
            string2 = "minutes";
        }
        return(hours + " " + string1 + "," + " " + minutes + " " + string2);
    }
    console.log(getHoursMinutes(129));