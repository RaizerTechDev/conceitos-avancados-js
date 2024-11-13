// Requisição POST para enviar nome e idade ao servidor
const resultPost = await fetch('http://localhost:9000/', { 
  method: "POST",
  headers: { "Content-type": "application/json" }, // Define o tipo de conteúdo como JSON
  body: JSON.stringify({
    nome: '',  // Deixando o nome vazio
    idade: '', // Deixando a idade vazia
  }),
}); 

console.log("A resposta do Servidor é", resultPost.status);
console.log(await resultPost.text()); // Exibe a resposta do POST

// Requisição GET para obter os dados do nome e idade armazenados no servidor
const resultGet = await fetch('http://localhost:9000/nome', { 
  method: "GET",
});

console.log(await resultGet.json()); // Exibe a resposta do GET em formato JSON
