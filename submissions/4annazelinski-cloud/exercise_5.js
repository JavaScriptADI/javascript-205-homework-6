function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));



function biggest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    } 
}
console.log(biggest(10, 3));
console.log(biggest(2, 8));



function passOrFail(score) {
    if (score >= 70) {
        return 'Passed';
    } else {
        return 'Failed';
    } 
}
console.log(passOrFail(85));
console.log(passOrFail(41));