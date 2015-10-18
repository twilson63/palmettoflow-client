# Palmetto Flow Client Module

This module abstracts the timeout and the event emitter pattern and provides a callback pattern that can be used as a route wrapper or can be promisified and used in a promise chaining pattern.

## usage

``` js
var pfclient = require('palmettoflow-client')
var handler = pfclient({ timeout: 2000}, ee)

handler(
  newEvent('subject', 'verb',
    { data: 'here' },
    { actor: 'here'}
  ), function (err, result) {
    // handle result
  }
)
```

## test

```
npm test
```

## Support

create an issue