export const search = (q, t) => {
  fetch(`https://api.spotify.com/v1/search?q=${q}&type=${t}`)
    .then(data => data.json());
};

export const searchAlbums = () => {

};

export const searchArtists = () => {

};

export const searchTracks = () => {

};

export const searchPlaylists = () => {

};
