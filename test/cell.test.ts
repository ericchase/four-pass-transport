import {expect} from 'chai';
import 'mocha';
import {Cell} from '../src/cell';

describe('Cell', () => {
    it('should contain a number between 0 and 99', () => {
        let cell = new Cell(1);

        expect(cell).not.throws;
    });
});