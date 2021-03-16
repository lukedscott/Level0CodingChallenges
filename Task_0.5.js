function getArea(side1, side2, side3) {
var area;
var semiperimeter;     
    semiperimeter = 1/2 * (side1 + side2 + side3);                                
    area = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));     
    return area;
}
console.log(getArea(14, 10, 13));
