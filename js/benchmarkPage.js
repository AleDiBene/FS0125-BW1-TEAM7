const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let timeLeft = 60;
let currentQuestionIndex = 0;

const timerElement = document.getElementById("timer");
const progressRing = document.getElementById("progress-ring");
const questionDisplay = document.getElementById("questionDisplay");
const counterDisplay = document.getElementById("counter");
const nextButtons = document.querySelectorAll(".nextQuestion");
let correct = 0; // Tiene traccia delle risposte corrette
let uncorrect = 0; // Tiene traccia delle risposte errate

const updateTimer = function () {
  timeLeft = 60; // Reset del timer ogni volta che il bottone viene cliccato
  const interval = setInterval(function () {
    if (timeLeft >= 0) {
      timerElement.textContent = timeLeft;
      let progress = (60 - timeLeft) * 6;
      progressRing.style.background = `conic-gradient(#00ffff ${progress}deg, transparent ${progress}deg)`;
      timeLeft--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

const counter = function () {
  let count = 1;
  counterDisplay.innerText = `QUESTION ${count}/10`;
  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      count++;
      counterDisplay.innerText = `QUESTION ${count}/10`;
      loadQuestion(); // Carica la domanda successiva
      updateTimer(); // Resetta il timer
    });
  });
};

const loadQuestion = function () {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    questionDisplay.innerText = question.question;

    // Imposta i bottoni con le risposte
    const answers = [question.correct_answer, ...question.incorrect_answers];
    answers.sort(() => Math.random() - 0.5); // Mischia le risposte

    nextButtons.forEach((button, index) => {
      button.innerText = answers[index];
      button.classList.remove("correct", "incorrect");
      button.onclick = function () {
        if (button.innerText === question.correct_answer) {
          correct++;
          console.log("corretto");
        } else {
          uncorrect++;
          console.log("sbagliato");
        }
      };
      // Controlla se il giocatore è promosso o bocciato alla fine del quiz
      if (currentQuestionIndex === questions.length - 1) {
        if (correct > 5) {
          console.log("Promosso!");
          const par = document.querySelector("p"); // Seleziona il primo <p>
          const B = document.createElement("button");
          B.innerText = "Cliccami";
          par.appendChild(B);
          createFinalButton();
        } else {
          console.log("Bocciato!");
          questionDisplay.innerText = "Sei stato BOCCIATO! ❌";
        }
        nextButtons.forEach((button) => (button.disabled = true));
      }
    });

    currentQuestionIndex++;
  } else {
    questionDisplay.innerText = "Hai finito tutte le domande!";
    nextButtons.forEach((button) => (button.disabled = true));
  }
};

const butttonNext = function () {
  if (currentQuestionIndex === questions.length - 1) {
    if (correct > 5) {
      const par = document.querySelector("p"); // Seleziona solo il primo <p>
      const B = document.createElement("button");
      B.classList.add("btn");
      B.innerText = "Risultati";

      par.appendChild(B); // ✅ Funziona correttamente
    }
  }
};

butttonNext();
loadQuestion();
counter();
updateTimer();
