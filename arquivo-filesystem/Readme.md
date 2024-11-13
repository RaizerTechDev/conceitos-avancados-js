# Conceito de Manipulação de Arquivos com Filesystem

 Este repositório demonstra o uso do módulo fs (File System) do Node.js para manipular arquivos, com dois exemplos distintos. Cada exemplo foca em uma abordagem de APIs para manipular dados e salvá-los em um arquivo JSON.

## Estrutura do Projeto:
.
├── exemplo1-dadosURL
│   ├── requisicoes.js
│   └── dados.json
├── exemplo2-dadosPost
│   ├── server.js
│   └── dados.json
└── README.md

## Exemplos

### Exemplo 1: Salvar dados na URL e criar JSON via API GET

Neste exemplo, realizamos um `GET` em uma URL que inclui `nome` e `idade` como parâmetros. O servidor lê esses dados e salva em um arquivo JSON usando o módulo `fs`.

#### Etapas:

1. **Requisição GET**:
   - A URL é formatada como: `http://localhost:3000/nome/idade`
   - Exemplo: `http://localhost:3000/Rafa/30`
<br>

2. **Servidor Express**:
   - Extrai `nome` e `idade` da URL e salva esses dados em `dados.json` usando `fs.writeFile`.
   - Retorna uma mensagem JSON de confirmação ao cliente:
     ```json
     {
       "mensagem": "Seu nome é Rafa e tem 30 anos"
     }
     ```
<br>

3. **Arquivo JSON Salvo**:
   - O arquivo `dados.json` contém:
    ```json
    {
      "mensagem":"Seu nome é Julio e tem 30 anos"
    }
     ```

### Exemplo 2: Salvar dados da API POST e criar JSON via API GET

Neste exemplo, utilizamos uma requisição `POST` para enviar `nome` e `idade` ao servidor. Os dados são armazenados em `dados.json`, e podemos acessá-los com uma requisição `GET` para visualizar os dados salvos.

#### Etapas:

1. **Requisição POST**:
   - Envie `nome` e `idade` no corpo da requisição para `http://localhost:9000/`
   - Exemplo de corpo JSON para `POST`:
     ```json
     {
       "nome": "Marcia",
       "idade": 25
     }
     ```

2. **Servidor Express**:
   - Armazena `nome` e `idade` no arquivo `dados.json` usando `fs.writeFile`.
   - Responde com uma mensagem de confirmação após a gravação dos dados:
     ```json
     {
       "mensagem": "Nome e idade recebidos: Marcia, 25 anos"
     }
     ```

3. **Requisição GET**:
   - Acesse `http://localhost:9000/nome` para visualizar os dados salvos.
   - Exemplo de resposta JSON:
     ```json
     {
       "mensagem": "Seu nome é Marcia e tem 25 anos"
     }
     ```

4. **Arquivo JSON Salvo**:
   - O arquivo `dados.json` contém:
     ```json
     {
       "nome": "Marcia",
       "idade": 25
     }
     ```

## Requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado.
<br>

- **Express**: Execute `npm install express` para instalar o Express.

## Instruções para Executar

1. Clone este repositório.
<br>

2. No terminal, inicie o servidor com: 
```bash
npm install
```
- Para rodar na porta 9000:
```bash
npm run nodemon
```
<br>

3. Siga para fazer as requisições `GET` e `POST`:
- [`Exemplo 1 para criar os dados pela url`](https://github.com/).
<br>
- [`Exemplo 2 usando um cliente como o Postman`](https://github.com/).     

## Considerações Finais

Esses exemplos demonstram como manipular dados recebidos de uma API e armazená-los em um sistema de arquivos como JSON. O uso do módulo `fs` permite salvar e ler dados de forma persistente, mesmo após reiniciar o servidor.