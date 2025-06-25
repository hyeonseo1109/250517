//? 콘솔창에 fetch('https://pokeapi.co/api/v2/pokemon/25').then(r => r.json()).then(console.log)
//? https://pokeapi.co/api/v2/pokemon-species/id 하면 종 정보. 한글이름이나 설명, 진화 정보 등등 확인 가능함.
//? 쳐서 내용 확인할 수 있음


const image = document.getElementById("image")
const re = document.getElementById("re")
const evo = document.getElementById("evo")
const names = document.getElementById("name")
const information = document.getElementById("information")
const types = document.getElementById("types")
const moves = document.getElementById("moves")
const stats = document.getElementById("stats")

const statName = {
    hp: "체력",
    attack: "공격력",
    defense: "방어력",
    "special-attack": "특수공격력",
    "special-defense": "특수방어력",
    speed: "스피드"
}

let evoNames = [];  // 진화 이름 전체 저장용 배열
let evoIndex = 0;   // 현재 보여주는 진화 인덱스

//! 진화체인 전체 진화 이름들 배열로 뽑는 재귀함수
function getAllEvos(chain) {
    let evos = [chain.species.name];
    if (chain.evolves_to.length > 0) {
        chain.evolves_to.forEach(evo => {
            evos = evos.concat(getAllEvos(evo));
        });
    }
    return evos;
}

//! -1) 들어가면 랜덤하게 숫자를 선택 (1~1000)
function random () { 
    const random = Math.ceil(Math.random()*1000);
    console.log(random);



    //!   포켓몬 울음소리
    function playCry (cry) {
        const audio = new Audio(cry);
        audio.volume = 0.2;
        audio.play();
    }

    //! -2) 포켓몬 api를 요청해서 포켓몬 이미지를 보여주고 렌더링
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(data => data.json())
        .then(data => {
            //이미지
            image.innerHTML = `<img src="${data.sprites.front_default}">`

            //유형
            types.innerHTML = `${data.types.map(t=>t.type.name).join(`, `)}`

            //기술
            moves.innerHTML = data.moves[0].move.name

            //능력치
            stats.innerHTML = data.stats.map(stat => `${statName[stat.stat.name]}: ${stat.base_stat}`).join(`<br>`);

            //이미지 클릭시 울음소리
            const cry = data.cries?.latest; //울음소리 있으면 가져오고 없으면 X
            if (cry) {
                image.onclick = function() {
                    playCry(cry);
                };
            }
            return fetch(`https://pokeapi.co/api/v2/pokemon-species/${random}`)
        })
        .then(data => data.json())
        .then(data => {
            //한국어이름 찾기
            const koreanName = data.names.find(data => data.language.name === 'ko').name;
            names.innerHTML = `${koreanName}`

            //한국어설명 찾기
            const koreaInfo = data.flavor_text_entries.find(data => data.language.name === 'ko')?.flavor_text || '알 수 없다.';
            information.innerHTML = koreaInfo

            return fetch(data.evolution_chain.url)
        })
        .then(data => data.json())
        .then(evoData => {
            evoNames = getAllEvos(evoData.chain);
            evoIndex = 0;
            

            if (evoNames.length > 1) {
                evo.style.display = "block"; // 버튼 보이게
            } else {
                evo.style.display = "none"; // 진화 없으면 버튼 숨김
            }
        })
        .catch(err => {
            console.log("오류 발생", err);
            image.innerHTML = `<p>어라.. <br>포켓몬 친구가 지금은 <br>혼자 있고 싶대요.</p>`;
        });
        
}

//! 진화 버튼 클릭 시 실행되는 함수
evo.onclick = () => {
    // 다음 진화가 있으면 evoIndex 증가시키고 해당 포켓몬 정보 로드
    if (evoIndex < evoNames.length - 1) {
        evoIndex++;
        const lowerName = evoNames[evoIndex].toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${lowerName}`)
            .then(res => res.json())
            .then(nextData => {
                image.innerHTML = `<img src="${nextData.sprites.front_default}">`;
                types.innerHTML = nextData.types.map(t => t.type.name).join(`, `);
                moves.innerHTML = nextData.moves[0].move.name;
                stats.innerHTML = nextData.stats.map(stat => `${statName[stat.stat.name]}: ${stat.base_stat}`).join(`<br>`);

                return fetch(`https://pokeapi.co/api/v2/pokemon-species/${lowerName}`);
            })
            .then(res => res.json())
            .then(speciesData => {
                const koreanName = speciesData.names.find(d => d.language.name === 'ko')?.name || lowerName;
                names.innerHTML = koreanName;

                const koreaInfo = speciesData.flavor_text_entries.find(d => d.language.name === 'ko')?.flavor_text || '알 수 없다.';
                information.innerHTML = koreaInfo;
                // 진화가 마지막이면 버튼 숨김
                if (evoIndex === evoNames.length - 1) {
                    evo.style.display = "none";
                }
            })
    }
}



random();
re.addEventListener("click", random);
