document.addEventListener("DOMContentLoaded", function(){

 let username = document.getElementById("name");
 let useremail = document.getElementById("email");
username.textContent= localStorage.getItem("name");
 useremail.textContent= localStorage.getItem("email");
console.log(localStorage.getItem("name"));
 console.log(localStorage.getItem("email"));
let logout = document.getElementById("logout");

function logoutUser(){
     localStorage.removeItem("name");
     localStorage.removeItem("email");
     window.location.href = "login.html";
}

logout.addEventListener("click", logoutUser);
})