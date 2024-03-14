'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _album = require('./album');

Object.keys(_album).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _album[key];
    }
  });
});

var _search = require('./search');

Object.keys(_search).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _search[key];
    }
  });
});