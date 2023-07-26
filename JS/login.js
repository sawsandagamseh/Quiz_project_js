let eyeicon = document.getElementById("eyeicon");
eyeicon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        eyeicon.src = "../images/c.png"
    } else {
        password.type = "password"
        eyeicon.src = "../images/CA.png"
    }
}


function savedata() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    let user = new Array();
    user = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user.some((v) => {
        window.location.href = "../pages/index.html";   
        localStorage.setItem('name',v.firstname+' '+v.lastname)
        
        return v.email == email && v.password == password;


    })) {
        
        alert("login sucsseful")
        
    }

    else {
        alert("login faild")
        window.location.href = "";
    }

}
