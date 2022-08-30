const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greeting");
const logined = document.querySelector("#logined-form");
const logoutBtn = document.querySelector("#logined-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;    
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);    
}

function paintGreetings(userName){
    //greetings.innerText = "hello " + userName;
    greetings.innerText = `hello ${userName}`;
    logined.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);

}else{
    paintGreetings(savedUsername);    
}

function logOut(){
    localStorage.removeItem(USERNAME_KEY);
}
logoutBtn.addEventListener("click", logOut);