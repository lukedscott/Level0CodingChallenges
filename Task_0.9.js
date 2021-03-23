function vowels(word) {
var number;
var i;
var outputstring = "";
var inputstring = '';
        inputstring = word;
        inputstring = inputstring.toLowerCase();
        number = (word.length);
        for (i = 0; i < number; i++) {
        if ((inputstring.charAt(i) == "a" || inputstring.charAt(i) == "e" || inputstring.charAt(i) == "i" || inputstring.charAt(i) == "o" ||inputstring.charAt(i) == "u") && (outputstring.indexOf(inputstring.charAt(i)) == -1)) {
        outputstring = outputstring + inputstring.charAt(i) + ',';
        }
        }
            return "Vowels: " + outputstring.substr(0, outputstring.length - 1);
    }
        
    console.log(vowels("Umuzi"));