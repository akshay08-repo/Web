"use strict";
// //function to add
function add(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number')
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
var combineAge = add(23, 22, 'as-number');
console.log(combineAge);
var combineAgeText = add('23', '22', 'as-number');
console.log(combineAgeText);
var combineName = add('Max', 'Verstrappen', 'as-text');
console.log(combineName);
