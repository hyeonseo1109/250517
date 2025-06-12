const Todos = {};

//할일 추가
function addTodo (todoId, todo) {
    Todos[todoId] = { todo: todo, finished: false };
}

//할일 삭제
function deleteTodo (todoId) {
    delete Todos[todoId];
}

//할일 완료
function finishTodo (todoId) {
    Todos[todoId].finished = true;
}

addTodo('1', '잠자기');
addTodo('2', '밥먹기');
addTodo('3', '코딩공부하기');
console.log(Todos);

finishTodo ('3');
console.log(Todos);