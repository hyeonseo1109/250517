//이실직고: 너무 어려워서 강의랑 답지 보면서 했습니다,,

const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/42';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';

const main = document.getElementById('main');
const input = document.getElementById('filter-text');
const filterButton = document.getElementById('filter-button');
const select = document.getElementById('filter-select');
const tothetop = document.getElementById('tothetop');
const resetButton = document.getElementById('reset-button');

let currentDogs = [];


const displayDogs = (url) => {
    const div = document.createElement('div');
    div.classList.add('flex-item');
    div.innerHTML = `<img src="${url}">`; //html에 태그를 문자열로 집어넣는거임
    main.appendChild(div);
};
ㄴ

const getDogImages = async () => {
    try {
        const response = await fetch(apiRandomDogs);
        const dogs = await response.json();
        const images = dogs.message;    //이미지 주소들이 있는 배열을 받아옴. 

        currentDogs = images.reduce((dogList, dog) => {
        displayDogs(dog);
        return [...dogList, dog];//reduce로 dogList에 강쥐 한마리 추가, 한마리 추가된 기존 배열을 복사하고 한마리 또 추가, ...
        }, []);

    } catch (error) {
        console.error("이미지 불러오기 실패", error);
    }
};

const getDogKinds = async () => {
    try {
        const response = await fetch(apiAllBreeds);     //서버의 응답이 올 때까지 기다려라
        const dogKindsTexts = await response.json();     //끝나면 json으로 바꿀때까지 기다려라

        Object.keys(dogKindsTexts.message).forEach(function (item) {
            const option = document.createElement('option');
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("견종 리스트 불러오기 실패", error);
    }
};


window.addEventListener("load", () => { //페이지 로드되면 강쥐사진&리스트 데려옴
    getDogImages();  
    getDogKinds();   
});


filterButton.addEventListener("click", () => {
    //const keyword = input.value.trim().toLowerCase();   //공백제거 & 대소문자 상관없게 하려고
    main.innerHTML = '';
    let filteredDogs = currentDogs.filter( (item) => {
        return item.indexOf(input.value) !== -1;  //input.value가 item에 포함돼있는지 확인
    } );
    input.value = ''; //입력값 초기화=사용자입력칸 비우기
    console.log(filteredDogs);
    filteredDogs.forEach((item) => {  //필터링된 강쥐들 다시 화면에 띄움
        displayDogs(item);
    });
});

select.addEventListener("change", () => {
    const selected = select.value;
    main.innerHTML = "";

    const filtered = currentDogs.filter((url) => url.includes(selected));
    filtered.forEach(displayDogs);
});

tothetop.addEventListener("click", () => {  //맨위로
    window.scrollTo({ top: 0, behavior: "smooth" });
});

resetButton.addEventListener("click", () => { //새로고침
    window.location.reload();
});
