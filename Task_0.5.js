var area;
var s;
function getArea(param1, param2, param3) {
    s = 1/2 * (param1 + param2 + param3);                                //Formula calculates semi-perimeter 
    area = Math.sqrt(s * (s - param1) * (s - param2) * (s - param3));    //Math.sqrt function is used in combo with area formula 
    return area;


}
console.log(getArea(14, 10, 13));
