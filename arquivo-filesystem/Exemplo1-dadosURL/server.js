import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

// Middleware para fazer parse do JSON
app.use(express.json());

// Rota GET - Captura dados da URL e salva no arquivo JSON
app.get('/:nome/:idade', (req, res) => {
  const { nome, idade } = req.params;

  // Cria o objeto de dados com a mensagem desejada
  const dados = {
    mensagem: `Seu nome é ${nome} e tem ${idade} anos`
  };

  // Salva a mensagem no arquivo 'dados.json'
  fs.writeFile('dados.json', JSON.stringify(dados), (err) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro ao salvar dados no arquivo." });
    }
    // Retorna a mensagem como resposta da requisição
    res.status(200).json(dados);
  });
});

// Rota POST - Exemplo para outro uso, se necessário
app.post('/', (req, res) => {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({ mensagem: "Nome e idade são obrigatórios." });
  }

  const dados = {
    mensagem: `Seu nome é ${nome} e tem ${idade} anos`
  };

  // Salva a mensagem no arquivo 'dados.json' também
  fs.writeFile('dados.json', JSON.stringify(dados), (err) => {
    if (err) {
      return res.status(500).json({ mensagem: "Erro ao salvar dados no arquivo." });
    }
    res.status(200).json(dados);
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
