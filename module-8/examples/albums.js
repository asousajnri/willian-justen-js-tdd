// global.fetch = require('node-fetch');

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src';

const spotify = new SpotifyWrapper({
    token: '...'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
