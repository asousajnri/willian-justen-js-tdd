export const getAlbum = (id) => {
    return fetch(`https://api.spotify.com/v1/albums/${id}`)
    .then(data => data);
};


export const getAlbums = ids => {
    // return fetch(`https://api.spotify.com/v1/albums/?ids=${id}`)
    // .then(data => data.json());
};

export const getAlbumTracks = () => {
    // fetch(`https://api.spotify.com/v1/albums/${id}/tracks`)
    // .then(data => data.json())
};