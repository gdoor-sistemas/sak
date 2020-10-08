import { Validate } from './validate';

describe('Validate helper', () => {
  it('should validate a cpf code', () => {
    expect(Validate.cpf('761.293.060-91')).toBeTrue();
    expect(Validate.cpf('00000000000')).toBe(false, '00000000000');
    expect(Validate.cpf('761.293.060-91s')).toBe(false, '761.293.060-91s');
    expect(Validate.cpf('761.293.060-61')).toBe(false, '761.293.060-61');
  });
});
