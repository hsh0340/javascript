// 비교 연산자(comparison operator)

const a = 1
const b = 3

console.log(a === b);

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2')); // 데이터 타입 다름, false

console.log(a !== b); // true

console.log(a < b); // true
console.log(a > b); // false
console.log(a <= b); // 작거나 같은지?
console.log(a >= b); // 크거나 같은지?

