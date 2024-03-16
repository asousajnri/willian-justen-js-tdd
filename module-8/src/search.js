export function searcher(t, q) {
  return this.request(`${this.apiURL}/search?q=${q}&type=${t}`);
};

export default function search() {
  return {
    artists: searcher.bind(this, 'artist'),
    albums: searcher.bind(this, 'album'),
    tracks: searcher.bind(this, 'track'),
    playlists: searcher.bind(this, 'playlist'),
  };
};
