#!/usr/bin/env node

'use strict'

const { run } = require('./run')

run().catch((error) => {
  /* eslint-disable no-console */
  console.error('Uncaught error in run():')
  console.error(error)
  /* eslint-enable no-console */
})
