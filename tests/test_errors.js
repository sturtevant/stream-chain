'use strict';

const unit = require('heya-unit');

const Chain = require('../main');

unit.add(module, [
  function test_noStreams(t) {
    try {
      const chain = new Chain([]);
      t.test(false); // shouldn't be here
    } catch (e) {
      eval(t.TEST('e instanceof Error'));
    }
  },
  function test_wrongStreams(t) {
    try {
      const chain = new Chain([1]);
      t.test(false); // shouldn't be here
    } catch (e) {
      eval(t.TEST('e instanceof Error'));
    }
  }
]);