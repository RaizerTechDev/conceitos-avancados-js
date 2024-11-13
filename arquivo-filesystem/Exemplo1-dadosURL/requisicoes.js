// Requisição POST para enviar dados ao servidor
const resultPost = await fetch("http://localhost:3000/", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    nome: "Rafa", // Deixe vazio inicialmente
    idade: "47", // Deixe vazio inicialmente
  }),
});

console.log("Status da resposta do Servidor para POST:", resultPost.status);
console.log(await resultPost.json()); // Exibe a resposta JSON do POST

// Requisição GET para obter dados do servidor
const resultGet = await fetch("http://localhost:3000/nome", {
  method: "GET",
});

console.log("Resposta do GET:", await resultGet.json()); // Exibe a resposta JSON do GET
