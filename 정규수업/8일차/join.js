// 제출 이벤트를 받는다. (이벤트 핸들링)
// 제출된 입력 값들을 참조한다.
// 입력값에 문제가 있는 경우 이를 감지한다
// 가입 환영 인사를 제공한다.

const form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    let userID = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    //console.log(userID, userPw1, userPw2, userName, userPhone, userPosition, userGender, userEmail, userIntro) 로 잘 연결됐는지 확인해봐

    if(userID.length < 6) {
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return   //지금 이 모든 내용들이 다 위에 form.add~("submit", function(event){ }) 안에 있는 내용들임.
                //그래서 여기서 return을 넣어주면 아이디가 너무 짧고 비번이 서로 달라도 일단 경고장은 아이디 하나만 뜸. 
                //그리고 나서 사용자가 아이디를 수정하면 비번 경고장이 뜸. 
    }

    if(userPw1 !== userPw2) {
        alert("비밀번호가 일치하지 않습니다.")
        return
    }

    //가입 잘 되었으니 환영 인사하기. 원래 있던 html의 body 내용을 싹 다 지워줌. 
    document.body.innerHTML = //innerHTML: 이 내용으로 바꿔줄게연. 근데 "" 빈내용이니까 없어짐.
    `<h1 style="color: blue">${userID}님 환영합니다.</h1> <br>
    <p>회원 가입 시 입력하신 내역은 다음과 같습니다.<br>
    <br>
    아이디 : ${userID}<br>
    이름 : ${userName}<br>
    전화번호 : ${userPhone}<br>
    원하는 직무 : ${userPosition}
    
    </p>`

})