let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let data = document.getElementById('data').value;
    let cidade = document.getElementById('cidade').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';

    if (nome.lenght < 3) {
        document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres.';

        valido = false;

    }

    if (!email.includes('@')) {
        document.getElementById('erroEmail').textContent = 'Email Inválido, deve conter @.';
        valido = false;
    }

    if (valido) {
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = `

Dados enviados: <br>
Nome: ${nome} <br>
Email: ${email} <br>
Telefone: ${telefone} <br>
Cpf: ${cpf} <br>
Data: ${data} <br>
Cidade: ${cidade} <br>

`;
        form.reset();
    }

});