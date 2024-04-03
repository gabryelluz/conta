const botões = document.querySelectorAll('.Objetivos');
//botôes.length

for (let i = 0; i <botões.length; i++){
console.log(i)
botões[i].onclick = function(){
    botões[i].classList.add('ativo');

}

// botões[i].classList.remove ('ativo');
}