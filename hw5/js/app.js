//Home Work 5
// Functions

// 6.

let array = ['my', 'name', 'is', 'Trinity'];
let array2 = [10, 20, 30, 40];
let array3 = ['abc', '123'];

function backNewString(arr, callback) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let callbackres = callback(arr[i]);
        res.push(callbackres);
    }

    return 'New value:' + res;
}

let firstNewArray = backNewString(array, function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1); // так и не придумала как урать запятые
});

let secondNewArray = backNewString(array2, function(item) {
    return item * 10;
});

let thirdNewArray = backNewString(array3, function(item) {
    return item.split("").reverse().join("");
});

// Arrays

// 1.

let str = 'dbwjhdwoanvf';

function sortString(string){
    string = string.split("").sort().join("");
    return string;
}

sortString(str);

// 2.

let arrNumber = [-10, -5, 6, 3, 0, 4, 1, 2];

arrNumber.sort(function(prev, next) {
    return next - prev;
});

// 3.

let arrFromTo = ['a', 'b', 'c', 'd', 'e', 'f'];

function getNewArray(arr, numA, numB) {
    return arr.filter(function(element) {
        return element[0] >= arr[numA] && element[0] <= arr[numB];
    });
}

getNewArray(arrFromTo, 2, 4);

// 4.

let numArray = ['one', 1, 'two', 2];
let newNumArr = numArray.concat(numArray);

// 5.

let numberArray = [1, 2, 3, 4, 5, 6];

function deleteIndex(arr, num) {
    arr.splice(num, 2);
}

deleteIndex(numberArray, 2);


// 6.

function replaceIndex(arr, num, count, newVal1, newVal2) {
    arr.splice(num, count, newVal1, newVal2);
}

replaceIndex(numberArray, 2, 2, 'three', 'four');

// 7.

numberArray.splice(3, 0, 'awesome');

// 11.

const products = [
    {
        title: 'prod1',
        price: 5.5
    },
    {
        title: 'prod2',
        price: 18
    },
    {
        title: 'prod3',
        price: 10
    },
    {
        title: 'prod5',
        price: 12.5
    },
    {
        title: 'prod6',
        price: 15
    },
    {
        title: 'prod7',
        price: 21
    },
    {
        title: 'prod8',
        price: 25.5
    },
    {
        title: 'prod9',
        price: 28
    },
    {
        title: 'prod10',
        price: 30
    }
];

function filterProducts(arr, min, max) {
    let filteredArr =  arr.filter(function(index) {
        return index.price >= min && index.price <= max;
    });

    return filteredArr.sort(function(prev, next) {
        return prev.price - next.price;
    });
}

filterProducts(products, 10, 20);
console.log(filterProducts(products, 10, 20));
