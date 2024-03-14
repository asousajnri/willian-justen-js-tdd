export * from './album';
export * from './search';

import { API_URL } from './config';

export default class SpotifyWrapper {
    constructor(options) {
        this.apiURL = options.apiURL || API_URL;
        this.token = options.token;
    }
}