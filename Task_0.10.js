function commonLetters(word1, word2) {
var string1 = " "
var common;                                              
    for(i = 0; i < word1.length; i++) {
        common = word1.charAt(i);
        if(word2.indexOf(common) !== -1)
        string1 = string1 + common;
    }
    return string1;
}
console.log(commonLetters("definitive", "instinctive"));