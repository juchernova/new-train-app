const userEmailInput = document.getElementById('userEmail');
const pass = document.getElementById('userPassword');
const passConfirm = document.getElementById('userPasswordConfirm');
const DisplayPass = document.getElementById('showHidden');
const DisplayPassConfirm = document.getElementById('showHiddenConfirm');
const getUserData = document.getElementById('getUserData');
const formContent = document.getElementById('formContent');
const capitalSnakeCase = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;

const setListener = (element, type, handler) => {
  if (element) {
    element.addEventListener(type, handler);
  }
};

$(document).ready(function () {
  $('.phone-number').mask('+7(000) 000-00-00');
});

function checkPassword() {
  pass.value !== passConfirm.value
    ? ((pass, passConfirm).style.color = 'red')
    : ((pass, passConfirm).style.color = 'black');
};

function showPassword() {
  if (pass.getAttribute('type') === 'password') {
    DisplayPass.classList.add('view');
    pass.setAttribute('type', 'text');
  } else {
    DisplayPass.classList.remove('view');
    pass.setAttribute('type', 'password');
  }
  return false;
};

function showPasswordConfirm() {
  if (passConfirm.getAttribute('type') === 'password') {
    DisplayPassConfirm.classList.add('view');
    passConfirm.setAttribute('type', 'text');
  } else {
    DisplayPassConfirm.classList.remove('view');
    passConfirm.setAttribute('type', 'password');
  }
  return false;
};

function checkEmail() {
  !capitalSnakeCase.test(userEmailInput.value)
    ? (userEmailInput.style.borderBottomColor = 'red')
    : (userEmailInput.style.borderBottomColor = '#007d7c');
};

setListener(passConfirm, 'keyup', checkPassword);
setListener(DisplayPass, 'click', showPassword);
setListener(DisplayPassConfirm, 'click', showPasswordConfirm);
setListener(userEmailInput, 'keyup', checkEmail);

function resultOutput() {
  formContent.style.display = 'none';
  document.getElementById('helloUser').innerHTML = 'Добро пожаловать!';
  document.getElementById('yourName').innerHTML = document.getElementById('userName').value;
  document.getElementById('yourEmail').innerHTML = document.getElementById('userEmail').value;
  document.getElementById('yourPhone').innerHTML = document.getElementById('userPhone').value;
  document.getElementById('yourPass').innerHTML = document.getElementById('userPassword').value;
};

setListener(getUserData, 'click', resultOutput);