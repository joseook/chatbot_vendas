const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
const logger = require('./logger');

const app = express();

// Middleware de segurança
app.use(helmet());

// Middleware para parsear o corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));

// Logging de requisições
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Suporte CORS
app.use(cors());

// Limitação de taxa
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limite de 100 requisições por IP
});
app.use(limiter);

// Rotas
app.use('/', chatRoutes);

// Middleware para rotas não encontradas
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada.');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    logger.error(`Erro interno do servidor: ${err.message}`);
    res.status(500).send('Erro interno do servidor.');
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // para testes
