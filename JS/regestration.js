let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "../images/c.png";
  } else {
    password.type = "password";
    eyeicon.src = "../images/CA.png";
  }
};

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("passconfirm");
const form = document.getElementById("form");


form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const isFormValid = validateForm();
  if (isFormValid) {
    window.location.href="../pages/login.html";
  }
});


function validateForm() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMsg) => (errorMsg.textContent = ""));

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  const errors = [];

  if (!/^[A-Za-z]{3,8}$/.test(firstName)) {
    errors.push("Please enter a valid first name (3 to 8 characters, alphabets only).");
    document.getElementById("messege").textContent = "Please enter a valid first name (3 to 8 characters, alphabets only)";
    document.getElementById("messege").style.display = "block";
    document.getElementById("messege").style.fontSize = "12px";
    document.getElementById("messege").style.color = "red";
  }

  if (!/^[A-Za-z]{3,8}$/.test(lastName)) {
    errors.push("Please enter a valid last name (6 to 8 characters, alphabets only).");
    document.getElementById("messege2").textContent = "Please enter a valid last name (3 to 8 characters, alphabets only)";
    document.getElementById("messege2").style.display = "block";
    document.getElementById("messege2").style.fontSize = "12px";
    document.getElementById("messege2").style.color = "red";
  }

  if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{3}$/.test(email)) {
    errors.push("Please enter a valid email address.");
    document.getElementById("messege3").textContent = "Please enter valid email";
    document.getElementById("messege3").style.display = "block";
    document.getElementById("messege3").style.fontSize = "12px";
    document.getElementById("messege3").style.color = "red";
  }

  if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
    errors.push("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
    document.getElementById("messege4").textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.";
    document.getElementById("messege4").style.display = "block";
    document.getElementById("messege4").style.fontSize = "12px";
    document.getElementById("messege4").style.color = "red";
  }
  

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
    document.getElementById("messege5").textContent = "Passwords do not match";
    document.getElementById("messege5").style.display = "block";
    document.getElementById("messege5").style.fontSize = "12px";
    document.getElementById("messege5").style.color = "red";
  }

  if (errors.length > 0) {
    return false;
  }

  return true;
}

function savedata() {
  if (validateForm()) {
    var lfname = document.getElementById('fname').value;
    var llname = document.getElementById('lname').value;
    var lemail = document.getElementById('email').value;
    var lpass = document.getElementById('password').value;

    let user = new Array();

    user = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    if (user.some((v) => {
      return v.lemail == lemail;
    })) {
      alert("duplicate");
    } else {
      user.push({
        "firstname": lfname,
        "lastname": llname,
        "email": lemail,
        "password": lpass
      })

      localStorage.setItem("users", JSON.stringify(user))
    }
  }
}
