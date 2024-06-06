let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "../assets/login/icon-openpass.svg";
    } else {
        password.type = "password";
        eyeicon.src = "../assets/login/icon-closepass.svg";
    }
};

let confirmeyeicon = document.getElementById("confirmeyeicon");
let confirmpassword = document.getElementById("confirmpassword");

confirmeyeicon.onclick = function(){
    if(confirmpassword.type == "password"){
        confirmpassword.type = "text";
        confirmeyeicon.src = "../assets/login/icon-openpass.svg";
    } else {
        confirmpassword.type = "password";
        confirmeyeicon.src = "../assets/login/icon-closepass.svg";
    }
}