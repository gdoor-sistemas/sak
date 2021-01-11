import { Validate } from '../lib';

describe('Validate helper', () => {
  it('should validate a cpf code', () => {
    expect(Validate.cpf('761.293.060-91')).toBeTrue();
    expect(Validate.cpf('00000000000')).toBe(false, '00000000000');
    expect(Validate.cpf('761.293.060-91s')).toBe(false, '761.293.060-91s');
    expect(Validate.cpf('761.293.060-61')).toBe(false, '761.293.060-61');
  });

  it('should validate a cnpj code', () => {
    expect(Validate.cnpj('09.358.661/0001-68')).toBeTrue();
    expect(Validate.cnpj('00000000000000')).toBe(false, '00000000000000');
    expect(Validate.cnpj('761.293.060-91')).toBe(false, 'cpf');
    expect(Validate.cnpj('09.358.661/0001-66')).toBe(false, 'invalid (09.358.661/0001-66)');
  });
});
