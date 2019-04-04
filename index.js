'use strict'

function Do(obj, cwd, doOnEnd) {
  if (cwd == null) {
    cwd = './'
  }

  let order = obj[0]
  let next = obj[1]

  let exec = require('child_process').exec

  let re = exec(order, {cwd: cwd})
  Log('Do', order)

  re.stdout.on('data', data => {
    Log(data)
  })

  re.stderr.on('data', data => {
    Error(data)
  })

  re.on('exit', (code, signal) => {
    Log('Exit', order)
    if (next != null) {
      Do(next, cwd, doOnEnd)
    } else {
      doOnEnd()
    }
  })
}


let mLog = console.info
let mError = console.error

function Log (f) {
  mLog = f
}

function Error (f) {
  mError = f
}


module.exports.Do = Do
module.exports.Log = Log
module.exports.Error = Error
