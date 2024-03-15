import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import { API_URL } from '../src/config';

chai.use(sinonChai);
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Album', () => {
    let spotify;
    let stubedFetch;
    let promise;
    beforeEach(() => {
        spotify = new SpotifyWrapper({ token: 'foo' });
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.resolves({ json: () => {} });
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        });
        it('should have getAlgumaTracks method', () => {
            expect(spotify.album.getTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('should call fetch method', () => {
            spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            spotify.album.getAlbum('0TnOYISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOYISbd1XYRBk9myaseg`)

            spotify.album.getAlbum('0TnOKISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOKISbd1XYRBk9myaseg`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const album = spotify.album.getAlbum('0TnOKISbd1XYRBk9myaseg');
            return album.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });

    describe('getAlbums', () => {
        it('should call fetch method', () => {
            spotify.album.getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            spotify.album.getAlbums(['0TnOYISbd1XYRBk9myaseg', '0TnOYISbd1XYRBk9myaseK']);
            expect(stubedFetch).to.have.been
            .calledWith(`${API_URL}/albums/?ids=0TnOYISbd1XYRBk9myaseg,0TnOYISbd1XYRBk9myaseK`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const albums = spotify.album.getAlbums([
                '0TnOYISbd1XYRBk9myaseg',
                '0TnOYISbd1XYRBk9myaseK'
            ]);
            return albums.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });

    describe('getAlbumsTracks', () => {
        it('should call fetch method', () => {
            spotify.album.getTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            spotify.album.getTracks('0TnOYISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOYISbd1XYRBk9myaseg/tracks`)

            spotify.album.getTracks('0TnOKISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOKISbd1XYRBk9myaseg/tracks`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const tracks = spotify.album.getTracks('0TnOKISbd1XYRBk9myaseg');
            return tracks.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });
});
