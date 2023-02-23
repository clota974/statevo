import describeRange, { range } from "../src/utils/describeRange";

describe('Create a range...', () => {
    const output = [
        { min: 0, max: 100, rangeSize: 100, stepSize: 1 },
        { min: 50, max: 100, rangeSize: 50, stepSize: 2 }
    ]
    test('From MinMax object', () => {
       expect(describeRange({ min: 0, max: 100 })).toEqual(output[0]);
       expect(describeRange({ min: 50, max: 100 })).toEqual(output[1]);
    });
    test('From array', () => {
        expect(describeRange([0, 100])).toEqual(output[0]);
        expect(describeRange([50, 100])).toEqual(output[1]);
    });
    test('From shortcut', () => {
        expect(range(0, 100)).toEqual(output[0]);
        expect(range(50, 100)).toEqual(output[1]);
    })
})
