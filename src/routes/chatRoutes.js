const express = require('express');
const twilio = require('twilio');
const { handleChat } = require('../controllers/chatController');
const logger = require('../logger');

const router = express.Router();
router.post('/webhook', (req, res) => {
    try {
        if (!req.body || !req.body.Body) {
            return res.status(400).send('Requisição inválida.');
        }

        const twiml = new twilio.twiml.MessagingResponse();
        const message = req.body.Body;
        const response = handleChat(message);
        twiml.message(response);
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    } catch (error) {
        logger.error(`Erro ao processar mensagem: ${error.message}`);
        res.status(500).send('Erro interno do servidor. Tente novamente mais tarde.');
    }
});

module.exports = router;
