import { API_URL, HEADERS } from './config';

export const getAlbum = (id) => {
    return fetch(`${API_URL}/albums/${id}`, HEADERS)
    .then(data => data);
};

export const getAlbums = ids => {
    return fetch(`${API_URL}/albums/?ids=${ids}`, HEADERS)
    .then(data => data);
};

export const getAlbumTracks = (id) => {
    return fetch(`${API_URL}/albums/${id}/tracks`, HEADERS)
    .then(data => data)
};