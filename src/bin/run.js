'use strict'

const { getAsciiArtHelloWorld } = require('../lib/lib')

async function run() {
  /* eslint-disable no-console */
  try {
    console.log(await getAsciiArtHelloWorld())
  } catch (error) {
    console.error('Error while creating ASCII art:')
    console.error(error)
  }
  /* eslint-enable no-console */
}

module.exports = {
  run
}
