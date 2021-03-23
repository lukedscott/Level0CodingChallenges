function commonLetters(str1, str2) {
var boolean;
var i;
var j;
var outputstring = "";
    for(i = 0; i < str1.length; i++) {
        boolean = false;
        j = 0;
        while((j < str2.length) && (boolean == false)) { 
        if ((str1.charAt(i) == str2.charAt(j)) && (outputstring.indexOf(str1.charAt(i))== -1)) {
        boolean = true;
        outputstring = outputstring + str1.charAt(i) + "," ;
        } else {
          j++;
        }
        }
    }
        return "Common letters: " + outputstring.substr(0, outputstring.length - 1);
}
        
console.log(commonLetters("house", "computers"));