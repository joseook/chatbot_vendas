# Chatbot de Vendas no WhatsApp

Este é um projeto de chatbot de vendas no WhatsApp desenvolvido em Node.js, usando a biblioteca WhatsApp Web Automation (WA Web.js). O chatbot fornece informações sobre cursos à venda e direciona os usuários para o link de compra. Além disso, inclui funcionalidades de autenticação e renovação de tokens.

## Estrutura de Pastas

- `src`: Contém o código-fonte da aplicação.
  - `config`: Configurações da aplicação.
  - `controllers`: Controladores para manipular a lógica do chatbot.
  - `middleware`: Middlewares, incluindo autenticação.
  - `models`: Modelos de dados, como o modelo de usuário.
  - `routes`: Definição das rotas da aplicação.
  - `utils`: Utilitários e funções auxiliares.
  - `views`: Templates ou arquivos HTML para renderização.
  - `test`: Arquivos de teste para garantir a qualidade do código.
- `public`: Armazena arquivos estáticos, como CSS e JavaScript.
- `logs`: Pasta para armazenar registros ou logs da aplicação.

## Funcionalidades Principais

- **Autenticação**: Os usuários podem se registrar e fazer login para acessar recursos protegidos.
- **Tokens JWT**: Autenticação baseada em tokens JWT (JSON Web Tokens).
- **Renovação de Tokens**: Implementação da renovação de tokens usando refresh tokens.
- **Limpando Tokens**: Tokens expirados são removidos da lista de tokens do usuário durante a verificação.

## Configuração

- Configure as variáveis de ambiente em um arquivo `.env`.
- Instale as dependências com `npm install`.
- Execute o servidor com `npm start`.

## Uso

- O chatbot responde a mensagens no WhatsApp e fornece informações sobre os cursos à venda.
- Para acessar recursos protegidos, como rotas de administração, faça login e use o token JWT.

## Testes

- Os testes podem ser executados com `npm test`.
- Certifique-se de configurar um ambiente de teste separado, se necessário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
