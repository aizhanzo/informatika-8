function checkAuth() {
  const username = localStorage.getItem("username");

  const loginForm = document.getElementById("login-form");
  const userGreeting = document.getElementById("user-greeting");
  const usernameText = document.getElementById("username-text");
  const enterBtn = document.getElementById("enter-btn");
  const chapters = document.getElementById("chapters");

  if (username) {
    loginForm.style.display = "none";
    userGreeting.style.display = "block";
    usernameText.innerText = username;
    enterBtn.style.display = "inline-block";
    chapters.style.display = "block";
  } else {
    loginForm.style.display = "block";
    userGreeting.style.display = "none";
    enterBtn.style.display = "none";
    chapters.style.display = "none";
  }

  const form = document.querySelector("#login-form form");
  if (form) {
    form.addEventListener("submit", login);
  }
}

function login(event) {
  event.preventDefault();

  const login = document.getElementById("login").value.trim();
  const password = document.getElementById("password").value.trim();

  if (login === "user" && password === "1234") {
    localStorage.setItem("username", login);
    checkAuth();
  } else {
    alert("Қате логин немесе құпиясөз!");
  }
}

function logout() {
  localStorage.removeItem("username");
  checkAuth();
}

function checkQuiz(formId, correctAnswers) {
  const form = document.getElementById(formId);
  const resultDiv = document.getElementById("result_" + formId);

  let score = 0;
  correctAnswers.forEach((correct, index) => {
    const qName = "q" + (index + 1);
    const answer = form.querySelector(`input[name="${qName}"]:checked`);
    if (answer && answer.value === correct) {
      score++;
    }
  });

  resultDiv.innerHTML = `Дұрыс жауаптар саны: <strong>${score} / ${correctAnswers.length}</strong>`;
}