/**
 * JavaScript 과제
 * 자리수 총합 구하기
 *
 * 요구사항
 * - 숫자 n의 각 자리수의 합을 구해 출력하세요.
 *
 * 예시: n = 1234 → 1 + 2 + 3 + 4 = 10
 */

let n = 1234;
let sum=0;
let str = String(n);  // "1234"
let len = str.length;   // 4
for( let i=0; i<len; i++) {
 sum += Number(str[i])    // 문자열을 다시 숫자로 바꿔줌
}
console.log(sum)