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

string = a.toString() + b + '';
console.log("string", string);

// Number. Tasks.

// 1. Число Pi из Math и округлить до 2х знаков после точки
let pi = Math.PI;
console.log("Pi", +pi.toFixed(2));

// 2. Максимальное и минимальное значения из представленного ряда
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log("max ->", max, "min ->", min);

// 3. Рфбота с Math.random
//a.
let random = Math.random();
console.log(+random.toFixed(2));

//b. где Х это одна цыфра?
console.log(Math.round(random * 10));

// 4. Проверка результата вычисления 0,6+0,7 - как привести к нормальному виду (1,3)
a = 0.6;
b = 0.7;

let sum = a + b;
console.log(sum);

// приводим к нормальному виду
let normal_sum = +sum.toFixed(1);
console.log(normal_sum);

normal_sum = Math.round(sum * 10) / 10;
console.log(normal_sum);

// 5. Получить число из строки '100$'
string = '100$';
console.log(string);

let new_string = parseInt(string);
console.log(new_string);
