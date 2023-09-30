const { getCourses, getCourseDetails } = require('./courses');
const logger = require('./logger');

const handleChat = (message) => {
    if (!message || typeof message !== 'string') {
        logger.error('Mensagem recebida inválida.');
        return 'Desculpe, não entendi sua mensagem. Por favor, tente novamente.';
    }

    const lowerCaseMessage = message.toLowerCase().trim();

    if (lowerCaseMessage.includes('curso')) {
        return getCourses();
    } else if (lowerCaseMessage.startsWith('detalhes')) {
        const courseName = lowerCaseMessage.split(' ')[1];
        return getCourseDetails(courseName) || 'Desculpe, não tenho detalhes sobre esse curso.';
    } else if (lowerCaseMessage.includes('olá') || lowerCaseMessage.includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    } else {
        return 'Não entendi sua mensagem. Você pode perguntar sobre nossos cursos ou outros tópicos!';
    }
};

module.exports = { handleChat };
