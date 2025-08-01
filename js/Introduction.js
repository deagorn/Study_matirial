// Правильні відповіді для тесту
const correctAnswers = {
  q1: "B", // Full Stack Developer створює Front End та Back End
  q2: "A", // Front End - те що бачить користувач
  q3: "B", // Важливі навички - команда та Git
};

function checkQuiz() {
  const questions = ["q1", "q2", "q3"];
  let correctCount = 0;
  let totalQuestions = questions.length;

  // Очищаємо попередні результати
  document.querySelectorAll(".answer-option").forEach((option) => {
    option.classList.remove("answer-correct", "answer-incorrect");
  });

  // Перевіряємо кожне запитання
  questions.forEach((questionName) => {
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );
    const allOptions = document.querySelectorAll(
      `input[name="${questionName}"]`
    );

    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      const correctValue = correctAnswers[questionName];

      // Знаходимо правильну відповідь і підсвічуємо її зеленим
      allOptions.forEach((option) => {
        if (option.value === correctValue) {
          option.parentElement.classList.add("answer-correct");
        }
      });

      // Якщо відповідь правильна, збільшуємо лічильник
      if (selectedValue === correctValue) {
        correctCount++;
      } else {
        // Якщо відповідь неправильна, підсвічуємо червоним
        selectedAnswer.parentElement.classList.add("answer-incorrect");
      }
    }
  });

  // Показуємо результат
  const resultDiv = document.getElementById("quiz-result");
  resultDiv.style.display = "block";

  if (correctCount === totalQuestions) {
    resultDiv.className = "quiz-result correct-result";
    resultDiv.innerHTML =
      "🎉 Молодець! Правильна відповідь! Ти відповів правильно на всі запитання!";
  } else {
    resultDiv.className = "quiz-result incorrect-result";
    resultDiv.innerHTML = `❌ Ти помилився! Правильних відповідей: ${correctCount} з ${totalQuestions}. Спробуй ще раз!`;
  }

  // Блокуємо всі радіокнопки після перевірки
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.disabled = true;
  });

  // Блокуємо кнопку "Перевірити відповіді"
  document.querySelector(".submit-quiz").disabled = true;
  document.querySelector(".submit-quiz").style.opacity = "0.6";
  document.querySelector(".submit-quiz").style.cursor = "not-allowed";

  // Прокручуємо до результату
  resultDiv.scrollIntoView({ behavior: "smooth" });
}
