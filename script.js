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

    // Capturar o valor das sentenças digitadas
    let sentencas = document.getElementById('sentencas').value;

    // Utilizar o split() para dividir as sentenças com base no ponto e vírgula
    let frases = sentencas.split(';');

    // Exibir cada sentença no console
    console.log("As frases separadas são:");
    frases.forEach(function(frase, index) {
    console.log(`Frase ${index + 1}: ${frase.trim()}`); // .trim() remove espaços extras
  });

    // Capturar a string dos números separados por vírgula
    let numeros = document.getElementById('numeros').value;

    // Utilizar split() para dividir os números com base na vírgula
    let listaNumeros = numeros.split(',');

    // Exibir cada número no console
    console.log('Os números separados são:');
    listaNumeros.forEach(function(numero, index) {
        console.log(`Número ${index + 1}: ${numero.trim()}`); // .trim() remove espaços extras
      });
}