// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
  if (true) {
    const a = 123
    console.log(a); // let, const는 블록 레벨의 유효범위를 가짐
    var b = 456 // var는 함수 레벨의 유효범위를 가짐
  }
  // console.log(a); // a is not defined
  console.log(b);
}
scope()