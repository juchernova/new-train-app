// testing
let inputEmail = document.getElementById("userEmail");
let pass = document.getElementById("userPassword");
let passConfirm = document.getElementById("userPasswordConfirm");
let DisplayPass = document.getElementById("showHidden");
let DisplayPassConfirm = document.getElementById("showHiddenConfirm");
let inputNameValue, inputEmailValue, inputPhoneValue, inputPasswordValue;
let result = document.getElementById("result");
let formContent = document.getElementById("formContent");
let emailValid = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;

let setListener = (element, type, hendler) => {
  if (!element) {
    return;
  }
  element.addEventListener(type, hendler);
  return () => {
    element.removeEventListener(type, hendler);
  };
};
$(document).ready(function () {
  $(".phone-number").mask("+7(000) 000-00-00");
});

function check() {
  if (pass.value !== passConfirm.value) {
    (pass, passConfirm).style.color = "red";
  } else {
    (pass, passConfirm).style.color = "black";
  }
}

function showPassword() {
  if (pass.getAttribute("type") == "password") {
    DisplayPass.classList.add("view");
    pass.setAttribute("type", "text");
  } else {
    DisplayPass.classList.remove("view");
    pass.setAttribute("type", "password");
  }
  return false;
}

function showPasswordConfirm() {
  if (passConfirm.getAttribute("type") == "password") {
    DisplayPassConfirm.classList.add("view");
    passConfirm.setAttribute("type", "text");
  } else {
    DisplayPassConfirm.classList.remove("view");
    passConfirm.setAttribute("type", "password");
  }
  return false;
}

setListener(passConfirm, "keyup", check);
setListener(DisplayPass, "click", showPassword);
setListener(DisplayPassConfirm, "click", showPasswordConfirm);

setListener(inputEmail, "keyup", () => {
  if (emailValid.test(inputEmail.value)) {
    inputEmail.style.borderBottomColor = "#007d7c";
  } else {
    inputEmail.style.borderBottomColor = "red";
  }
});

function resultOutput() {
  inputNameValue = document.getElementById("userName").value;
  inputEmailValue = document.getElementById("userEmail").value;
  inputPhoneValue = document.getElementById("userPhone").value;
  inputPasswordValue = document.getElementById('userPassword').value;
  formContent.style.display = "none";
  document.getElementById("helloUser").innerHTML = "Добро пожаловать!";
  document.getElementById("youName").innerHTML = inputNameValue;
  document.getElementById("youEmail").innerHTML = inputEmailValue;
  document.getElementById("youPhone").innerHTML = inputPhoneValue;
  document.getElementById("youPass").innerHTML = inputPasswordValue;
}

setListener(result, "click", resultOutput);