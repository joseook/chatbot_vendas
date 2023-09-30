const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Routes', () => {
    it('should return a valid response for the /webhook route with "curso" message', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'curso' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.include('Curso A');
                done();
            });
    });

    it('should return a valid response for the /webhook route with "curso" message', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'curso' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.include('Curso B');
                done();
            });
    });

    it('should return a valid response for the /webhook route with "curso" message', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'curso' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.include('Curso C');
                done();
            });
    });
    
    it('should return a greeting response for the /webhook route with "olá" message', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'olá' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Olá! Como posso ajudar?');
                done();
            });
    });

    it('should handle unexpected errors gracefully for the /webhook route', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: undefined })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Desculpe, ocorreu um erro. Tente novamente mais tarde.');
                done();
            });
    });

    it('should return a greeting response for the /webhook route with "oi" message', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'oi' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Olá! Como posso ajudar?');
                done();
            });
    });

    it('should handle mixed-case messages in the /webhook route', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: 'CuRsO' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.include('Curso A');
                done();
            });
    });

    it('should handle messages with extra spaces in the /webhook route', (done) => {
        chai.request(app)
            .post('/webhook')
            .send({ Body: '  curso  ' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.text).to.include('Curso A');
                done();
            });
    });
});
