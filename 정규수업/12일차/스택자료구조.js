/**
 * JavaScript 7일차 과제
 * 스택 자료구조 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 큐의 4가지 기능을 각각의 함수로 만들어 큐를 구현해주세요.
    - 기능 1. `enqueue` : 뒤(rear)에서 데이터 추가
    - 기능 2. `dequeue`: 앞(front)에서 데이터 제거
    - 기능 3. `peek`: 가장 앞의 값 확인
    - 기능 4. `isEmpty`: 큐가 비어있는지 확인


 
    스택의 4가지 기능을 각각의 함수로 구현해보세요.
    목표: 배열을 활용하여 스택(Stack) 구현하기
    주제: 배열을 활용한 자료구조(Stack) 구현
    요구사항:
    - 스택(Stack)의 4가지 기능을 각각의 함수로 만들어 스택(Stack)를 구현해주세요.
        - 기능 1. `push`: 데이터 추가
        - 기능 2. `pop`: 마지막 데이터 제거
        - 기능 3. `peek`: 가장 마지막 데이터 확인
        - 기능 4. `isEmpty`: 스택이 비어있는지 확인
        */

// 스택 만들기
const box = [ 2, 3, 4];

// 스택에 데이터 추가
function push (newValue) {
   box.push(newValue);
}

// 스택에서 데이터 삭제
function pop () {
   box.pop();
}

// 스택의 가장 마지막 데이터 확인
function peek () {
   box[box.length - 1];
   console.log(`마지막 값은 "${box[box.length - 1]}"`);
   return box[box.length - 1];
}

// 스택이 비어있는지 확인
function isEmpty () {
   if ( box.length === 0) {
      console.log(`비어있습니다`);
      return true;
   } else {
      console.log(`비어있지 않습니다`);
      return false;
   }
}

console.log('^-^');
console.log(box);
push('안녕하세요');
push('메롱');
console.log(box);

pop();
console.log(box);

peek();
isEmpty();