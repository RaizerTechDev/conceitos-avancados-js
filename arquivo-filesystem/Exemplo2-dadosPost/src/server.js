import express from "express";
import fs from "fs";

const app = express();
const port = 9000;

// Middleware para parse do JSON
app.use(express.json());

// Rota POST - Recebe e armazena nome e idade no arquivo 'dados.json'
app.post("/", (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).send("Nome e idade não podem ser vazios!");
  }

  // Dados para salvar no arquivo
  const pessoa = { nome, idade };

  // Escreve os dados no arquivo 'dados.json'
  fs.writeFile("dados.json", JSON.stringify(pessoa), (err) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro ao salvar dados no arquivo." });
    }
    res.status(200).send({ mensagem: `Nome e idade recebidos: ${nome}, ${idade} anos` });
  });
});

// Rota GET - Lê os dados do arquivo 'dados.json' e retorna como JSON
app.get("/nome", (req, res) => {
  fs.readFile("dados.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro ao ler dados do arquivo." });
    }
    // Verifica se o arquivo possui conteúdo
    const pessoa = JSON.parse(data || "{}");

    if (pessoa.nome && pessoa.idade) {
      res.status(200).json({
        mensagem: `Seu nome é ${pessoa.nome} e tem ${pessoa.idade} anos`,
      });
    } else {
      res.status(404).json({
        mensagem: "Nome e/ou idade não definidos. Faça um POST para definir os dados.",
      });
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
