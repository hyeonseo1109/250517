let player1number=24; 
let player2number=25; 

console.log("🎮 숫자 대결 게임! 🎮");

//완성된 모습을 확인하고 console.log안에 문자열로 이루어진 "플레이어1 : " 와 플레이어 1의 변수값을 출력합니다.
console.log("플레이어1 : "+player1number);

//완성된 모습을 확인하고 console.log안에 문자열로 이루어진 "플레이어2 : " 와 플레이어 2의 변수값을 출력합니다.
console.log("플레이어2 : "+player2number);


if (player1number>player2number) {   //<--괄호의 문장을 코드로 수정하세요.
  console.log("🏆 플레이어 1이 승리했습니다! 🎉");
} else if (player1number<player2number) {   //<--괄호의 문장을 코드로 수정하세요.
  console.log("🏆 플레이어 2가 승리했습니다! 🎉");
} else {
  console.log("🤝 무승부! 두 플레이어가 같은 점수입니다.");
}