const numbers = [5, 7, 10, 11, 3];

function sum(arr) {
    let total = 0;
    for (let i = 0; i <arr.length; i++) {
        total +=arr[i];
    }
    return total;
}
console.log('Sum:', sum(numbers));



function biggestOf(arr) {
    let bigest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > bigest) {
            bigest = arr[i];
        }
    }
    return bigest
}
console.log('Biggest:', biggestOf(numbers));



function average(arr) {
    return sum(arr) / arr.length;
}
console.log('Average:', average(numbers));

console.log('Sum of [1, 2, 3]:', sum([1, 2, 3]));
