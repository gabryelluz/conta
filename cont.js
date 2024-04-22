const botões = document.querySelectorAll('.Objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let i = 0; i <botões.length; i++){
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.lenght; j++){
            botoes[j].classList.remove('ativo');
                textos[j].classList.remove('ativa')
    }
    botões[i].classList.add('ativo');
    textos[i].classlist.add('ativa');
}
}

const contadores = document.querySelectorAll('.contador');
const TempoObjetivo1 = new Date ('2024-04-16T00:00:00');

let TempoAtual = new Date ();
let tempo = TempoObjetivo1 - TempoAtual;
let segundos = Math.floor(TempoFinal/1000);
let minutos = Math.floor (segundos/60);
let horas = Math.floor (minutos/60);
let dias = Math.floor (horas/24);

contadores[0].textContent = dias + "dias" + horas + "horas" + minutos +"minutos" + segundos + "segundos";
