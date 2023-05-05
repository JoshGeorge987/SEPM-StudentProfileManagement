const inputs = document.querySelectorAll(".input");

function addClass() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function removeClass() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addClass);
  input.addEventListener("blur", removeClass);
});

let email = document.getElementById("email"), 
    password = document.getElementById("password"),
    errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(email, 0, "Email cannot be blank");
  engine(password, 1, "Password cannot be blank");
});

let engine = (id, serial, message) => {

  if (id.value.trim() === "") {
    //errorMsg[serial].innerHTML = message;
    //id.style.border = "2px solid red";
    //document.getElementsByClassName("input-div one").style.background = "blue";
    //document.getElementsByClassName("input-div pass").style.background = "blue";
  } 
  
  else {
    //errorMsg[serial].innerHTML = "";
    //id.style.border = "2px solid green";
    //document.getElementsByClassName("input-div one").style.background = "green";
    //document.getElementsByClassName("input-div pass").style.background = "green";
  }
}

document.getElementById("btn").onclick = function () {
  location.href = "home.html";
};