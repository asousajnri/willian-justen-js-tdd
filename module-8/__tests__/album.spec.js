import { getAlbum, getAlbumTracks, getAlbums } from '../src/album';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

import { API_URL } from '../src/config';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch;
    let promise;
    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.resolves({ json: () => {} });
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });
        it('should have getAlgumaTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        it('should call fetch method', () => {
            getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            getAlbum('0TnOYISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOYISbd1XYRBk9myaseg`)

            getAlbum('0TnOKISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOKISbd1XYRBk9myaseg`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const album = getAlbum('0TnOKISbd1XYRBk9myaseg');
            return album.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });

    describe('getAlbums', () => {
        it('should call fetch method', () => {
            getAlbums();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            getAlbums(['0TnOYISbd1XYRBk9myaseg', '0TnOYISbd1XYRBk9myaseK']);
            expect(stubedFetch).to.have.been
            .calledWith(`${API_URL}/albums/?ids=0TnOYISbd1XYRBk9myaseg,0TnOYISbd1XYRBk9myaseK`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const albums = getAlbums(['0TnOYISbd1XYRBk9myaseg', '0TnOYISbd1XYRBk9myaseK']);
            return albums.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });

    describe('getAlbumsTracks', () => {
        it('should call fetch method', () => {
            getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            getAlbumTracks('0TnOYISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOYISbd1XYRBk9myaseg/tracks`)

            getAlbumTracks('0TnOKISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith(`${API_URL}/albums/0TnOKISbd1XYRBk9myaseg/tracks`)
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const tracks = getAlbumTracks('0TnOKISbd1XYRBk9myaseg');
            return tracks.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });
});