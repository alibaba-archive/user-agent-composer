user-agent-composer
===================

Compose user agent for yourself

```js
var Composer = require('user-agent-composer')
new Composer()
  .product('Mozilla', '5.0')
  .os('Macintosh', 'Intel Mac OS X 10_12_4')
  .platform('AppleWebKit', '537.36', 'KHTML, like Gecko')
  .ext('Chrome', '55.0.2883.95')
  .ext('Safari', '537.36')
  .build()
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36
```
