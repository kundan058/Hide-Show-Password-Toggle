let eyeIcon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeIcon.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "eyes-icon/show-password.png";
    } else {
        password.type = "password";
        eyeIcon.src = "eyes-icon/hide-password.png"
    }
}