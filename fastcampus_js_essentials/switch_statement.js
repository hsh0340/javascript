import random from './getRandom'

// 조건문 (Switch statement)

const a = random()

switch (a) {
  case 0:
    console.log('a is 0');
    break // 하나의 케이스가 끝나면 break 작성
  case 2:
    console.log('a is 2');
    break
  case 4:
    console.log('a is 4');
    break
  default:
    console.log('rest ...');
}