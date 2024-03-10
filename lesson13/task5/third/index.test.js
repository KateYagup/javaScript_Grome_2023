import { countOccurrences } from './index';

it('should return 3', () => {
    const result = countOccurrences('Ola-la-la Ola-la-la Ola', 'Ola');
    expect(result).toEqual(3);
});

it('should return 7', () => {
    const result = countOccurrences('Ola-la-la Ola-la-la Ola', 'la');
    expect(result).toEqual(7);
});

it('should return null', () => {
    const result = countOccurrences('Ola-la-la Ola-la-la Ola', 's');
    expect(result).toEqual(0);
});