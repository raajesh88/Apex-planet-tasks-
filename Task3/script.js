// Quiz Questions
const questions = [
  {
    question: "Which language is used for webpage structure?",
    answers: ["CSS", "HTML", "JavaScript", "Python"],
    correct: "HTML",
  },

  {
    question: "Which CSS property changes text color?",
    answers: ["font-size", "background", "color", "padding"],
    correct: "color",
  },

  {
    question: "Which keyword is used to declare variables in JavaScript?",
    answers: ["var", "int", "string", "define"],
    correct: "var",
  },
];

let currentQuestion = 0;

let score = 0;

const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

const scoreElement = document.getElementById("score");

// Load Question
function loadQuestion() {
  const current = questions[currentQuestion];

  questionElement.innerText = current.question;

  answersElement.innerHTML = "";

  current.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.innerText = answer;

    button.classList.add("answer-btn");

    button.onclick = () => checkAnswer(answer);

    answersElement.appendChild(button);
  });
}

// Check Answer
function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    score++;
  }

  nextBtn.style.display = "inline-block";
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();

    nextBtn.style.display = "none";
  } else {
    questionElement.innerText = "Quiz Completed!";

    answersElement.innerHTML = "";

    nextBtn.style.display = "none";

    scoreElement.innerText = `Your Score: ${score} / ${questions.length}`;
  }
});

// Load First Question
loadQuestion();

// Fetch Joke API
async function getJoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );

  const data = await response.json();

  document.getElementById("joke").innerText =
    `${data.setup} - ${data.punchline}`;
}
