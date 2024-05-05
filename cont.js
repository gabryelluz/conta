// Mensagem de boas-vindas
alert('Bem-vindo pessoal');

// Definição do nome do usuário
let username = document.querySelector('#username');
let user = prompt("Qual o seu nome?");

if (user === null || user === '') {
    username.textContent = "Usuário";
} else {
    username.textContent = user;
}

console.log("Nome do usuário: " + user);

// Contadores de tempo para os objetivos
const counters = document.querySelectorAll('.counter');

const goalDates = [
    new Date('2024-04-26T00:00:00'),
    new Date('2025-01-17T00:00:00'),
    new Date('2024-12-17T00:00:00'),
    new Date('2024-12-13T00:00:00')
];

// Atualiza os contadores de tempo
function updateCounters() {
    goalDates.forEach((goalDate, index) => {
        counters[index].textContent = calculateTimeRemaining(goalDate);
    });
}

// Calcula o tempo restante para o objetivo
function calculateTimeRemaining(goalDate) {
    let currentTime = new Date();
    let timeRemaining = goalDate - currentTime;

    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return `${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos`;
}

// Atualiza os contadores a cada segundo
setInterval(updateCounters, 1000);

// Adiciona eventos aos botões de objetivo
const objectiveButtons = document.querySelectorAll('.objective-button');
const objectiveContents = document.querySelectorAll('.objective-content');

objectiveButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        objectiveButtons.forEach(btn => btn.classList.remove('active'));
        objectiveContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        objectiveContents[index].classList.add('active');
    });
});
