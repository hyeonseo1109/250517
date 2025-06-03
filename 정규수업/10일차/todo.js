//요소 선택 및 배열 선언
const todoList = document.getElementById(`todo-list`)
const todoForm = document.getElementById(`todo-form`)
let todoArr = [];


//로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}

//로컬 저장소에서 가져오기
function loadTodos() {
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null) {
        todoArr = JSON.parse(myTodos)
        displayTodos()
    }
}
loadTodos()

//할일 삭제하기
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    saveTodos()
    displayTodos()
}


//할일 수정하기
function handleTodoItemClick(clickedId) {
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){     //내가 클릭한 투두에 해당하는 아이디가 맵에서 나오면, 기존의 투두 내용에다가 투두 던을 반전시켜서 적용한다. 
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            }
        } else{
            return aTodo
        }
    })
    saveTodos()
    displayTodos()
}


//할일 보여주기
function displayTodos() {
    todoList.innerHTML = ""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement(`li`)
        const todoDelBtn = document.createElement(`span`)
        todoDelBtn.textContent = `x`
        todoItem.textContent = aTodo.todoText
        todoItem.title = "클릭하면 완료됨"
        if(aTodo.todoDone) {
            todoItem.classList.add("done")
        } else {
            todoItem.classList.add("yet")
        }
        todoDelBtn.title = "클릭하면 삭제됨"

        todoItem.addEventListener("click", function(){
            handleTodoItemClick(aTodo.todoId)
        })

        todoDelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })
        
        todoItem.textContent = aTodo.todoText
        todoItem.appendChild(todoDelBtn)
        todoList.appendChild(todoItem)
    })
}

//할일 추가하기
todoForm.addEventListener("submit", function(e){ //e = event
    e.preventDefault()
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone: false //할일 추가됐을 때 아직 할일 완료 안한 상태
    }
    todoForm.todo.value = ""
    todoArr.push(toBeAdded)
    displayTodos()
})