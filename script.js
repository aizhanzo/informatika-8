
function checkQuiz(formId, correctAnswers) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type=radio]:checked');
  let score = 0;
  inputs.forEach((input, idx) => {
    if (input.value === correctAnswers[idx]) score++;
  });
  form.nextElementSibling.innerText = `Дұрыс жауаптар саны: ${score} / ${correctAnswers.length}`;
}

function checkAuth() {
  const authSection = document.getElementById("auth-section");
  const username = localStorage.getItem("username");

  if (username) {
    authSection.innerHTML = `
      <p>Қош келдіңіз, <strong>${username}</strong>!</p>
      <button class="btn" onclick="logout()">Logout</button>
    `;
  } else {
    authSection.innerHTML = `
      <form onsubmit="login(event)">
        <input type="text" id="login" placeholder="Логин" required>
        <input type="password" id="password" placeholder="Құпиясөз" required>
        <button type="submit" class="btn">Кіру</button>
      </form>
    `;
  }
}

function login(event) {
  event.preventDefault();
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

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

