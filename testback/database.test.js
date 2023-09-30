const mongoose = require('mongoose');
const assert = require('assert');
const connectDB = require('../config/database');

describe('Conexão com o Banco de Dados', () => {
    it('deve conectar ao MongoDB', (done) => {
        connectDB();
        const db = mongoose.connection;
        db.on('open', () => {
            assert.equal(db.readyState, 1);
            done();
        });
    });
});
