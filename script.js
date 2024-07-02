// Definição das perguntas e respostas
const questions = [
    {
        question: "Esta é a primeira pergunta?",
        answer: true
    },
    {
        question: "Verdadeiro ou falso: A Terra é plana.",
        answer: false
    },
    {
        question: "Verdadeiro ou falso: Python é uma linguagem de programação.",
        answer: true
    },
    {
        question: "A água é composta por dois átomos de hidrogênio e um de oxigênio.",
        answer: true
    },
    {
        question: "O Sol gira em torno da Terra.",
        answer: false
    }
];

// Variáveis de controle do quiz
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Função para exibir a próxima pergunta
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = question.question;
    } else {
        showResults();
    }
}

// Função para verificar a resposta do usuário
function checkAnswer(userAnswer) {
    const question = questions[currentQuestionIndex];

    if (userAnswer === question.answer) {
        correctAnswers++;
    }

    currentQuestionIndex++;
    showNextQuestion();
}

// Função para exibir o resultado final
function showResults() {
    const totalQuestions = questions.length;
    const resultText = `Você acertou ${correctAnswers} de ${totalQuestions} perguntas.`;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-text').innerText = resultText;
}

// Função para recomeçar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    showNextQuestion();
}

// Início do quiz
showNextQuestion();
