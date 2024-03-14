'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = undefined;

var _config = require('./config');

var search = exports.search = function search(q, t) {
  return fetch(_config.API_URL + '/search?q=' + q + '&type=' + t, _config.HEADERS).then(function (data) {
    return data.json();
  });
};

var searchAlbums = exports.searchAlbums = function searchAlbums(q) {
  return search(q, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(q) {
  return search(q, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(q) {
  return search(q, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(q) {
  return search(q, 'playlist');
};