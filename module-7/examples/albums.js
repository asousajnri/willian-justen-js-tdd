// global.fetch = require('node-fetch');

import { searchAlbums } from '../src/index.js';

const albums = searchAlbums('Incubus');
albums.then(data => data
    .albums.items.map(item => console.log(data)));