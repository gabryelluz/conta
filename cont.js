const botões = document.querySelectorAll('.Objetivos');
//botôes.lenght

for (let i = 0; i <botões.lenght; i++){
console.log(i)
botões[i].onclick = function(){
    botões[i].classList.add('ativo');

}

// botões[i].classList.remove ('ativo');
}