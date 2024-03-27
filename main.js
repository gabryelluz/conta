alert ('parça')

let nomeUsuario = '';

let texto = document.querySelector('span');

while(nomeUsuario == ''){
nomeUsuario = prompt ('Qual seu nome?');
}

if(nomeUsuario == null){
texto.textContent = 'Usuário'
} else{texto.textContent = nomeUsuario;
      
}
