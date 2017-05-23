'use strict'
/* global describe it */
const pkg = require('../package.json')
const assert = require('assert')
const Composer = require('../lib')
const urllibVersion = require('urllib/package.json').version

describe(`${pkg.name}@${pkg.version} test suite`, () => {
  it('Wopi/1.0.0 (Darwin; 16.6.0) urllib/2.22.0; My-Server', () => {
    let useragent = new Composer()
      .product('Wopi', '1.0.0')
      .ext(`urllib`, urllibVersion)
      .ext('My-Server')
      .build()
    assert(useragent)
    assert(/^Wopi/.test(useragent))
    assert(/My-Server$/.test(useragent))
  })

  it('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36', () => {
    let useragent = new Composer()
      .product('Mozilla', '5.0')
      .os('Macintosh', 'Intel Mac OS X 10_12_4')
      .platform('AppleWebKit', '537.36', 'KHTML, like Gecko')
      .ext('Chrome', '55.0.2883.95')
      .ext('Safari', '537.36')
      .build()
    assert.strictEqual(useragent, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
  })
})
