//Create error message
const errorMsg = document.createElement('p');
errorMsg.textContent = "* Passwords do not match";
errorMsg.classList.add("error-msg");

//Set variables for password inputs
const pwd = document.querySelector('#pwd-input');
pwd.appendChild(errorMsg);
const pwdBox1 = document.querySelector('#pwd');
const pwdBox2 = document.querySelector('#confirm-pwd');
let pwdinput1 = "";
let pwdinput2 = "";

function checkPwd() {
    pwdinput1 = document.querySelector('#pwd').value;
    pwdinput2 = document.querySelector('#confirm-pwd').value;
    
    if (pwdinput2 != "") {
        if (pwdinput1 === pwdinput2) {
            pwd.removeChild(errorMsg);
            pwdBox1.classList.remove("error");
            pwdBox2.classList.remove("error");
        } else {
            pwdBox1.classList.add("error");
            pwdBox2.classList.add("error");
            pwd.appendChild(errorMsg);
        }
    }
}

