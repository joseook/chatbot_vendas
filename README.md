# WhatsApp Sales Chatbot

This is a WhatsApp sales chatbot project developed in Node.js, using the WhatsApp Web Automation library (WA Web.js). The chatbot provides information about courses for sale and directs users to the purchase link. It also includes authentication and token renewal features.

## Folder Structure

- `src`: Contains the application's source code.
  - `config`: Application settings.
  - `controllers`: Controllers for handling chatbot logic.
  - `middleware`: Middlewares, including authentication.
  - `models`: Data models, such as the user model.
  - `routes`: Definition of application routes.
  - `utils`: Utilities and helper functions.
  - `views`: Templates or HTML files for rendering.
  - `test`: Test files to ensure code quality.
- `public`: Stores static files such as CSS and JavaScript.
- `logs`: Directory for storing application logs.

## Key Features

- **Authentication**: Users can register and log in to access protected resources.
- **JWT Tokens**: Authentication based on JSON Web Tokens (JWT).
- **Token Renewal**: Implementation of token renewal using refresh tokens.
- **Token Cleanup**: Expired tokens are removed from the user's token list during verification.

## Configuration

- Configure environment variables in a `.env` file.
- Install dependencies with `npm install`.
- Start the server with `npm start`.

## Usage

- The chatbot responds to WhatsApp messages and provides information about courses for sale.
- To access protected resources, such as admin routes, log in and use the JWT token.

## Testing

- Tests can be executed with `npm test`.
- Make sure to set up a separate test environment if needed.

## Contribution

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).