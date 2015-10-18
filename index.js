var responseError = require('palmettoflow-event').responseError

module.exports = function (config, ee) {
  return function (ne, callback) {
    var timeoutHasRun = false
    var to = setTimeout(function () {
      timeoutHasRun = true
      cb(null, responseError(ne,
        { message: 'Timeout has occured for: ' + event.to })
      )
    }, config.timeout || 1000)
    ee.on(ne.from, function (event) {
      if (!timeoutHasRun) {
        clearTimeout(to)
        // don't want to fire multiple cb's
        cb(null, event)
      }
    })
    ee.emit('send', ne)
  }
}