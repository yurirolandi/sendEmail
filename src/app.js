
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
app.use(require("cors")());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({ message: "Tudo ok por aqui!" });
})

app.post('/send', (req, res, next) => {
    const nome = req.body.nome;
    const mensagem = req.body.mensagem;
    require("./nodemail")(nome, mensagem)
        .then(response => res.json(response))
        .catch(error => res.json(error));
})

app.listen(port);
console.log("Servidor escutando na porta 3000...")
