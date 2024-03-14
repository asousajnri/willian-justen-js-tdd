import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';

chai.use(sinonChai);
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
    // TODO: to remove `only` after commit
    it('should create an instance of SpotifyWrapper', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify).to.be.an.instanceof(SpotifyWrapper);
    });
    it('should receive apiURL as an option', () => {
        let spotify = new SpotifyWrapper({ apiURL: 'blabla' });
        expect(spotify.apiURL).to.be.equal('blabla');
    });
    it('should use the default apiURL if not provided', () => {
        let spotify = new SpotifyWrapper({});
        expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
    });
    it('should receive token as an option', () => {
        let spotify = new SpotifyWrapper({ token: 'foo' });
        expect(spotify.token).to.be.equal('foo');
    });

    describe('request method', () => {
        let stubedFetch;
        let promise;
        beforeEach(() => {
            stubedFetch = sinon.stub(global, 'fetch');
            promise = stubedFetch.resolves({ json: () => {} });
        });
        afterEach(() => {
            stubedFetch.restore();
        });

        it('should have a request method', () => {
            let spotify = new SpotifyWrapper({});
            expect(spotify.request).to.exist;
        });
        it('should call fetch when request', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo',
            });
            spotify.request('url');
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with right url passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo',
            });
            spotify.request('url');
            expect(stubedFetch).to.have.been.calledWith('url');
        });
        it('should call fetch with right headers passed', () => {
            let spotify = new SpotifyWrapper({
                token: 'foo',
            });
            const headers = {
                headers: {
                    'Authorization': `Bearer foo`
                }
            }
            spotify.request('url');
            expect(stubedFetch).to.have.been.calledWith('url', headers);
        });
    });
});
