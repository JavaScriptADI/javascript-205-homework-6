function printDouble(n) {
    console.log(`not returns, but console.log ${n * 2}`);
}

function doubleOf(n) {
    return n * 2;
}

printDouble(5);
console.log(doubleOf(5));
const result = doubleOf(8);
console.log(result);
console.log(doubleOf(5) + doubleOf(10));

// function printDouble(n) doesnt return anything;
console.log(`--------- ${printDouble(5 + 10)}`);