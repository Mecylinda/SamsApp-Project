const myForm = document.querySelector('.my-form-login');
const modal = document.querySelector('.modal');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorEmail = document.querySelector('#erroremail');
const errorPassword = document.querySelector('#errorpassword');
const errorRegMail= document.querySelector('#regmail');
const errorRegWord = document.querySelector('#regword');
const errorFname = document.querySelector('#errorfname');
const errorLname = document.querySelector('#errorlname');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const regEmail = document.querySelector('#regemail');
const regPassword = document.querySelector('#regpassword');
const btn = document.querySelector('#form-btn');
const btnLogin = document.querySelector('#btn-login');
const btnReg = document.querySelector('#btn-register');
const register = document.querySelector('.register');
const login = document.querySelector('.login');
const popUp = document.querySelector('.btn-popup');
const closeBtn = document.querySelector('.close');

closeBtn.onclick = function(){
  modal.style.display = 'none';
};
window.onclick = function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
btnReg.onclick = function () {
  register.style.display = 'block';
btnReg.style.color = 'skyblue';
btnLogin.style.color = 'black';


};


btnLogin.onclick = function () {
  register.style.display = 'none';
  btnLogin.style.color = 'skyblue';
  btnReg.style.color = 'black';
};
popUp.onclick = function () {
  modal.style.display = 'block';
}
function doOnBlur(event) {

  if(event.value ===""){
if(event.id === 'email'){
      errorEmail.style.display = 'block';
    emailInput.style.border = '1px solid red';
}
if(event.id === 'password'){
        errorPassword.style.display = 'block';
    passwordInput.style.border = '1px solid red';
}
if (event.id ==="fname"){
    errorFname.style.display = 'block';
    fnameInput.style.border = '1px solid red';
  }
   if (event.id ==="lname"){
      errorLname.style.display = 'block';
      lnameInput.style.border = '1px solid red';
    }
  }};


  function doOnFocus(){
       if (emailInput.value !==""){
      errorEmail.style.display = 'none';
      emailInput.style.border = '1px solid green';
    }
    if (passwordInput.value !==""){
          errorPassword.style.display = 'none';
          passwordInput.style.border = '1px solid green';
      }
      if (fnameInput.value !==""){
              errorFname.style.display = 'none';
              fnameInput.style.border = '1px solid green';
     }
       if (lnameInput.value !==""){
    errorLname.style.display = 'none';
    lnameInput.style.border = '1px solid green';
        };
          if (regEmail.value !==""){
    errorRegMail.style.display = 'none';
    regEmail.style.border = '1px solid green';
      };
        if (regPassword.value !==""){
    errorRegWord.style.display = 'none';
    regPassword.style.border = '1px solid green';
        }};

