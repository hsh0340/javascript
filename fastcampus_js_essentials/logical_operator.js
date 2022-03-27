// 논리 연산자(logical operator)

const a = 1 === 1 
const b = 'AB' === 'AB'
const c = true

console.log(a); // true
console.log(b); // true
console.log(c); // true

console.log('&&: ', a && b && c); // 그리고, and : 모두 true이면 true 리턴
console.log('||: ', a || b || c); // 또는, or : 하나라도 true이면 true 리턴
console.log('!: ', !a); // 부정, true -> false