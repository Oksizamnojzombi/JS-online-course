// Home work 2
// Objects.

// 1.
let obj = {
    product: 'iphone'
};

console.log(obj.product);

// 2.
obj.price = 1000;
obj.currency = 'dollar';

console.log(obj);

// 3.

obj.details = {};
console.log(obj.details);
obj.details.model = '8 Plus';
obj.details.color = 'Red';

console.log(obj);

// Assignment

// 1.

let a = 10;
let b = 18;
let c = 10;

a += 10;
b *= 18;
c -= 10;

console.log(a, b, c);

let x = 10;
let y = 2;
let z = 3;
let i = 4;

x += a;
y *= z;
i *= 5 * y;

console.log(x, y, i);

// 2.
x *= x;

console.log(x);


// Условные операторы

let myvar;

myvar = 'hidden';
if (myvar == 'hidden') {
    myvar = 'visible';
} else {
    myvar = 'hidden';
}
console.log(myvar);

// 1. 2. 3.

myvar = 3;
if (myvar === 0) {
    myvar = 1;
} else if (myvar < 0) {
    myvar = 'less then zero';
} else if (myvar > 0) {
    myvar *= 10;
}

console.log(myvar);
