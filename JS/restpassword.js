// resetpassword.js  
const resetForm = document.getElementById("resetForm");

resetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  resetPassword();
});

function resetPassword() {
  const resetEmail = document.getElementById("resetEmail").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email === resetEmail);

  if (!user) {
    document.getElementById("resetError").textContent = "Email not found.";
    document.getElementById("resetError").style.color = "red";
    document.getElementById("resetError").style.display = "block";
    
    return;
  }

  document.getElementById("resetError").textContent = "A password reset link has been sent to your email.";
  document.getElementById("resetError").style.color = "red";
}
