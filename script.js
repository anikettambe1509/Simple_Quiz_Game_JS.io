const questions = [
    {
        question_text: "What is the capital of France?",
        options: ["A) London", "B) Paris", "C) Rome", "D) Berlin"],
        correct_option: "B"
    },
    {
        question_text: "What is the largest planet in our solar system?",
        options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
        correct_option: "C"
    },
    {
        question_text: "What is 5 + 7?",
        options: ["A) 12", "B) 14", "C) 16", "D) 18"],
        correct_option: "A"
    },
    {
        question_text: "What is 5 + 20?",
        options: ["A) 19", "B) 21", "C) 23", "D) 25"],
        correct_option: "D"
    }
    
];

let currentQuestion = 0;
let score = 0;

const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultDiv = document.getElementById('result');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionDiv.textContent = question.question_text;
    optionsDiv.innerHTML = '';

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => selectOption(option[0]));
        optionsDiv.appendChild(optionElement);
    });
}

function selectOption(selectedOption) {
    const question = questions[currentQuestion];

    if (selectedOption === question.correct_option) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
    submitBtn.style.display = 'none';

    resultDiv.textContent = `Your Score: ${score}/${questions.length}`;
    resultDiv.style.display = 'block';
}

loadQuestion();
