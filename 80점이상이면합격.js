let playername="현서"; // 플레이어의 이름을 담을 변수를 만드세요
let playernumber=79; // 플레이어의 점수를 담을 변수를 만드세요

console.log("합격 여부");

// 플레이어 이름과 점수를 출력하세요
console.log(playername+"의 점수:"+playernumber+"점");

// 점수가 80점 이상이면 "합격", 아니면 "불합격"을 출력하세요
if (playernumber>85) {
  console.log("✅ 합격입니다!");
}
  else if (playernumber>=80&&playernumber<85) {
    console.log("휴~ 아슬아슬하게 합격입니다!");
  }
else {
  console.log("❌아쉽지만 불합격입니다.");
}