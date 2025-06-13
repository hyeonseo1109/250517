/**
 * JavaScript 10일차
 * (도전) 반응속도 측정기
 * 
 * 요구사항
 * - `클릭해서 시작하세요` 버튼을 누르면 게임이 시작됩니다.
 * - 랜덤(1초~5초) 시간 후 화면이 변하고, 클릭을 기다립니다.
 * - 상태가 변경되어 지금 클릭!이 뜬 후 클릭하면 반응속도(ms) 를 측정하여 출력합니다.
 * - 측정된 반응속도는 바로 화면에 표시합니다.
 * - 다시 클릭하면 다시 시작할 수 있습니다.
 */

import './style.css';

// 1. screen id로 요소 선택하여 변수에 저장하기
const screen = document.getElementById('screen');

// 2. 사용할 변수 선언하기
let startTime; // 준비가된 시간 저장용 변수
let endTime; // 사용자가 클릭한 시간 저장용 변수
let timeoutId; // setTimeout의 반환값인 아이디를 저장할 변수
let isReady = false; // 현재 "신호 떴는지"를 구분하는 변수. 준비됐니?지금은 아니요
let isLocked = false; //신호 떴을 때 더블클릭 하면 결과 보지도 못하고 새로 시작되길래 찾아봐서 넣었어요..

// 3. 시작 클릭 시 실행할 이벤트 등록하기
screen.addEventListener('click', () => {
  if (isLocked) return;
  if (!isReady) {  //준비 안됐니? 참일경우 실행
    // 준비가 되지 않은 상태에서 클릭 이벤트 발생 시 로직 구성

    // 1. screen 요소 classList에서 "waiting" 클래스 제거하기
    screen.classList.remove('waiting', 'click');
    // 2. screen 요소 classList에서 "ready" 클래스 추가하기
    screen.classList.add('ready');
    // screen 텍스트 변경하기
    screen.textContent = '파란색이 되면 클릭하세요!';

    // 3. 준비까지 걸리는 시간 랜덤으로 만들기(1~5초)
    const randomDelay = (Math.random()*4 +1)*1000;

    // 랜덤 시간 때, 준비가 된 상태로 구성하기
    timeoutId = setTimeout(() => {
      // 4. screen 요소 classList에서 "ready" 클래스 제거하기
        screen.classList.remove('ready');
      // 5. screen 요소 classList에서 "waiting" 클래스 추가하기
        screen.classList.add('click');
      // screen 텍스트 변경하기
      screen.textContent = '지금 클릭!';

      // 6.startTime에 준비시점 저장하기
      startTime = Date.now();
      // 7. isReady true로 변경하여 준비된 상태로 변경하기
      isReady = true;
    }, randomDelay);
  } else {
    // 준비가 된 상태에서 클릭 이벤트 발생 시 로직 구성
    // 1. endTime에 사용자 클릭 시점 저장하기
    endTime = Date.now();
    // 2. endTime에서 startTime을 뺀 사용자 반응 속도를 reactionTime 변수에 저장
    const reactionTime = endTime - startTime;
    // 3. screen에 반응속도(reactTime) 출력하기
    screen.textContent = `반응속도: ${reactionTime}ms\n다시 시작하려면 클릭하세요`;
    // 4. timeoutId로 등록된 setTimeout 제거하기
    clearTimeout(timeoutId);
    isLocked = true;
      
    // 5. isReady false로 변경하여 준비되지 않았은 상태로 변경하기
    setTimeout(() => {
      isReady = false;
      isLocked = false;
    }, 1000);
  }
});
