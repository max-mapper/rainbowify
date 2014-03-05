#!/usr/bin/env node

var rainbowify = require('./')

process.stdin.on('data', function(c) {
  c.toString().split('\n').map(function(c) {
    process.stdout.write(rainbowify(c) + '\n')
  })
})