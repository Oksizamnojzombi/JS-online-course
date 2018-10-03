// Home work 3
// Циклы

// 1.
let string = 'I am in the easycode';
let arr  = string.split(' ');

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

arr = arr.join(' ');

// 2.
let string2 = 'tseb eht ma i';
let s = '';

for (let i = string2.length - 1; i >= 0; i--) { // никак не придумала почему в консоли первым символом появляется undefined, поэтому сделала с костылём, отнимаю от длины единицу. На занятие может опоздаю, добавь к вопросам по ДЗ
    s += string2[i];
}

// 3.
let n = 10;
let i;
// for (let i = 1; i < 10; i++) {
//     n = n * i;
// }
i = 1;
while (i < 10) {
    n *= i;
    i++;
}

// 5.
let str = 'JavaScript is a pretty good language';
let oneMoreArr = str.split(' ');

i = 0;
while (i < oneMoreArr.length) {
    oneMoreArr[i] = oneMoreArr[i][0].toUpperCase() + oneMoreArr[i].slice(1);
    i++;
}

oneMoreArr = oneMoreArr.join('');

// 6.

for (let i = 1; i < 15; i++) {
    if( i % 2 !== 0) {
        console.log(i);
    }
}