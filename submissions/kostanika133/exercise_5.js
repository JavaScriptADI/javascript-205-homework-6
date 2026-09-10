function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function biggest(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return (a, b);
  }
}

function passOrFail(score) {
  if (score > 70) {
    return "passed";
  } else {
    return "failed";
  }
}

console.log(isEven(4));
console.log(isEven(7));
console.log(biggest(10, 3));
console.log(biggest(2, 8));
console.log(passOrFail(85));
console.log(passOrFail(41));
