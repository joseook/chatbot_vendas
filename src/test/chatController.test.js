const chai = require('chai');
const { handleChat } = require('../controllers/chatController');

const expect = chai.expect;

describe('Chat Controller', () => {
    it('should return course details when message includes "curso"', () => {
        const response = handleChat('curso');
        expect(response).to.include('Curso A');
    });

    it('should return course details when message includes "curso"', () => {
        const response = handleChat('curso');
        expect(response).to.include('Curso B');
    });

    it('should return course details when message includes "curso"', () => {
        const response = handleChat('curso');
        expect(response).to.include('Curso C');
    });

    it('should return a greeting message for other queries', () => {
        const response = handleChat('olá');
        expect(response).to.equal('Olá! Como posso ajudar?');
    });

    it('should handle unexpected errors gracefully', () => {
        const response = handleChat(undefined);
        expect(response).to.equal('Desculpe, ocorreu um erro. Tente novamente mais tarde.');
    });

    it('should return a greeting message for generic greetings', () => {
        const response = handleChat('oi');
        expect(response).to.equal('Olá! Como posso ajudar?');
    });

    it('should handle mixed-case messages', () => {
        const response = handleChat('CuRsO');
        expect(response).to.include('Curso A');
    });

    it('should handle messages with extra spaces', () => {
        const response = handleChat('  curso  ');
        expect(response).to.include('Curso A');
    });
});
