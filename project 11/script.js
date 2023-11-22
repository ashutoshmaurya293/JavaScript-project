const quizData = [
  {
    question: "what does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfre Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which CSS property is used to control the spacing between element",
    options: ["margine", "padding", "spacing", "border-spacing"],
    correct: 0,
  },
  {
    question:
      "what is the javaScript function used to select an HTML element by its id ?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In React js, which hook is used to perform side effect in a function component ?",
    options: ["useEffect", "usestate", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to create an orderd list ?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
];
const answerElm = document.querySelectorAll(".answer");
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
const Quiz = document.getElementById("Quiz");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const Loadquiz = () => {
  const { question, options } = quizData[currentQuiz];
  // console.log(options);
  questionElem.innerText = `${currentQuiz + 1}:${question}`;
  options.forEach((el, i) => (window[`option_${i + 1}`].innerText = el));
};
Loadquiz();
const getSelectedOption = () => {
  // let ansIndex;
  // answerElm.forEach((el,i)=>{
  // if (el.checked) {
  //   ansIndex = i
  // }
  // })
  // return ansIndex
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((el) => el.checked);
};

const deSelected = () => {
  answerElm.forEach((el) => (el.checked = false));
};

function addTask() {
  const selectedOptonIndex = getSelectedOption();
  console.log(selectedOptonIndex);
  if (selectedOptonIndex === quizData[currentQuiz].correct) {
    score = score + 1;
    console.log(score);
  }
  deSelected();
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    Loadquiz();
  } else {
    Quiz.innerHTML = `
    
    <div class="result">
    <h2>Your score: ${score}/${quizData.length}</h2>
</div>`;
  }
}
