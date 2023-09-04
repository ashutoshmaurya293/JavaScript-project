const quizData = [
  {
    Question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    Question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    Question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    Question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
let index = 0;
let total = quizData.length;
let queBox = document.getElementById("queBox");
let option = document.querySelectorAll(".option[type='radio']");
let right = 0,
  wrong = 0;
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = quizData[index];
  queBox.innerText = data.Question;
  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  option.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
let reset = () => {
  option.forEach((input) => {
    input.checked = false;
  });
};
let endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2> `;
};
loadQuestion();
