#!/usr/bin/env node

var rainbowify = require('./')

var args = process.argv.slice(2)

if(args.length && args[0] === '-r' || args[0] === '--random'){
    rainbowify.colorIndex = Math.floor(Math.random()*6*7)
}

process.stdin.on('data', function(c) {
  c.toString().split('\n').map(function(c) {
    process.stdout.write(rainbowify(c) + '\n')
  })
})

