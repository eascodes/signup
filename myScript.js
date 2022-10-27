const pwd = document.querySelector('#pwd-input');
const errorMsg = document.createElement('p');
errorMsg.textContent = "* Passwords do not match";
pwd.appendChild(errorMsg);
errorMsg.classList.add("error-msg");

