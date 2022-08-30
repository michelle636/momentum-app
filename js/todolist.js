const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //input의 현재 value를 newTodo 변수에 복사하는 것 이다.
    toDoInput.value = "";
    //그래서 value값을 이렇게 공백으로 처리해도 newTodo에 저장되었기때문에 사라진 것이 아니다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item){
    //console.log("this is turn of", item);}

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //parsedToDos.forEach(sayHello);
    //방법1. sayHello function을 만들고 argument로 가져오기.
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    //방법2. sayHello function을 쓰지 않고 이렇게 간략하게 축소해서 쓸 수도 있다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function niceFilter(){

}