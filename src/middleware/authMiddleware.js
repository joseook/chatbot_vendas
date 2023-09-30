const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ajuste o caminho conforme necessário

module.exports = {
    authenticate: async function(req, res, next) {
        const token = req.header('x-auth-token') || req.cookies.token;
        if (!token) return res.status(401).send('Acesso negado. Nenhum token fornecido.');

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Limpa tokens expirados da lista de tokens do usuário
            const user = await User.findById(decoded.userId);
            if (user) {
                user.refreshTokens = user.refreshTokens.filter(refreshToken => {
                    try {
                        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
                        return true; // Token ainda é válido
                    } catch (error) {
                        return false; // Token expirado ou inválido
                    }
                });
                await user.save(); // Salva as alterações no banco de dados
            }

            next();
        } catch (ex) {
            res.status(400).send('Token inválido.');
        }
    },
    requireRole: function(role) {
        return function(req, res, next) {
            if (req.user && req.user.role === role) {
                next();
            } else {
                res.status(403).send('Acesso negado. Você não tem as permissões necessárias.');
            }
        };
    },
    handleRefreshToken: async function(req, res, next) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return next();

        try {
            // Decodifica o refresh token
            const { userId } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

            // Busca o usuário pelo ID decodificado do token
            const user = await User.findById(userId);
            if (!user) throw new Error('Usuário não encontrado');

            // Verifica se o refresh token está na lista de tokens do usuário
            user.refreshTokens = user.refreshTokens.filter(token => {
                try {
                    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
                    return true; // Token ainda é válido
                } catch (error) {
                    return false; // Token expirado ou inválido
                }
            });

            await user.save(); // Salva as alterações no banco de dados

        } catch (error) {
            console.error('Erro ao processar o refresh token:', error.message);
            return res.status(401).send('Refresh token inválido');
        }

        next();
    }
};
