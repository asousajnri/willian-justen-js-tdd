describe('Main', () => {
    // roda uma vez, antes do bloco
    before(() => {
        console.log('before');
    });
    // roda uma vez, depois do bloco
    after(() => {
        console.log('after');
    });
    // roda toda vez, antes do bloco
    beforeEach(() => {
        console.log('beforeEach');
    });
    // roda toda vez, depois do bloco
    afterEach(() => {
        console.log('afterEach');
    });
    it('test 1', () => {
        console.log('test 1');
    });
    it('test 2', () => {
        console.log('test 2');
    });
});