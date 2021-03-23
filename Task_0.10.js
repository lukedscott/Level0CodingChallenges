function commonLetters(param1, param2) {
var boolean;
var i;
var j;
var outputstring = "";
    for(i = 0; i < param1.length; i++) {
        boolean = false;
        j = 0;
        while((j < param2.length) && (boolean == false)) { 
        if ((param1.charAt(i) == param2.charAt(j)) && (outputstring.indexOf(param1.charAt(i))== -1)) {
        boolean = true;
        outputstring = outputstring + param1.charAt(i) + "," ;
        } else {
          j++;
        }
        }
    }
        return "Common letters: " + outputstring.substr(0, outputstring.length - 1);
}
        
console.log(commonLetters("house", "computers"));