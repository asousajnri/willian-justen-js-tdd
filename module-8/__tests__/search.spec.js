import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

describe('Spotify Wrapper Tests Suit', () => {
  let spotify;
  let stubbedFetch;
  let promise;
  beforeEach(() => {
    spotify = new SpotifyWrapper({ token: 'foo' });
    stubbedFetch = sinon.stub(global, 'fetch');
    promise = stubbedFetch.resolves({ json: () => ({ body: 'json' }) });
  });
  afterEach(() => {
    stubbedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });
  describe('searchArtists', () => {
    it('should call fetch function', () => {
      spotify.search.artists('Incubus');
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      spotify.search.artists('Incubus');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')
      
      spotify.search.artists('Muse');
      expect(stubbedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });
  });
  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      spotify.search.albums('Incubus');
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      spotify.search.albums('Incubus');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
      
      spotify.search.albums('Muse');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    });
  });
  describe('searchTracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks('Incubus');
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      spotify.search.tracks('Incubus');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')
      
      spotify.search.tracks('Muse');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    });
  });
  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('Incubus');
      expect(stubbedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      spotify.search.playlists('Incubus');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')
      
      spotify.search.playlists('Muse');
      expect(stubbedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    });
  });
});
