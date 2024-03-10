import { calc } from './calculator';

it('should plus the numbers', () => {
    const result = calc("2 + 3");
    expect(result).toEqual("2 + 3 = 5");
});

it('should minus the numbers', () => {
    const result = calc("5 - 3");
    expect(result).toEqual("5 - 3 = 2");
});

it('should multipy the numbers', () => {
    const result = calc("5 * 3");
    expect(result).toEqual("5 * 3 = 15");
});

it('should divide the numbers', () => {
    const result = calc("15 / 3");
    expect(result).toEqual("15 / 3 = 5");
});

it('should return null', () => {
    const result = calc(5);
    expect(result).toEqual(null);
})