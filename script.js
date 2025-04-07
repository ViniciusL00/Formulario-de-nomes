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
}