/* 이벤트 위임 안 했을 떄

document.querySelectorAll("#menu li").forEach((li) => {
    li.addEventListener("click", () => {
        console.log(li.textContent);
    });
});
*/


//이벤트 위임 했을 때
document.getElementById("menu").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {          
        e.stopPropagation();
        console.log(e.target.textContent);    
    }                                            
});
