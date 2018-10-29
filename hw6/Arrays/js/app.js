// Home work 6
// Arrays

// 1.
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

/**
 * filterProducts - функция которая отфильтрует от меньшкго у большему продукты и выведет в заданом диапазоне цен
 * @param {Array} arr - массив продуктов
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 */

const filterProducts = (arr, min, max) => {  
    let filteredArr = arr.filter((index) => index.price >= min && index.price <= max);

    filteredArr.sort((prev, next) => prev.price - next.price);
};

filterProducts(products, 10, 20);

// 2.
let numbArr = [1, 2, 3, 5, 8, 9, 10];
let newCleanArr = [];

/**
 * 
 * @param {any} item - каждое значение из массива
 */

numbArr.forEach(item => {
    newCleanArr.push({
        digit: item,
        odd: !!(item % 2)
    });
});

//console.log(newCleanArr);

// 3.
let arreyWithNull = [12, 4, 50, 1, 0, 18, 40];

let oneNull = arreyWithNull.some(val => {
    if (val === 0) return false;
});

//console.log(oneNull);

// 4.
let wordsArray = ['yes', 'hello', 'no', 'easycode', 'what'];

let wordsLength = wordsArray.some(item => {
    if (item.length >= 3) return true;
});

// 5.
let objectsArray = [
    {
        char: "a",
        index: 12
    },
    {
        char: "w",
        index: 8
    },
    {
        char: "Y",
        index: 10
    },
    {
        char: "p",
        index: 3
    },
    {
        char: "p",
        index: 2
    },
    {
        char: "N",
        index: 6
    },
    {
        char: " ",
        index: 5
    },
    {
        char: "y",
        index: 4
    },
    {
        char: "r",
        index: 13
    },
    {
        char: "H",
        index: 0
    },
    {
        char: "e",
        index: 11
    },
    {
        char: "a",
        index: 1
    },
    {
        char: " ",
        index: 9
    },
    {
        char: "!",
        index: 14
    },
    {
        char: "e",
        index: 7
    }
];

/**
 * newStringFromArray - функция которая сортирует по индексам в массиве буквы и затем собирает в одну строчку все буквы
 * @param {Array} arr - массив обьектов с буквами и их значением
 */

const newStringFromArray = (arr) => {
    let filteredArr = arr.sort((prev, next) => prev.index - next.index);

    let reduceArr = filteredArr.reduce((prev, item) => prev + item.char + "", "");
};

newStringFromArray(objectsArray);
