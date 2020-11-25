$(document).ready(function(){
    $('.phone-number').mask('+7(000) 000-00-00');
    });

 let emailValid = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
		$('#exampleInputEmail').keyup(function(){
            !emailValid.test($('#exampleInputEmail').val())
            ? $('#exampleInputEmail').css('border-color' , 'rgb(255, 0, 0)')
            : $('#exampleInputEmail').css('border-color', '#007d7c');
		});

let pass = document.getElementById('exampleInputPassword');
let passConfirm = document.getElementById('exampleInputPasswordConfirm');

passConfirm.onkeyup = function check() {
    if (pass.value !== passConfirm.value) {
        (pass, passConfirm).style.color = "red"
    } else {
        (pass, passConfirm).style.color = "black"
    }
};

function showPassword(target){
       
    if (pass.getAttribute('type') == 'password') {
        target.classList.add('view');
        pass.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        pass.setAttribute('type', 'password');
    }
    return false;
};

function showPasswordConfirm(target){
       
    if (passConfirm.getAttribute('type') == 'password') {
        target.classList.add('view');
        passConfirm.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        passConfirm.setAttribute('type', 'password');
    }
    return false;
};