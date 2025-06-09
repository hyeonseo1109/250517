const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const tothetop = document.getElementById("tothetop")

const currentDogs = []

window.addEventListener("load", function(){
    request1.open("get", apiRandomDogs)
    request2.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            const dogImgDiv = document.createElement("div")
            dogImgDiv.classList.add("flex-item")
            dogImgDiv.innerHTML = `
            <img src=${item}>
            `
            main.appendChild(dogImgDiv)
        })
    })
    request1.send()

    request2.open("get", apiAllBreeds)
    request2.addEventListener("load", function() {
        const response = JSON.parse(request2.respose)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        });
    })
    request2.send()
})


select.addEventListener("change", function(){
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        return item.indxOf(select.value) !== -1
    })



    filteredDogs.forEach(function(item){
        const dogImgDiv = document.createElement("div")
        dogImgDiv.classList.add("flex-item")
        dogImgDiv.innerHTML = 
        `<img src=${item}>`
        main.appendChild(dogImgDiv)
    })
})

tothetop.addEventListener("click", function(){
    window.scrollTo({top: 0})
})

/* 
CSS
* {scroll-behavior: smooth};

HTML
<div id="tothetop" class="tothetop">TOP</div>

JS
tothetop.addEventListener("click", function(){
    window.scrollTo({top: 0})
})
*/
