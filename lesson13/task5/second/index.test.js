import { splitString } from './index';

it("should return ['abcd', ' efg', 'h...']", () => {
    const result = splitString('abcd efgh', 4);
    expect(result).toEqual(['abcd', ' efg', 'h...']);
});

it("should return ['ababababab', 'ababababab', 'ab..']", () => {
    const result = splitString('ababababababababababab');
    expect(result).toEqual(['ababababab', 'ababababab', 'ab........']);
});

it("shuold return null", () => {
    const result = splitString(255);
    expect(result).toEqual(null);
})