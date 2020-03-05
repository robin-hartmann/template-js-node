# template-js-node

Template for creating Node.js apps with JavaScript

## Features

- TypeScript with strict config
  - Only for checking the code
- ESLint with lots of rules
- Prettier with matching config
- Integration with Visual Studio Code
  - Matching settings
    - Automatically formats and fixes code when saving
  - Launch and debug code
  - Task definitions
  - Extension recommendations

## Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org) - JavaScript run-time environment
  - After installing it, use `npm i` in the project's root folder to install all dependencies

#### Visual Studio Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier

### Build Process

This project uses npm scripts for building:

```bash
# lint the project using eslint
npm run lint

# run the project
npm start

# publish the project
# (includes lint)
npm publish
```

VS Code tasks for `lint` and `start` are also included.
