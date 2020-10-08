import { Number } from './number.helper';

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
});
