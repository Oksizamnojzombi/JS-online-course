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


