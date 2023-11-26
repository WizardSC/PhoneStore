const form = document.getElementById("form");
const login = document.getElementsByClassName("login-form");
const register = document.getElementsByClassName("register-form");
var fullNameRegex = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
var alertFullName = document.getElementsByClassName("alert-full-name");
var usernameRegex = /^[a-zA-Z0-9]+$/;
var alertUsername = document.getElementsByClassName("alert-username");
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var alertEmail = document.getElementsByClassName("alert-email");
var passwordRegex = /^[a-zA-Z0-9!@#$%&*]+$/;
var alertPassword = document.getElementsByClassName("alert-password");
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
    } else if (/\d/.test(fullName.value)) {
        alertFullName.innerHTML = `*Họ và tên không được có số`;
        check = check * 0;
    } else {
        alertFullName.innerHTML = "";
    }
    return check;
}
let usernameLogin
function ValidateUsername(username, alertUsername) {
    let check = 1;
    if (username.value == "") {
        alertUsername.innerHTML = `*Tên đăng nhập không được bỏ trống`;
        check = check * 0;
    } else if (username.value.length < 6 || username.value.length > 30) {
        alertUsername.innerHTML = `*Tên đăng nhập cần có độ dài từ 6-30 kí tự`;
        check = check * 0;
    } else if (username.value.match(usernameRegex) == null) {
        alertUsername.innerHTML = `*Các kí tự được chấp nhận là a-z, A-Z và 0-9`;
        check = check * 0;
    }
    else {
        alertUsername.innerHTML = "";
    }
    if (!User.isExistUsername(username.value)) {
        alertUsername.innerHTML = `*Tên đăng nhập không tồn tại trên hệ thống`;
        usernameLogin = null;
        check = check * 0;
    }
    else {
        alertUsername.innerHTML = "";
        usernameLogin = username.value;
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
    } else if (password.value.length < 6 || password.value.length > 30) {
        alertPassword.innerHTML = `*Mật khẩu cần có độ dài từ 6-30 kí tự`;
        check = check * 0;
    } else if (password.value.match(passwordRegex) == null) {
        alertPassword.innerHTML = `*Các kí tự được chấp nhận là a-z, A-Z và 0-9`;
        check = check * 0;
    } else {
        alertPassword.innerHTML = "";
    }
    if (usernameLogin != null) {
        if (User.checkUserToLogin(usernameLogin, password.value)) {
            alertPassword.innerHTML = "";
        } else {
            alertPassword.innerHTML = `*Sai mật khẩu`;
            check = check * 0;
        }
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
    if(User.checkIsActive() == false){
        alert('Tài khoản không hoạt động. Vui lòng liên hệ quản trị viên và thử lại!')
        return
    }
    if (User.checkIsAdmin() == true) {
        closeFormLogin()
        // location.reload(); //tải lại trang
        redirectToAdminPage()
        return;
    }
    closeFormLogin()
    location.reload(); //tải lại trang

};
const registerForm = document.getElementById("register-form");
registerForm.addEventListener('submit', RegisterFunction);
function RegisterFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    newUser = new User(
        username = myFormData.get("username"),
        password = myFormData.get("password"),
        email = myFormData.get("email"),
        phone = "",
        full_name = myFormData.get("full-name"),
        address = "",
        is_admin = "",
    );
    userArr.push(newUser);
    console.log(userArr[0]);
};

// Close form
const btnCloseFormLogin = $('.login__close-form-btn')
btnCloseFormLogin.addEventListener('click', closeFormLogin)

function closeFormLogin() {
    form.style.display = 'none';
}

// Các hàm giúp Đăng nhập hiện thông tin user, đăng xuất hiện nút đăng nhập
if (User.checkLoginId()) {
    changeLoggedUser()
} else {
    changeNoneLoggedUser()
}

function changeLoggedUser() {
    const noneLoggedUser = $('.header__navbar-item--none-logged')
    const loggedUser = $('.header__navbar-item--logged')
    const username = $('.header__navbar-username')
    const adminPageItem = document.querySelector('.header__navbar-dropdown-item[data-value="admin-page"]');
    const user = User.getUserID(User.checkLoginId())
    username.innerText = user.full_name
    noneLoggedUser.classList.remove('active')
    loggedUser.classList.add('active')
    if(user.isAdmin === false){
        adminPageItem.classList.add('inactive')
    }
}

function changeNoneLoggedUser() {
    const noneLoggedUser = $('.header__navbar-item--none-logged')
    const loggedUser = $('.header__navbar-item--logged')
    noneLoggedUser.classList.add('active')
    loggedUser.classList.remove('active')
}

const logOutBtn = $('#logout__btn')
logOutBtn.addEventListener('click', () => {
    User.logOut();
    location.reload();
    redirectToProductPage();

})



