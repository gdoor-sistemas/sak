import { Str } from '../lib';

describe('Str helper', () => {
  it('should return the numeric characters of a string', () => {
    expect(Str.onlyNumbers('abc123')).toEqual('123');
  });

  it('should check if a string has only numbers', () => {
    expect(Str.hasOnlyNumbers('123')).toBeTrue();
    expect(Str.hasOnlyNumbers('123a')).toBeFalse();
  });

  it('should reverse a string', () => {
    expect(Str.reverse('123')).toEqual('321');
  });

  it('should insert a string into another', () => {
    expect(Str.insert('ad', 'bc', 1)).toEqual('abcd');
  });

  it('should insert a string into another and replace', () => {
    expect(Str.insert('adc', 'b', 1, true)).toEqual('abc');
  });

  it('should transform into camelCase', () => {
    expect(Str.camelCased('string * test  case_foo-bar')).toBe('stringTestCaseFooBar');
  });

  it('should transform into slug-case', () => {
    expect(Str.slugCased('+string Test  case ')).toBe('string-test-case');
  });

  it('should transform into Title Case', () => {
    expect(Str.titleCased('string test  case')).toBe('String Test  Case');
  });

  it('should remove diacritics marks', () => {
    expect(Str.removeDiacritics('ỆǍṔÉ áéíóúýčďěňřšťžůçàèìòùäëïöü')).toBe('EAPE aeiouycdenrstzucaeiouaeiou');
  });
});
