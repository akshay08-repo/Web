// //function to add

// // function add(n1: number, n2: number) {
// //     return n1 + n2;
// // }

// // const num1 = 5;
// // const num2 = 3.5;

// // const result = add(num1, num2);

// // console.log(result);

// //one improvement for the above is 


// // function add(n1: number, n2: number, printResult: boolean, resultPhrase: String) {
// //     const result = n1 + n2;
// //     if (printResult)
// //         console.log(resultPhrase + result.toString());
// //     else {
// //         return result;
// //     }
// // }

// // const num1 = 5;
// // const num2 = 3.5;
// // const printResult = true;
// // const resultPhrase = 'Result is: ';

// // add(num1, num2, printResult, resultPhrase);

// //define enums 

// enum Role { ADMIN, READ_ONLY, AUTHOR };

// //defining objects
// // const person: {
// //     name: string,
// //     age: number,
// //     hobbies: string[],
// //     role: [number, string];
// // } = {
// //     name: 'Akshay',
// //     age: 25,
// //     hobbies: ['Sports', 'Cooking'],
// //     role: [1, 'author']
// // };
// // person.role.push(2, 'admin');
// //person.role[1] = 2;
// // for (const hobby of person.hobbies)
// //     console.log(hobby.toUpperCase());
// const person = {
//     name: 'Akshay',
//     age: 25,
//     role: Role.ADMIN
// };

// if (person.role === Role.AUTHOR)
//     console.log("isAdmin");

//union
// function add(input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number')
//         result = input1 + input2;
//     else
//         result = input1.toString() + input2.toString();
//     return result;
// }

// const combineAge = add(23, 22);
// console.log(combineAge);

// const combineName = add('Max', 'Verstrappen');
// console.log(combineName);

//Literal Types
type Combinable = number | string;
type CombinableDescriptor = 'as-number' | 'as-text';
function add(
    input1: Combinable,
    input2: Combinable,
    resultType: CombinableDescriptor
) {
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