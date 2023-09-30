const request = require('supertest');
const app = require('../server');

describe('Rotas Protegidas', () => {
    let token;

    before(async () => {
        // Fazer login e obter o token
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        token = res.body.token;
    });

    it('deve acessar uma rota protegida com token válido', async () => {
        const res = await request(app)
            .get('/api/protected-route')
            .set('Authorization', `Bearer ${token}`);
        assert.equal(res.status, 200);
    });

    it('não deve acessar uma rota protegida sem token', async () => {
        const res = await request(app)
            .get('/api/protected-route');
        assert.equal(res.status, 401);
    });
});
