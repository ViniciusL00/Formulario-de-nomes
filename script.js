function mostrarValores() {
    // Recuperar os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    // Exibir valores no console
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);

    // Exibir os valores na tela
    document.getElementById('resultados').innerHTML = `<strong>Nome:</strong> ${nome}<br>
    <strong>Email:</strong> ${email}`;

     // Modificar o conteúdo do parágrafo com id "mensagem" usando textContent
    let mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Os valores digitados são: Nome - ${nome}, Email - ${email}`;

    // Declarar duas variáveis númericas para o desafio
    let numero1 = 13;
    let numero2 = 28;

    // Realizar a soma das duas variáveis para o desafio
    let soma = numero1 + numero2;

    // Exibir o resultado da soma no console
    console.log(`A soma de ${numero1} e ${numero2} é igual a: ${soma}`);
}