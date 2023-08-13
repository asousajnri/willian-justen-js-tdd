describe('Main', () => {
    describe('Method A', () => {
        context('Case 1', () => {
            it.skip('should happen blabla', () => {
                // espera que aconteça
                // Entra de dados / método sum(1, 2)
                // Espera retornar (4) => true | false => broken test
            })
        });
        context.only('Case 2', () => {
            it('should happen blabla', () => {
                throw new Error('just an error');
            })
            it('should happen blabla', () => {
                throw new Error('just an error');
            })
        });
    });
    describe('Method A', () => {

    });
});