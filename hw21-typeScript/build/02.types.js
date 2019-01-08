// JS Types
// Number, String, Boolean, Undefined, Null, Symbol, Object
// Array, Enum, Tupple, any, void, never
// Basic
let str = 'Some string';
let isAdmin = true;
let num = 1;
num = 0;
// Array
let stringArray = ['text', 'text'];
let numArray = [1, 2, 3, 4];
let tupple = [1, true, 'string'];
numArray.push(5);
// Enum
var Months;
(function (Months) {
    Months["January"] = "jun";
    Months["February"] = "feb";
    Months["March"] = "mar";
})(Months || (Months = {}));
;
const june = Months.January;
console.log(june);
