const button = document.getElementById("toggleBtn");
button.addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
});

let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("btn").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

const questions = document.querySelectorAll(".question");
questions.forEach(q => {
      q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
     });
});

const buttons = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        contents.forEach(c => c.classList.remove("active"));
        document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

      // Clear previous errors
document.querySelectorAll(".error").forEach(el => el.textContent = "");

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    isValid = false;
}

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
}

if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be 6+ characters";
    isValid = false;
 }

if (isValid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully!";
    form.reset();
    }
});