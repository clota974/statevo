import { range } from "../src/utils/describeRange";
import normalize from "../src/utils/normalize.util";

describe('Normalization', () => {
    it('should normalize from a MinMax object', () => {
        const definedRange = range(0, 100);
        const input = [0, 10, 25, 50, 100];
        const output = [0, 0.1, 0.25, 0.5, 1];
        expect(input.map((value) => normalize(definedRange, value))).toEqual(output);
    });
})