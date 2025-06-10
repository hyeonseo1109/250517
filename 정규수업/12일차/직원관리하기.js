/**
 * JavaScript 7일차 과제
 * 직원 관리하기
 * 
 * 요구사항
 * - 직원 명단(staffList)은 객체로 이루어져있으며, 각 프로퍼티는 직원ID: 직원정보로 구성되어 있습니다.
 * - 새로운 직원이 들어오면 직원ID를 이전 번호에 이어서 추가하며, 새로운 객체로 반환하여 staffList에 저장하는 함수를 만들어야 합니다.
 * - spead문법(...)을 활용하여 작성해야합니다.
 */

// 새로 들어오는 직원들이 받을 첫 번째 id. 1004로 시작해서 1씩 늘림
let newStaffId = 1004;

// 직원 명단
let staffList = {
  1000: { name: '최오즈', age: '42', phoneNumber: '010-2244-7462' },
  1001: { name: '이코딩', age: '29', phoneNumber: '010-2290-0292' },
  1002: { name: '이수열', age: '24', phoneNumber: '010-1248-1632' },
  1003: { name: '오콘솔', age: '24', phoneNumber: '010-3122-2203' },
};
// 새로운 직원을 추가하여 새로운 직원 명단을 만드는 함수
function addNewStaff(newStaff) {
  let newStaffList = {};
  // 여기에 코드를 작성해주세요.
  newStaffList = {...staffList, [newStaffId++]: newStaff }  // {  기존리스트, 1004: {name 어쩌구..}  }를 만들기 위함. 나중에 newStaff 추가하면 기존리스트처럼 써짐.
  return newStaffList;
}

// 새로 들어올 10명의 직원 정보
const newStaff = [
  { name: '오로그', age: '24', phoneNumber: '010-3122-2203' },
  { name: '김개발', age: '27', phoneNumber: '010-4721-1830' },
  { name: '이자스', age: '22', phoneNumber: '010-8354-6722' },
  { name: '박코딩', age: '25', phoneNumber: '010-9243-1567' },
  { name: '정디버그', age: '29', phoneNumber: '010-2417-8831' },
  { name: '최함수', age: '23', phoneNumber: '010-3820-4502' },
  { name: '한프론트', age: '26', phoneNumber: '010-9432-9120' },
  { name: '노자바', age: '21', phoneNumber: '010-6482-3305' },
  { name: '유인덱스', age: '28', phoneNumber: '010-5117-7614' },
  { name: '문서열', age: '24', phoneNumber: '010-1032-2841' },
];

// 10명의 직원이 들어올 때, 자동으로 새로운 직원 명단을 만드는 코드
newStaff.forEach( (newStaff) => {     //10명을 다 순환해야 하니까 
  staffList = addNewStaff(newStaff);    //function addNewStaff를 부르면 복사본이 생김.
});
// 여기에 코드를 작성해주세요.

console.log(staffList);
