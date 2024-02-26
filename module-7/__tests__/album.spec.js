// getAlbum
// getAlbumTracks

import { getAlbum, getAlbumTracks } from '../src/album';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch;
    let promise;
    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.resolves({ json: {} });
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
            expect(stubedFetch).to.have.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/albums')

            const album2 = getAlbum('0TnOKISbd1XYRBk9myaseg');
            expect(stubedFetch).to.have.calledWith('https://api.spotify.com/v1/artists/0TnOKISbd1XYRBk9myaseg/albums')
        });
        it('should return the correct data from Promise', () => {
            promise.resolves({ album: 'name' });
            const album = getAlbum('0TnOKISbd1XYRBk9myaseg');
            return album.then(data => {
                return expect(data).to.be.eql({ album: 'name' });
            })
        });
    });
});