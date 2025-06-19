//위로 가기 버튼
const tothetop = document.getElementById("위로가기");
tothetop.addEventListener("click", () => {  
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//처음엔 없다가 스크롤 좀 내리면 작은 배너 생기게
window.addEventListener("scroll", () => {
    const smallBanner = document.querySelector(".작은배너");
    if ( window.scrollY > 150) { 
        smallBanner.style.display = "flex"; 
    } else {
        smallBanner.style.display = "none";
    }
});

//처음엔 없다가 스크롤 좀 내리면 예매하기 생기게
window.addEventListener("scroll", () => {
    const 예약 = document.getElementById("예매하기");
    if ( window.scrollY > 150) { 
        예약.style.display = "flex"; 
    } else {
        예약.style.display = "none";
    }
});

//처음엔 없다가 스크롤 좀 내리면 위로가기 생기게
window.addEventListener("scroll", () => {
    const 예약 = document.getElementById("위로가기");
    if ( window.scrollY > 150) { 
        예약.style.display = "flex"; 
    } else {
        예약.style.display = "none";
    }
});




const 배너아랫부분 = document.getElementById("배너아랫부분");
const 상세메뉴 = document.getElementById("상세메뉴");
//배너아랫부분에 마우스를 올리면 상세메뉴가 나타남. 사라지는 건 배너아랫부분or상세메뉴를 벗어났을 때.
function checkHover() {
    if (배너아랫부분.matches(':hover') || 상세메뉴.matches(':hover')) { //matches: :hover랑 일치하는가
        상세메뉴.style.display = "flex";
    } else {
        상세메뉴.style.display = "none";
    };
}
배너아랫부분.addEventListener('mouseover', checkHover);
배너아랫부분.addEventListener('mouseout', checkHover);
상세메뉴.addEventListener('mouseover', checkHover);
상세메뉴.addEventListener('mouseout', checkHover);

//_--_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


const 지점리스트 = document.getElementById("자주가는CGV지점");
const 더하기 = document.querySelector(".지점더하기버튼");
const 자주가는지점칸 = document.querySelectorAll(".자주가는지점칸");
const 자주가는지점칸리스트 = document.querySelectorAll("#자주가는CGV지점 li");
const 초기화 = document.querySelector(".지점초기화버튼");
let 선택지점 = '';


const 지점들 = [
    "CGV경기광주", "CGV고양백석", "CGV고양행신", "CGV광교", "CGV광교상현", "CGV광명역", "CGV구리", "CGV구리갈매", "CGV기흥", "CGV김포", "CGV김포운양", "CGV남양주 화도", "CGV다산", "CGV동두천", "CGV동백", "CGV동수원", "CGV동탄", "CGV동탄그랑파사쥬", "CGV동탄호수공원"
];

지점들.forEach(지점 => {
    const li = document.createElement("li");
    li.textContent = `${지점}       |`;
    li.addEventListener("click", () => {
        document.querySelectorAll("#자주가는CGV지점 li").forEach(li => { //대상: 모른 리스트를 순회하며
        li.classList.remove("선택지점");
        });//얘 없으면 클릭할때마다 선택지점이 계속 누적된다. 기존에 있던 선택지점의 효과를 없애주는것
        li.classList.add("선택지점");
        선택지점 = 지점; //선택지점에 넣어줌
    });
    지점리스트.appendChild(li); //리스트에 추가해서 가지고 있음
});

//더하기 누르면 추가되게끔
더하기.addEventListener("click", () => {
    for ( let box of 자주가는지점칸) {
        if (box.textContent === "") { //비어있는 칸 찾기
            box.classList.add("칸안에");
            box.textContent = 선택지점;
            break;
        }
    }
});

//자주 가는 지점 초기화
const 선택지점리스트 = document.querySelectorAll("#자주가는CGV지점 li.선택지점");
초기화.addEventListener("click", () => {
    자주가는지점칸.forEach(box => {
        box.textContent = "";
        box.classList.remove("칸안에");
    });
    const 선택지점리스트 = document.querySelectorAll("#자주가는CGV지점 li.선택지점"); //const로 다시 불러오는 이유
        /* query는 정적인 값(NodeList)이라서  처음 호출한 이후에 내용이 변경돼도 기존에 호출된 변수는 그걸 모름.
        그래서 초기화버튼 누를 때마다 새로 찾아오게 해야 함.
        자동 갱신 되게 하려면 getElement 써도 되지만 얘는 유사배열객체라 forEach를 못 써서 Array.from()으로 배열화 해야됨
        */
    선택지점리스트.forEach(item => {
        item.classList.remove("선택지점");
    });
    선택지점 = "";
});


const 영화 = [
    {
        "title": "신명",
        "genre": "드라마",
        "rating": "15",
        "duration": 118,
        "release_date": "2025-06-02",
        "showtimes": [
        { "time": "12:10", "screen": "2관 6층", "seats": 90 },
        { "time": "16:00", "screen": "6관 10층", "seats": 83 },
        { "time": "21:10", "screen": "1관 6층", "seats": 129 }
        ]
    },
    {
        "title": "미션 임파서블: 파이널 레코닝",
        "genre": "액션",
        "rating": "15",
        "duration": 169,
        "release_date": "2025-05-17",
        "showtimes": [
        { "time": "11:00", "screen": "1관 6층", "seats": 112 },
        { "time": "14:20", "screen": "1관 6층", "seats": 56 },
        { "time": "17:45", "screen": "1관 6층", "seats": 124 },
        { "time": "18:30", "screen": "6관 10층", "seats": 98 },
        { "time": "21:50", "screen": "6관 10층", "seats": 123 },
        { "time": "23:40", "screen": "1관 6층", "seats": 144 }
        ]
    },
    {
        "title": "인생은 아름다워",
        "genre": "드라마, 전쟁, 코미디",
        "rating": "All",
        "duration": 116,
        "release_date": "2025-06-11",
        "showtimes": [
        { "time": "14:45", "screen": "2관 6층", "seats": 72 },
        { "time": "19:40", "screen": "2관 6층", "seats": 95 }
        ]
    },
    {
        "title": "드래곤 길들이기",
        "genre": "액션, 어드벤처, 환타지",
        "rating": "All",
        "duration": 125,
        "release_date": "2025-06-06",
        "showtimes": [
        { "time": "10:30", "screen": "4관 SCREENX 8층", "seats": 109 },
        { "time": "11:55", "screen": "3관 8층", "seats": 136 },
        { "time": "13:05", "screen": "4관 SCREENX 8층", "seats": 92 },
        { "time": "14:30", "screen": "3관 8층", "seats": 58 },
        { "time": "15:40", "screen": "4관 SCREENX 8층", "seats": 56 },
        { "time": "17:10", "screen": "3관 8층", "seats": 76 },
        { "time": "18:15", "screen": "4관 SCREENX 8층", "seats": 96 },
        { "time": "19:50", "screen": "3관 8층", "seats": 104 },
        { "time": "20:50", "screen": "4관 SCREENX 8층", "seats": 123 },
        { "time": "22:30", "screen": "3관 8층", "seats": 172 },
        { "time": "23:30", "screen": "4관 SCREENX 8층", "seats": 119 }
        ]
    },
    {
        "title": "태양의 노래",
        "genre": "로맨스, 멜로",
        "rating": "12",
        "duration": 108,
        "release_date": "2025-06-11",
        "showtimes": [
        { "time": "09:50", "screen": "2관 6층", "seats": 0, "status": "마감" },
        { "time": "22:10", "screen": "2관 6층", "seats": 123 }
        ]
    },
    {
        "title": "하이파이브",
        "genre": "코미디, 액션",
        "rating": "15",
        "duration": 119,
        "release_date": "2025-05-30",
        "showtimes": [
        { "time": "11:30", "screen": "5관 10층", "seats": 158 },
        { "time": "14:00", "screen": "5관 10층", "seats": 93 },
        { "time": "16:30", "screen": "5관 10층", "seats": 117 },
        { "time": "19:00", "screen": "5관 10층", "seats": 138 },
        { "time": "21:30", "screen": "5관 10층", "seats": 166 },
        { "time": "24:00", "screen": "5관 10층", "seats": 172 }
        ]
    },
    {
        "title": "브링 허 백",
        "genre": "호러",
        "rating": "18",
        "duration": 104,
        "release_date": "2025-06-06",
        "showtimes": [
        { "time": "13:40", "screen": "6관 10층", "seats": 94 },
        { "time": "17:20", "screen": "2관 6층", "seats": 81 }
        ]
    },
    {
        "title": "인피니트 15주년 콘서트 리미티드 에디션 더 무비",
        "genre": "콘서트 무비",
        "rating": "All",
        "duration": 115,
        "release_date": "2025-06-11",
        "showtimes": [
        { "time": "11:15", "screen": "6관 10층", "seats": 114 }
        ]
    }
];

const 영화목록 = document.querySelector(".영화정보");
//위에 여러 영화 목록 중 영화 하나씩 돌기
영화.forEach(movie => {

    const 상영관 = {}; //같은 상영관에 여러 시간대인 경우가 있으니
    movie.showtimes.forEach( show => { //영화 하나의 showtime을 각각 보며
        if (!상영관[show.screen]) {   //상영관 위치(screen)가 아직 없으면=true면
            상영관[show.screen] = [];  //빈 배열을 만들어줌
        }
        상영관[show.screen].push(show); //거기다가 추가 
    });
        let showtimeHtml = '';
        for (let screen in 상영관) {  //상영관별로 정보 추가해줌
            showtimeHtml +=`
            <div class="상영관별">
                <p>► 2D | ${screen} | 총 200석 </p>
                <div class="시간선택감싸기">
                ${상영관[screen].map ( time => 
                    `<div class="시간선택">
                        <p class="상영시간">${time.time}</p>
                        <p class="남은좌석">${time.seats}석</p>
                    </div>
            `).join('')}    
            </div>
        </div>
        `;
    }   //join은 배열이 문자열로 나오게 공백 넣고 합쳐줌
    //영화목록에 내용 추가
    영화목록.innerHTML += `<hr>
        <div class="영화하나">
            <div class="한줄">
                <div class="연령제한">${movie.rating}</div>
                    <h3 class="영화제목">${movie.title}</h3>
                    <p class="상영중">상영중</p>
                    <p class="영화설명">${movie.genre}/${movie.duration}/${movie.release_date} 개봉</p>
                </div>
                ${showtimeHtml}
            </div>
            `;
});

//연령고지 별 css 적용
const 연령제한 = document.querySelectorAll(".연령제한");
연령제한.forEach(연령 => { 
    switch(연령.textContent) {
        case "All" :
            연령.classList.add("초록연령");
            break;
        case "18" : 
            연령.classList.add("빨강연령");
            break;
        case "15" : 
            연령.classList.add("주황연령");
            break;
        case "12" : 
            연령.classList.add("노랑연령");
            break;
    }
});