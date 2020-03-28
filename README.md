# 📄 template-node-js

Project Template for creating Node.js Apps with JavaScript - without transpiling

## ⭐ Features

- Automatic code checking with TypeScript
- Built-in tasks using npm scripts
- Integration with Visual Studio Code
  - Settings
  - Tasks
  - Debuging
  - Extensions
    - Automatic code checking with ESLint
    - Automatic code formatting and fixing with Prettier

## 🛠️ Development

These instructions will get you a copy of this project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- [Node.js](https://nodejs.org) - JavaScript run-time environment
  - After installing it, use `npm i` in the project's root folder to install all dependencies

#### Visual Studio Code Extensions

This project is intended to be used with Visual Studio Code and the following extensions are recommended:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates ESLint JavaScript into VS Code
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter using prettier

### 🚀 Getting Started

This project uses npm scripts for running tasks:

```bash
# check the project with the TypeScript compiler
# and lint it with eslint
npm run lint

# run the project
npm start

# publish the project
# (includes lint)
npm publish
```

VS Code tasks are also included for `lint` and `start`.

## 🧰 Built With

### 📚 Resources

- [`.eslintrc.js` from `create-exposed-app`](https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js)

### 🏛️ Libraries

- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
- [ESLint](https://eslint.org/) - Find and fix problems in your JavaScript code

## 👨‍💻 Authors

- **Robin Hartmann** - [robin-hartmann](https://github.com/robin-hartmann)

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
