# Formulario-de-nomes
<h1 align="center">Desafio para criar um formulário de nomes.</h1>

1. Criar o Formulário HTML

**Código:**

```<!DOCTYPE html>```

```<html lang="pt-br">```

```<head>```

```    <meta charset="UTF-8">```

```    <meta name="viewport" content="width=device-width, initial-scale=1.0">```

```    <title>Formulário de nomes</title>```

```</head>```

```<body>```

```    <h1>Nomes</h1>```

```    <!-- Formulário com campos de texto e botão -->```

```    <form id="formularioNomes">```

```        <label for="nome">Nome:</label>```

```        <input type="text" id="nome" name="nome" placeholder="Digite seu nome"><br><br>```

```        <label for="email">Email:</label>```

```        <input type="email" id="email" name="email" placeholder="Digite seu email"><br><br>```

```        <button type="button" onclick="mostrarValores()">Enviar</button>```

```    </form>```

```    <h2>Valores digitados</h2>```

```    <p id=resultados></p>```

```    <script src="script.js"></script>```

```</body>```

```</html>```

**Explicando HTML:**

* Temos um formulário simples com dois campos de entrada: nome e email.

* O botão de envio chama a função JavaScript mostrarValores() quando clicado.

* Também criamos um parágrafo com o id resultados, onde vamos exibir os valores na tela.

2. Escrever o JavaScript:

* Agora, vamos adicionar o JavaScript que será responsável por capturar os valores dos campos de entrada e exibi-los no console e na tela.

**Código:**

```function mostrarValores() {```

```  // Recuperar os valores dos campos de entrada```

``` let nome = document.getElementById('nome').value;```

``` let email = document.getElementById('email').value;```

```  // Exibir os valores no console```

```  console.log("Nome: " + nome);```

```  console.log("Email: " + email);```

```  // Exibir os valores na tela```

```  document.getElementById('resultados').innerHTML =`<strong>Nome:</strong> ${nome}<br>   ```

```    <strong>Nome:</strong> ${nome}<br>```

```   <strong>Email:</strong> ${email}```

```  `;}```

**Explicando Javascript:**

* A função mostrarValores() é chamada quando o botão é pressionado.

* Utilizamos document.getElementById('campo').value para pegar o valor digitado em cada campo de entrada. // nome ou email

* Exibimos os valores no console usando console.log().

* Também mostramos esses valores na página web dentro do elemento `<p id="resultados">`.

3. <h2 align="center">Alterando o conteúdo do parágrafo com textContent: (Parte do desafio).</h2>

* Usamos document.getElementById('mensagem') para selecionar o parágrafo com o id mensagem.

* A propriedade textContent é usada para modificar o conteúdo desse parágrafo. O valor mostrado será a string com os valores de nome e email digitados.

**Código:**

```<p>id="mensagem">Este texto será atualizado pelo JavaScript.</p> <!-- Parágrafo que será alterado para o desafio -->```

```   // Modificar o conteúdo do parágrafo com id "mensagem" usando textContent```

```  let mensagem = document.getElementById('mensagem');```

```  mensagem.textContent = `Os valores digitados são: Nome - ${nome}, Email - ${email}`;```

4. <h2 align="center"> Atualizar o código JavaScript para somar duas variáveis numéricas e exibir no console. </h2>

* Declaração das variáveis numéricas:

* As variáveis numero1 e numero2 são definidas com valores 13 e 28.

**Código:**

```    // Declarar duas variáveis númericas para o desafio```

```    let numero1 = 13;```

```    let numero2 = 28;```

* Soma das variáveis:

* A soma das variáveis é feita com a operação let soma = numero1 + numero2;.

**Código:**

```    // Realizar a soma das duas variáveis para o desafio```

```    let soma = numero1 + numero2;```

* Mensagem no console:

* Usamos Template String para formatar a mensagem e exibir a soma no console. A sintaxe para isso é:

**Código:**

```    // Exibir o resultado da soma no console```

```    console.log(`A soma de ${numero1} e ${numero2} é igual a: ${soma}`);```

* Aqui, *${numero1}, ${numero2} e ${soma} são placeholders que serão substituídos pelos valores das variáveis.*

5. <h2 align="center"> Adicionar a funcionalidade de divisão de frases com split() </h2>

* Vou adicionar um novo campo de entrada para receber as sentenças, e vamos processar a string com o método split() para quebrá-la em frases menores.

**Código HTML Atualizado:**

* 1. Adicionaremos um campo de texto para que o usuário possa digitar as sentenças separadas por ponto e vírgula.

```    <label for="sentencas">Sentenças (separadas por ponto e vírgula):</label>```

```    <input type="text" id="sentencas" name="sentencas" placeholder="Digite suas sentenças"><br><br>```

2. Atualizar o JavaScript para processar as sentenças.

**Código Javascript atualizado:**

```    // Capturar o valor das sentenças digitadas```

```    let sentencas = document.getElementById('sentencas').value;```

```    // Utilizar o split() para dividir as sentenças com base no ponto e vírgula```

```    let frases = sentencas.split(';');```

```    // Exibir cada sentença no console```

```    console.log("As frases separadas são:");```

```    frases.forEach(function(frase, index) {```

```    console.log(`Frase ${index + 1}: ${frase.trim()}`); // .trim() remove espaços extras```

```  });```

**Explicação da Atualização:**

1. Campo de Sentenças:

* Adicionamos um novo campo de entrada no HTML para o usuário digitar suas sentenças separadas por ponto e vírgula.

2. Captura da String:

* No JavaScript, usamos document.getElementById('sentencas').value para pegar o valor digitado pelo usuário no campo "sentenças".

3. Divisão da String com split():

* Usamos sentencas.split(';') para dividir a string nas frases, utilizando o ponto e vírgula como delimitador. Isso cria um array de frases.

* O método split() divide a string em várias partes e retorna um array.

4. Exibição no Console:

* Com frases.forEach(), percorremos cada frase do array gerado e a exibimos no console.

* Usamos .trim() para remover quaisquer espaços em branco extras antes e depois de cada frase.

6. <h2 align="center"> Adicionar um campo de entrada para os números. </h2>

* 1. No código HTML, vamos adicionar um campo de entrada onde o usuário poderá digitar os números separados por vírgulas.

**Código:**

```    <label for="numeros">Números (separados por vírgula):</label>```

```    <input type="text" id="numeros" name="numero" placeholder="Digite os números"><br><br>```

* 2. Atualizar o JavaScript para processar a string de números.

* Agora, vamos capturar a string contendo os números separados por vírgulas, e usar split(',') para dividir essa string em um array de números. Depois, vamos exibir cada número no console.

**Código:**

```    // Capturar a string dos números separados por vírgula```

```    let numeros = document.getElementById('numeros').value;```

```    // Utilizar split() para dividir os números com base na vírgula```

```    let listaNumeros = numeros.split(',');```

```    // Exibir cada número no console```

```    console.log('Os números separados são:');```

```    listaNumeros.forEach(function(numero, index) {```

```        console.log(`Número ${index + 1}: ${numero.trim()}`); // .trim() remove espaços extras```

```      });```

**Explicação da Atualização:**

1. Campo de Números:

* Adicionamos um novo campo de entrada HTML com o id numeros, onde o usuário pode digitar os números separados por vírgulas.

2. Captura da String de Números:

* No JavaScript, usamos document.getElementById('numeros').value para pegar o valor digitado no campo "numeros".

3. Divisão da String com split(','):

* O método split(',') é utilizado para separar a string de números nas vírgulas. Isso cria um array de números.

* A string é dividida em cada ocorrência de vírgula.

4. Exibição no Console:

* Usamos forEach() para percorrer o array listaNumeros e exibir cada número no console.

* O método .trim() é utilizado para remover espaços em branco extras antes e depois de cada número.