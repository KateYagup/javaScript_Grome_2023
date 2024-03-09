import { getMinSquaredNumber } from './getMinSquaredNumber';

it('sholuld get min in square', () => {
    const result = getMinSquaredNumber([4, 2, 7, 100]);
    expect(result).toEqual(4);
})