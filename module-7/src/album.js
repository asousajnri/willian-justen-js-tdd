export const getAlbum = (id) => {
    return fetch(`https://api.spotify.com/v1/artists/${id}/albums`);
};

export const getAlbumTracks = () => {

};