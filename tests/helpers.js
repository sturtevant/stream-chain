'use strict';

const {Readable, Writable} = require('stream');

const streamFromArray = array =>
  new Readable({
    objectMode: true,
    read() {
      if (isNaN(this.index)) this.index = 0;
      this.push(this.index < array.length ? array[this.index++] : null);
    }
  });

const streamToArray = array =>
  new Writable({
    objectMode: true,
    write(chunk, encoding, callback) {
      array.push(chunk);
      callback(null);
    }
  });

const delay = (fn, ms = 20) => async (...args) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn(...args));
      } catch (error) {
        reject(error);
      }
    }, ms);
  });

module.exports = {streamFromArray, streamToArray, delay};
