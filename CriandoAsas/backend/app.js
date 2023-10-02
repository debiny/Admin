const express = require('express');
const app = express();
const rotas = require('./routes/routes');
const PORT = process.env.PORT || 3000; // Define a porta do servidor
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }))
// Configuração básica para lidar com JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à sua API!');
});

app.use('/api', rotas);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});