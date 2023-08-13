const { expect } = require('chai');
const calc = require('../src/calc.js');

describe('Calc', () => {
    describe('Smoke tests', () => {
        it('should exist the Calc lib', () => {
            expect(calc).to.exist;
        });
        it('should exist the method `SUM`', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });
        it('should exist the method `DIV`', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
        it('should exist the method `MULT`', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });
        it('should exist the method `SUB`', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });
    });
    describe('`SUM`', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(calc.sum(2,2)).to.be.equal(4);
        });
    });
    describe('`SUB`', () => {
        it('should return 0 when `sub(2,2)`', () => {
            expect(calc.sub(2,2)).to.be.equal(0);
        });
        it('should return -4 when `sub(6,10)`', () => {
            expect(calc.sub(6,10)).to.be.equal(-4);
        });
    });
    describe('`MULT`', () => {
        it('should return 4 when `mult(2,2)`', () => {
            expect(calc.mult(2, 2)).to.be.equal(4);
        });
    });
    describe('`DIV`', () => {
        it('should return 1 when `sum(2,2)`', () => {
            expect(calc.div(2,2)).to.be.equal(1);
        });
        it('should return `not possible division by zero!` when divide by zero', () => {
            expect(calc.div(4,0)).to.be.equal('not possible division by zero!');
        });
    });
});
