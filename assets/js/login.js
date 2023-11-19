const form = document.getElementById("form");
const login = document.getElementsByClassName("login");
const register = document.getElementsByClassName("register");
var fullNameRegex = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
var alertFullName = document.getElementsByClassName("alert-full-name");
var alertUsername = document.getElementsByClassName("alert-username");
var usernameRegex = /^[a-zA-Z0-9]+$/;
var alertEmail = document.getElementsByClassName("alert-email");
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var alertPassword = document.getElementsByClassName("alert-password");
var passwordRegex = /^[a-zA-Z0-9!@#$%&*]+$/;
var alertRepeatPassword = document.getElementsByClassName("alert-repeat-password");

// Mo/Tat popup
function LoginPopupOpen() {
    form.style.display = "block";
    login[0].style.display = "block";
    login[1].style.display = "block";
    register[0].style.display = "none";
    register[1].style.display = "none";
}

function RegisterPopupOpen() {
    form.style.display = "block";
    login[0].style.display = "none";
    login[1].style.display = "none";
    register[0].style.display = "block";
    register[1].style.display = "block";
}
window.onclick = function (event) {
    let modal = document.getElementById('form');
    if (event.target == modal) {
        document.getElementById("form").style.display = "none";
    }
}

// An/Hien mat khau
function ShowPassword() {
    document.getElementsByClassName("show-password")[0].style.display = "none";
    document.getElementsByClassName("show-password")[1].style.display = "none";
    document.getElementsByClassName("hide-password")[0].style.display = "block";
    document.getElementsByClassName("hide-password")[1].style.display = "block";
    document.getElementsByClassName("password")[0].type = "text";
    document.getElementsByClassName("password")[1].type = "text";
}
function HidePassword() {
    document.getElementsByClassName("show-password")[0].style.display = "block";
    document.getElementsByClassName("show-password")[1].style.display = "block";
    document.getElementsByClassName("hide-password")[0].style.display = "none";
    document.getElementsByClassName("hide-password")[1].style.display = "none";
    document.getElementsByClassName("password")[0].type = "password";
    document.getElementsByClassName("password")[1].type = "password";
}
function ShowRepeatPassword() {
    document.getElementsByClassName("show-password")[2].style.display = "none";
    document.getElementsByClassName("hide-password")[2].style.display = "block";
    document.getElementsByClassName("repeat-password")[0].type = "text";
}
function HideRepeatPassword() {
    document.getElementsByClassName("show-password")[2].style.display = "block";
    document.getElementsByClassName("hide-password")[2].style.display = "none";
    document.getElementsByClassName("repeat-password")[0].type = "password";
}

// Kiem tra du lieu
function ValidateFormLogin() {
    let check = [2], result = 1;
    let username = document.forms["login-form"]["username"];
    let password = document.forms["login-form"]["password"];
    check[0] = ValidateUsername(username, alertUsername[0]);
    check[1] = ValidatePassword(password, alertPassword[0]);    
    result = check[0] * check[1];
    if (result == 0) {
        console.log("Dang nhap khong thanh cong!");
        return false;   
    } else return true;
}
function ValidateFormRegister() {
    let check = [5], result = 1;
    let fullName = document.forms["register-form"]["full-name"];
    let username = document.forms["register-form"]["username"];
    let email = document.forms["register-form"]["email"];
    let password = document.forms["register-form"]["password"];
    let repeat_password = document.forms["register-form"]["repeat-password"];
    check[0] = ValidateFullName(fullName, alertFullName[0]);
    check[1] = ValidateUsername(username, alertUsername[1]);
    check[2] = ValidateEmail(email, alertEmail[0]);
    check[3] = ValidatePassword(password, alertPassword[1]);
    check[4] = ValidateRepeatPassword(password, repeat_password, alertRepeatPassword[0]);
    for (let i = 0; i < 5; i++) {
        result = result * check[i];
    }
    if (result == 0) {
        console.log("Dang ky khong thanh cong!");
        return false;   
    } else return true;
}

function ValidateFullName(fullName, alertFullName) {
    let check = 1;
    if (fullName.value == "") {
        alertFullName.innerHTML = `*Họ và tên không được bỏ trống`;
        check = check * 0;
    } else {
        alertFullName.innerHTML = "";
    }
    return check;
}
function ValidateUsername(username, alertUsername) {
    let check = 1;
    if (username.value == "") {
        alertUsername.innerHTML = `*Tên đăng nhập không được bỏ trống`;
        check = check * 0;
    } else if (username.value.length < 5 || username.value.length > 12) {
        alertUsername.innerHTML = `*Tên đăng nhập cần có độ dài từ 6-12 kí tự`;
        check = check * 0;
    } else if (username.value.match(usernameRegex) == null) {
        alertUsername.innerHTML = `*Các kí tự được chấp nhận là a-z, A-Z và 0-9`;
        check = check * 0;
    }
    else {
        alertUsername.innerHTML = "";
    }
    return check;
}
function ValidateEmail(email, alertEmail) {
    let check = 1;
    if (email.value == "") {
        alertEmail.innerHTML = `*Email không được bỏ trống`;
        check = check * 0;
    } else if (email.value.match(emailRegex) == null) {
        alertEmail.innerHTML = "*Email sai định dạng";
        check = check * 0;
    }
    else {
        alertEmail.innerHTML = "";
    }
    return check;
}
function ValidatePassword(password, alertPassword) {
    let check = 1;
    if (password.value == "") {
        alertPassword.innerHTML = `*Mật khẩu không được bỏ trống`;
        check = check * 0;
    } else if (password.value.length < 5 || password.value.length > 12) {
        alertPassword.innerHTML = `*Mật khẩu cần có độ dài từ 6-12 kí tự`;
        check = check * 0;
    } else if (password.value.match(passwordRegex) == null) {
        alertPassword.innerHTML = `*Các kí tự được chấp nhận là a-z, A-Z và 0-9`;
        check = check * 0;
    } else {
        alertPassword.innerHTML = "";
    }
    return check;
}
function ValidateRepeatPassword(password, repeat_password, alertRepeatPassword) {
    let check = 1;
    if (repeat_password.value == "") {
        alertRepeatPassword.innerHTML = "*Không được bỏ trống";
        check = check * 0;
    } else if (repeat_password.value.localeCompare(password.value) != 0) {
        alertRepeatPassword.innerHTML = "*Mật khẩu không trùng khớp";
        check = check * 0;
    } else {
        alertRepeatPassword.innerHTML = "";
    }
    return check;
}

// Khi submit thanh cong
const loginForm = document.getElementById("login-form");
loginForm.addEventListener('submit', LoginFunction);
function LoginFunction(event) {
    event.preventDefault();
    const loginFormData = new FormData(event.target);
    const loginFormDataObj = {
        username: "",
        password: "",
    };
    loginFormDataObj.username = loginFormData.get("username");
    loginFormDataObj.password = loginFormData.get("password");
    console.log(loginFormDataObj);
};
const registerForm = document.getElementById("register-form");
registerForm.addEventListener('submit', RegisterFunction);
function RegisterFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {
        fullName: "",
        username: "",
        email: "",
        password: "",
    };
    formDataObj.fullName = myFormData.get("full-name");
    formDataObj.email = myFormData.get("email");
    formDataObj.username = myFormData.get("username");
    formDataObj.password = myFormData.get("password");
    console.log(formDataObj);
};