var number;
var i;
var string = " ";
function vowels(param) {
    number = (param.length);
    for (i = 0; i < number; i++) {
    if (param.charAt(i) == "a" || param.charAt(i) == "e" || param.charAt(i) == "i" || param.charAt(i) == "o" ||param.charAt(i) == "u") {
    string = string + param.charAt(i);
}   else if (param.charAt(i) == "A" || param.charAt(i) == "E" || param.charAt(i) == "I" || param.charAt(i) == "O" || param.charAt(i) == "U") {
    string = string + param.charAt(i);
} 
    
}
    return string;
}
console.log(vowels("UmuzI"));