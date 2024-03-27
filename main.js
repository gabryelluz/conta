alert ('parça')

let nomeUsuario = '';

let texto = document.querySelector('span');

while(nomeUsuario == ''){
nomeUsuario = prompt ('Qual seu nome?');
}

texto.textContent = nomeUsuario;
