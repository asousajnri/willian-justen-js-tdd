export const search = (q, t) => {
  return fetch(`https://api.spotify.com/v1/search?q=${q}&type=${t}`)
    .then(data => data.json());
};

export const searchAlbums = (q) => {
  return search(q, 'album')
};

export const searchArtists = (q) => {
  return search(q, 'artist')
};

export const searchTracks = (q) => {
  return search(q, 'track')
};

export const searchPlaylists = (q) => {
  return search(q, 'playlist')
};
