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

console.log(firstNewArray);
console.log(secondNewArray);
console.log(thirdNewArray);


