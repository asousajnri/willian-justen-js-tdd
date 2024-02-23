import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { 
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src';

global.fetch = require('node-fetch');

describe('Spotify Wrapper Tests Suit', () => {
  let stubbedFetch;
  let promise;
  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.resolves({ json: () => ({ body: 'json' }) });
  });
  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });
  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search();
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      context('passing one type', () => {
        const artists = search('Incubus', 'artist');
        expect(stubbedFetch)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        const albums = search('Incubus', 'album');
        expect(stubbedFetch)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);
        expect(stubbedFetch)
          .to
          .have
          .been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });
    it('should return the JSON Data from the Promise', () => {
      const artists = search('Incubus', 'artist');
      artists.then(data => {
        return expect(data).to.be.eql({ body: 'json' });
      })
    });
  });
});
