// testing
    $(document).ready(function(){
        $('.phone-number').mask('+7(000) 000-00-00');
        });
    

    let inputEmail = document.getElementById('inputEmail');
    let pass = document.getElementById('inputPassword');
    let passConfirm = document.getElementById('inputPasswordConfirm');
    let showHidden = document.getElementById('showHidden');
    let showHiddenConfirm = document.getElementById('showHiddenConfirm');
    let inputNameValue, inputEmailValue, inputPhoneValue, inputPasswordValue;
    let result = document.getElementById('result');
    let formContent = document.getElementById('formContent');
    
    let setListener = (element, type, hendler) => {
        if (!element){
        return;
    }
    element.addEventListener(type, hendler);
    return () => {
        element.removeEventListener(type, hendler);

    }
}
 
    function check() {
        if (pass.value !== passConfirm.value) {
            (pass, passConfirm).style.color = "red"
        } else {
            (pass, passConfirm).style.color = "black"
        }
    };
    
    function showPassword(){
           
        if (pass.getAttribute('type') == 'password') {
            showHidden.classList.add('view');
            pass.setAttribute('type', 'text');
        } else {
            showHidden.classList.remove('view');
            pass.setAttribute('type', 'password');
        }
        return false;
    };
    
    function showPasswordConfirm(){
           
        if (passConfirm.getAttribute('type') == 'password') {
            showHiddenConfirm.classList.add('view');
            passConfirm.setAttribute('type', 'text');
        } else {
            showHiddenConfirm.classList.remove('view');
            passConfirm.setAttribute('type', 'password');
        }
        return false;
    };

    setListener(passConfirm,"keyup", check);
   setListener(showHidden,"click", showPassword);
   setListener(showHiddenConfirm,"click", showPasswordConfirm);
   
    let emailValid = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;
    
    setListener(inputEmail,'keyup', () => {
        if (emailValid.test(inputEmail.value)) {
            inputEmail.style.borderBottomColor = '#007d7c';
            
        } else {
            inputEmail.style.borderBottomColor = 'red';
        }
    }
    ); 

   
    
    function resultGo() {
    
    inputNameValue = document.getElementById('inputName').value;
    inputEmailValue = document.getElementById('inputEmail').value;
    inputPhoneValue = document.getElementById('inputPhone').value;
    inputPasswordValue = inputPassword.value;
    formContent.style.display = 'none';
        document.getElementById('helloUser').innerHTML = 'Добро пожаловать!';
        document.getElementById('youName').innerHTML = inputNameValue;
        document.getElementById('youEmail').innerHTML = inputEmailValue;
        document.getElementById('youPhone').innerHTML = inputPhoneValue;
        document.getElementById('youPass').innerHTML = inputPasswordValue;
    }
    
    result.addEventListener( "click", resultGo);

   
    

     
       
    
    
    