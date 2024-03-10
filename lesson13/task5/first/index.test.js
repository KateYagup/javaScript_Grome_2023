import { splitText } from './index';

it('should return Abcd\n efg\nH', () => {
    const result = splitText('abcd efgh', 4);
    expect(result).toEqual('Abcd\n efg\nH');
});

it('should return Ababababab\nAbabababab\nAb', () => {
    const result = splitText('abababababAbababababab');
    expect(result).toEqual('Ababababab\nAbabababab\nAb');
});

it('should return null', () => {
    const result = splitText(125, 4);
    expect(result).toEqual(null);
});