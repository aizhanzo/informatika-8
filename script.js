
function checkQuiz(formId, correctAnswers) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type=radio]:checked');
  let score = 0;
  inputs.forEach((input, idx) => {
    if (input.value === correctAnswers[idx]) score++;
  });
  form.nextElementSibling.innerText = `Дұрыс жауаптар саны: ${score} / ${correctAnswers.length}`;
}
