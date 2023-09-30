const request = require('supertest');
const app = require('../server');
const User = require('../models/user');

describe('Rotas de Autenticação', () => {
    before(async () => {
        // Limpar o banco de dados de teste antes de executar os testes
        await User.deleteMany({});
    });

    it('deve registrar um novo usuário', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'Test User',
                email: 'test@example.com',
                password: 'password123'
            });
        assert.equal(res.status, 200);
        assert.equal(res.body.success, true);
    });

    it('deve fazer login com um usuário registrado', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        assert.equal(res.status, 200);
        assert.exists(res.body.token);
    });
});
