'use strict'

const figlet = require('figlet')

function promisedFiglet(txt) {
  return new Promise((resolve, reject) =>
    figlet(txt, (error, result) => (error ? reject(error) : resolve(result)))
  )
}

function getAsciiArtHelloWorld() {
  return promisedFiglet('Hello World!')
}

module.exports = {
  getAsciiArtHelloWorld
}
