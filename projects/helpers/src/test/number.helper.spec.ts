import { Number } from '../lib';

describe('Number helper', () => {
  it('should round up a number', () => {
    expect(Number.rMoney(75.7474)).toBe(75.75);
  });

  it('should round down a number', () => {
    expect(Number.rMoney(75.7449)).toBe(75.74);
  });

  it('should round with precision=3', () => {
    expect(Number.rMoney(1.2358, 3)).toBe(1.236);
  });

  it('should check if a number is between other 2', () => {
    expect(Number.isBetween(1, 0, 2)).toBe(true, '1, 0, 2');
    expect(Number.isBetween(0, 0, 2)).toBe(true, '0, 0, 2');
    expect(Number.isBetween(2, 0, 2)).toBe(true, '2, 0, 2');
    expect(Number.isBetween(-1, 0, 2)).toBe(false, '-1, 0, 2');
    expect(Number.isBetween(3, 0, 2)).toBe(false, '3, 0, 2');
  });

  it('should check if a number is not between other 2', () => {
    expect(Number.isNotBetween(1, 0, 2)).toBe(false, '1, 0, 2');
    expect(Number.isNotBetween(0, 0, 2)).toBe(false, '0, 0, 2');
    expect(Number.isNotBetween(2, 0, 2)).toBe(false, '2, 0, 2');
    expect(Number.isNotBetween(-1, 0, 2)).toBe(true, '-1, 0, 2');
    expect(Number.isNotBetween(3, 0, 2)).toBe(true, '3, 0, 2');
  });
});
