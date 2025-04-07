# Formulario-de-nomes
<h1 align="center">Desafio para criar um formulário de nomes</h1>

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

* Também mostramos esses valores na página web dentro do elemento <p id="resultados">.
<<<<<<< HEAD

3. <h2 align="center">Alterando o conteúdo do parágrafo com textContent: (Parte do desafio)</h2>

Usamos document.getElementById('mensagem') para selecionar o parágrafo com o id mensagem.

A propriedade textContent é usada para modificar o conteúdo desse parágrafo. O valor mostrado será a string com os valores de nome e email digitados.

**Código:**

```id="mensagem">Este texto será atualizado pelo JavaScript.</p> <!-- Parágrafo que será alterado para o desafio -->```

```   // Modificar o conteúdo do parágrafo com id "mensagem" usando textContent```

```  let mensagem = document.getElementById('mensagem');```

```  mensagem.textContent = `Os valores digitados são: Nome - ${nome}, Email - ${email}`;```
=======
>>>>>>> 3f807143ff49b7bbb2649284ced694e811760021
