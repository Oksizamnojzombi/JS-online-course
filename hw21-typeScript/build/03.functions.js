// Functions
function calcPlus(x = 0, y) {
    return x + y;
}
calcPlus(1);
function testArgs(...args) {
    return args;
}
testArgs(1, 2, 3);
function returnString(str, param) {
    if (typeof param === 'number') {
        return 100;
    }
    else if (typeof param === 'string') {
        return str + param;
    }
    else {
        return str;
    }
}
let res1 = returnString('string'); // 1 версия функции
let res2 = returnString('string', 'one more string'); // 2 версия функции
let res3 = returnString('string', 1); // 3 версия функции
// Arrow functions
const arrowTest = (x, y) => x + y;
const funcCalcPlus = calcPlus;
function funcWithCallback(val, handler) {
    return handler(val);
}
funcWithCallback(10, (value) => value * 10);
