'use strict'
const os = require('os')
// const osname = require('os-name')
module.exports = Composer

/**
 * User-Agent: <product> / <product-version> <comment>
 * Common format for web browsers:
 * User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
 */

function Composer () {
  this.p = {
    product: 'Unknown',
    productVersion: 'Unknown',
    os: os.type(),
    osVersion: os.release(),
    platform: '',
    exts: []
  }
}

Composer.prototype.product = function (name, version) {
  this.p.product = name
  this.p.productVersion = version
  return this
}

Composer.prototype.ext = function (name, version) {
  const ext = name + (version ? '/' + version : '')
  this.p.exts.push(ext)
  return this
}

Composer.prototype.platform = function (name, version, exts) {
  this.p.platform = name + (version ? '/' + version : '')
  if (!Array.isArray(exts)) exts = [exts]
  if (exts.length) this.p.platform += ` (${exts.join('; ')})`
  this.p.platform = this.p.platform.trim()
  return this
}

Composer.prototype.os = function (name, version) {
  this.p.os = name
  this.p.osVersion = version
  return this
}

Composer.prototype.build = function () {
  const p = this.p
  const builder = [`${p.product}/${p.productVersion} (${p.os}; ${p.osVersion})`]
  if (p.platform) builder.push(p.platform)
  p.exts.forEach(e => builder.push(e))
  return builder.join(' ').trim()
}
