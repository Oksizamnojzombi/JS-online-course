// Home work 3
// Циклы

// 1.
let string = 'I am in the easycode';
let arr  = string.split(' ');

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

arr = arr.join(' ');
console.log(arr);

// 2.
let string2 = 'tseb eht ma i';
let s = '';

for (let i = string2.length - 1; i >= 0; i--) { // никак не придумала почему в консоли первым символом появляется undefined, поэтому сделала с костылём, отнимаю от длины единицу. На занятие может опоздаю, добавь к вопросам по ДЗ
    s += string2[i];
}

console.log(s);