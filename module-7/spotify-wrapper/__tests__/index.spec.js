import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import { 
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from '../src';

global.fetch = require('node-fetch');

describe('Spotify Wrapper Tests Suit', () => {
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
      const stubbedFetch = sinon.stub(global, 'fetch');
      const artists = search();
      expect(stubbedFetch).to.have.been.calledOnce;
    });
  });
});
