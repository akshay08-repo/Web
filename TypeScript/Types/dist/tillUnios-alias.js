"use strict";
// //function to add
function add(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number')
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
const combineAge = add(23, 22, 'as-number');
console.log(combineAge);
const combineAgeText = add('23', '22', 'as-number');
console.log(combineAgeText);
const combineName = add('Max', 'Verstrappen', 'as-text');
console.log(combineName);
