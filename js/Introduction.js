// Правильні відповіді для обох тестів
const correctAnswers = {
  // Тест 1: Full Stack Developer
  test1: {
    q1_1: "B", // Full Stack Developer створює Front End та Back End
    q1_2: "A", // Front End - те що бачить користувач
    q1_3: "B", // Важливі навички - команда та Git
  },
  // Тест 2: Веб-технології
  test2: {
    q2_1: "B", // HTML - мова розмітки
    q2_2: "C", // CSS - надає вигляд і стиль
    q2_3: "B", // JavaScript - додає інтерактивність
  },
  // Тест 3: Visual Studio Code
  test3: {
    q3_1: "B", // B) Безкоштовний, потужний і гнучкий редактор коду
    q3_2: "C", // C) Місце, де можна побачити всі файли та папки проєкту
    q3_3: "B", // B) Використовувати малі літери і дефіси між словами й блв блв
  },
};

// Універсальна функція для перевірки тестів
function checkQuizGeneral(testName, questionNames, resultDivId) {
  let correctCount = 0;
  let totalQuestions = questionNames.length;
  const answers = correctAnswers[testName];

  // Очищаємо попередні результати ТІЛЬКИ для цього тесту
  questionNames.forEach((questionName) => {
    const allOptions = document.querySelectorAll(
      `input[name="${questionName}"]`
    );
    allOptions.forEach((option) => {
      option.parentElement.classList.remove(
        "answer-correct",
        "answer-incorrect"
      );
    });
  });

  // Перевіряємо кожне запитання
  questionNames.forEach((questionName) => {
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );
    const allOptions = document.querySelectorAll(
      `input[name="${questionName}"]`
    );

    if (selectedAnswer) {
      const selectedValue = selectedAnswer.value;
      const correctValue = answers[questionName];

      // Знаходимо правильну відповідь і підсвічуємо її зеленим
      allOptions.forEach((option) => {
        if (option.value === correctValue) {
          option.parentElement.classList.add("answer-correct");
        }
      });

      // Якщо відповідь правильна, збільшуємо лічільник
      if (selectedValue === correctValue) {
        correctCount++;
      } else {
        // Якщо відповідь неправильна, підсвічуємо червоним
        selectedAnswer.parentElement.classList.add("answer-incorrect");
      }
    }
  });

  // Показуємо результат
  const resultDiv = document.getElementById(resultDivId);
  resultDiv.style.display = "block";

  if (correctCount === totalQuestions) {
    resultDiv.className = "quiz-result correct-result";
    resultDiv.innerHTML =
      "🎉 Молодець! Правильна відповідь! Ти відповів правильно на всі запитання!";
  } else {
    resultDiv.className = "quiz-result incorrect-result";
    resultDiv.innerHTML = `❌ Ти помилився! Правильних відповідей: ${correctCount} з ${totalQuestions}. Спробуй ще раз!`;
  }

  // Блокуємо всі радіокнопки цього тесту після перевірки
  questionNames.forEach((questionName) => {
    document
      .querySelectorAll(`input[name="${questionName}"]`)
      .forEach((radio) => {
        radio.disabled = true;
      });
  });

  // Знаходимо кнопку цього тесту та блокуємо її
  const submitButton = resultDiv
    .closest(".quiz-section")
    .querySelector(".submit-quiz");
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.style.opacity = "0.6";
    submitButton.style.cursor = "not-allowed";
  }

  // Прокручуємо до результату
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

// Функція для першого тесту
function checkQuiz() {
  const questions = ["q1_1", "q1_2", "q1_3"];
  checkQuizGeneral("test1", questions, "quiz-result");
}

// Функція для другого тесту
function checkQuiz2() {
  const questions = ["q2_1", "q2_2", "q2_3"];
  checkQuizGeneral("test2", questions, "quiz-result-2");
}

// Функція для третього тесту
function checkQuiz3() {
  const questions = ["q3_1", "q3_2", "q3_3"];
  checkQuizGeneral("test3", questions, "quiz-result-3");
}
