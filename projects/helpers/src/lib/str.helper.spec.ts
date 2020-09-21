import { Str } from './str.helper';

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
});
