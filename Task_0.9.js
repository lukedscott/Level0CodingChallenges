function vowels(word) {
var number;
var i;
var string = " ";
    number = (word.length);
    for (i = 0; i < number; i++) {
    if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" ||word.charAt(i) == "u") {
    string = string + word.charAt(i);
}   else if (word.charAt(i) == "A" || word.charAt(i) == "E" || word.charAt(i) == "I" || word.charAt(i) == "O" || word.charAt(i) == "U") {
    string = string + word.charAt(i);
} 
    
}
    return string;
}
console.log(vowels("UmuzI"));