/* 얕은 복사

let 원조 = {
    personality: ["시크함", "말이 없음"]
};


let 얕은복사 = 원조;    //얕은복사
얕은복사.personality[0] = "밝음";   //복사본의 속성을 바꿔봤을 때

console.log(원조.personality); 
['밝음', '말이 없음'] ← 원조까지 성격이 바뀜


*/
let 원조 = {
    personality: ["시크함", "말이 없음"]
};

let 깊은복사 = JSON.parse(JSON.stringify(원조));    //JSON.stringify : 객체를 문자열로 바꿔줌
깊은복사.personality[0] = "장난끼많음";                            //JSON.parse : 문자열을 객체로 바꿔줌

console.log(원조.personality); // ['시크함', '말이 없음']          //복사본을 바꿨는데도 원조는 그대로임
console.log(깊은복사.personality);     // ['장난끼많음', '말이 없음']


