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