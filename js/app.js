// Home Work
// Strings. Tasks.

let string;

// 1. Первая и последняя буквы строки
string = 'some test string';
console.log(string.length);
console.log(string[0], string[15]);

// 2.
console.log(string[0].toUpperCase(), string[15].toUpperCase());

// 3. Положение слова 'string'
console.log(string.indexOf("string"));

// 4. Положение второго пробела в строчке
console.log(string.indexOf(" "));
console.log(string.indexOf(" ", 5));

// 5. Строка с 5-го длиной 4 букв
console.log(string.substr(5,4));

// 6. Строка с 5-го по 9-й символы
// Это если вывести включительно с 9м символом
console.log(string.substring(5, 10));

// 7. Исходная строка без последних 6ти символов
console.log( string.slice(0, -6));

// 8. Получить переменную string с текстом "2016"

let a = 20;
let b = 16;

string = a.toString() + b.toString();

console.log("string", string);