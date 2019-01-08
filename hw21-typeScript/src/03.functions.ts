// Functions
function calcPlus(x: number = 0, y?: number): number {
    return x + y;
}

calcPlus(1);

function testArgs(...args: number[]): number[] {
    return args;
}

testArgs(1, 2, 3);

// Overloading
function returnString(str: string): string;
function returnString(str: string, oneMoreStr: string): string;
function returnString(str: string, num: number): number;

function returnString(str: string, param?: string | number): string | number {
    if (typeof param === 'number') {
        return 100;
    } else if (typeof param === 'string') {
        return str + param;
    } else {
        return str;
    }
} 

let res1 = returnString('string'); // 1 версия функции
let res2 = returnString('string', 'one more string'); // 2 версия функции
let res3 = returnString('string', 1); // 3 версия функции

// Arrow functions
const arrowTest = (x: number, y: number): number => x + y;

const funcCalcPlus: (x: number, y: number) => number = calcPlus;

function funcWithCallback(val: number, handler: (value: number) => number) {
    return handler(val);
}

funcWithCallback(10, (value: number) => value * 10);