// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result:' + num);
//     return;
// }

// printResult(add(5, 12));

//Functions as Types

// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
// function printResult(num: number) {
//     console.log('Result:' + num);
// }
// let combineValues: (a: number, b: number) => number;

// combineValues = add;

// console.log(combineValues(2, 4));


// //Function Types as Callback

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
// };

// addAndHandle(10, 20, (res) => {
//     console.log(res);
// });

// //Unkown Type

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "hello";
// //userName= userInput; this will throw an error

// if (typeof userInput === 'string')
//     userName = userInput;

//never type

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('this is a error', 221);