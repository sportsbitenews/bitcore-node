/**
 * bitcoind.js
 * Copyright (c) 2014, BitPay (MIT License)
 * A bitcoind node.js binding.
 */

var net = require('net');
var EventEmitter = require('events').EventEmitter;
var bitcoindjs = require('../build/Release/bitcoindjs.node');

/**
 * Bitcoin
 */

function Bitcoin(flag) {
  var self = this;

  if (!(this instanceof Bitcoind)) {
    return new Bitcoind(flag);
  }

  EventEmitter.call(this);

  var ret = bitcoindjs.start(function() {
    self.emit('open');
  });

  this.ret = ret;
}

Bitcoin.prototype.__proto__ = EventEmitter.prototype;

/**
 * Expose
 */

module.exports = exports = Bitcoin;
exports.Bitcoin = Bitcoin;
exports.native = bitcoindjs;