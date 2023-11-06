function LoginPopupOpen() {
    document.getElementById("form").style.display = "block";
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("signUpPopup").style.display = "none";
}

function SignUpPopupOpen() {
    document.getElementById("form").style.display = "block";
    document.getElementById("signUpPopup").style.display = "block";
    document.getElementById("loginPopup").style.display = "none";
}
window.onclick = function (event) {
    let modal = document.getElementById('form');
    if (event.target == modal) {
        document.getElementById("form").style.display = "none";
    }
}