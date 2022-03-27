// 형 변환(Type conversion)

const a = 1
const b = '1'

console.log(a === b); // false, 권장
console.log(a == b); // 동등연산자 : true, 되도록 안쓰는 것이 좋음 

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false') { // true
  console.log(123); 
}
if (0) { // false
  console.log(456)
}