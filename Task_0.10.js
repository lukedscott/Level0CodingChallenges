var string1 = " "
function commonLetters(param1, param2) {
    for(i = 0; i < param1.length; i++) {
        c = param1.charAt(i);
        if(param2.indexOf(c) !== -1)
        string1 = string1 + c;
    }
    return string1;
}
console.log(commonLetters("lurk", "work"));