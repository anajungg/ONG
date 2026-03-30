let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let quintal = document.getElementById('quintal').value;
    let horas = document.getElementById('horas').value;
    let animal = document.getElementById('animal').value;
    let termo = document.getElementById('termo').checked;
    let condiçoes = document.getElementById('condiçoes').value;
    let decisao = document.getElementById('decisao').value;
    let local = document.getElementById('local').value;
    let motivo = document.getElementById('motivo').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';

if (nome.length < 3) {
    document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos 3 caracteres.';
    valido = false;
}

if (!email.includes('@')) {
document.getElementById('erroEmail').textContent = 'Email Inválido, deve conter @.';
valido = false;
}
if (telefone.length < 8) {
alert("Telefone inválido.");
valido = false;
}
if (idade === "" || idade <= 0) {
    alert("Informe uma idade válida.");
    valido = false;
}
if (idade < 18) {
    alert("Você precisa ter 18 anos ou mais para adotar.");
    valido = false;
}
if (cpf === "") {
    alert("CPF é obrigatório!");
    valido = false;
}
    let cpfsExistentes = ["12345678900", "11111111111"];

    if (valido) {
        let resultado = document.getElementById('resultado');
    }
if (cpfsExistentes.includes(cpf)) {
    alert("CPF já cadastrado!");
    valido = false;
}
if (moradia === "") {
    alert("Selecione o tipo de moradia.");
    valido = false;
}
if (cidade === "") {
    alert("Cidade é obrigatória.");
    valido = false;
}

if (horas > 8) {
    alert("O animal ficará muito tempo sozinho! Justifique melhor.");
}

if (animal === "naoteve") {
    alert("A ONG poderá acompanhar sua adaptação com o animal.");
}

if (!termo) {
    alert("Você precisa aceitar o termo.");
    valido = false;
}

if (moradia === "apartamento" && quintal === "sim") {
    alert("Quem mora em apartamento não pode ter quintal!");
    valido = false;
}

if (financeiro === "ruim") {
    alert("Você precisa ter condições financeiras para adotar.");
    valido = false;
}

if (decisao === "hoje") {
    alert("Cuidado com decisões impulsivas!");
}

if (moradia === "apartamento" && local !== "permite") {
    alert("Apartamento deve permitir animais!");
    valido = false;
}
if (moradia === "casa" && local !== "seguro") {
    alert("A casa precisa ter um quintal seguro!");
    valido = false;
}

if (motivo.length < 10 || motivo === "quero" || motivo === "porque sim") {
    alert("Explique melhor o motivo da adoção.");
    valido = false;
}
if (valido) {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `
    Dados enviados:<br>
    Nome: ${nome} <br>
    Email: ${email} <br>
    Telefone: ${telefone} <br>
    CPF: ${cpf} <br>
    Idade: ${idade} <br>
    Cidade: ${cidade} <br>
    `;

    form.reset();
}
});