// Home Work 4
// Functions

// 1.

function multiply() {
    if (arguments.length === 0) {
        return 0;
    }
    let result = 1;
    let max = arguments.length;
    for (let i = 0; i < max; i++) {
        if (typeof(i) === 'number') {
            result *= arguments[i];
        }
    }
    return result;
}

multiply();

// 3.

function reverseString(text) {
   let res = '';

   for (let i = text.length - 1; i >= 0; i--) {
       res += text[i];
   }
   return res;
}

reverseString('test');

// 4.

function getCodeStringFromText(text) {
    let res = '';
    for (let i = 0; i < text.length; i++) {
        res += text.charCodeAt(i) + ' ';
    }
    return res;
}

getCodeStringFromText('hello');

// Arrays

// 1.

let arr = [1, 2, 3];

function doubleArray(array) {
    let newArr = array.slice();

    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i]);
    }

    return newArr;
}

doubleArray(arr);

// 2.

function letLastIndexArray(array) {
    let lastIndex = array[array.length - 1];
    return lastIndex;
}

letLastIndexArray(arr);

// 3.

function fillingArray(number) {
    let newArr = [];
    let i = 1;
    while (i < number + 1) {
        newArr.push(i);
        i++;
    }

    return newArr;
}

fillingArray(100);

// 4.

let arrayFromArrays = [];

function changeCollection() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].shift();
        arrayFromArrays.push(arguments[i]);
    }
    console.log(arguments);
    return arrayFromArrays;
}

changeCollection([2, 3, 4, 8], ['a', 'b', 'c']);