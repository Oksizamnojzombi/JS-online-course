// JS Types
// Number, String, Boolean, Undefined, Null, Symbol, Object
// Array, Enum, Tupple, any, void, never
// Basic
let str: string = 'Some string';
let isAdmin: boolean = true;
let num: number = 1;

num = 0;
// Array
let stringArray: string[] = ['text', 'text'];
let numArray: Array<number> = [1, 2, 3, 4];

let tupple: [number, boolean, string] = [1, true, 'string'];

numArray.push(5);

// Enum
enum Months {
    January = 'jun',
    February = 'feb',
    March = 'mar'
};

const june: Months = Months.January;
 
console.log(june);






