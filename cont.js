const botoes = document.querySelectorAll('.objetivos');
const texto = document.querySelectorAll('.aba-conteudo');
// botoes.lenght

for(let i = 0; i < botoes.length; i++) {
    console.log(i); 
        botoes[i].onclick = function(){
            for(let j = 0; j< botoes.length; j++){
                botoes[j].classList.remove('ativo');
                texto[j].classList.remove('ativa');
            }
        botoes[i].classList.add('ativo');
        texto[i].classList.add('ativa');
      
        }
//botoes[i].classList.remove('ativo');
}

const contadores = document.querySelectorAll('.contador');

const tempoObjetivo1 = new Date ('2024-11-12T00:00:00');
const tempoObjetivo2 = new Date ('Depende da graduação');
const tempoObjetivo3 = new Date ('Só encerraremos nossa carreira quando aposentarmo-nos');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3];

for(let i = 0; i < contadores.length; i++){
    contadores[i].textContent =calculaTempo(tempos[i]);
}

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;


                                                                            

    return `${dias} Dias ${horas} Horas ${minutos} Minutos ${segundos} Segundos`;

}
