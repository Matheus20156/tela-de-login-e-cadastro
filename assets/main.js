function entrar() {
    let email = document.getElementById('txtem').value.trim();
    let senha = document.getElementById('txts').value.trim();
    let res = document.getElementById('res');

        //verifica se o usuario não deixou nenhum campo em branco
        if ( email === '' || senha === '') {
            window.alert('Preencha todos os campos')
            return;
        }
        
        res.innerHTML='login feito com sucesso!'
    

}

function cadastrar() {
    let nome = document.getElementById('txtn').value.trim();
    let telefone = document.getElementById('tel').value;
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('txts').value;//transformar a string em numeros
    let senhaRepita = document.getElementById('txtr').value
    let res = document.getElementById('res')
    if (nome ==='' || telefone ==='' || email ==='' || senha ===''||senhaRepita==='') {
        window.alert('**[ERRO]** Não deixe nenhum dos dados em brancos')
        return;
    }
    
    //verificar se o nome e email esta certo TENO O '@' e o '.'
    if (email.indexOf('@')===-1||email.indexOf('.')===-1){
        window.alert('***[ERRO]*** E-MAIL INVÁLIDO')
        return;
    }

    //verificar a senha se tem os caracteres especiais e se quando repetir a senha esta igual a outra
    if(!/[!@#$^&*.,]/.test(senha)){
        window.alert('a senha precisa de pelo menos um caratere especial (! @ # $ ^ *. ,');
        return;
    }
    
    if(senha===senha.toLowerCase()){
        window.alert('A senha tem que ter pelo menos uma letra maiúscula')
        return;
    }

    if(senha.length<=6 || senhaRepita.length<=6){
        window.alert('a senha deve conter pelo menos 6 caracteres')
        return;
    }
    if(senha!==senhaRepita){
        window.alert('**[ERRO]** as senhas precisam ser iguais')
        return;
    }

    res.innerHTML='Cadastro realizado com sucesso!!'
}