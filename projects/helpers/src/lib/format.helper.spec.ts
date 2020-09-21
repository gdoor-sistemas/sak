import { Format } from './format.helper';

describe('Format helper', () => {
  it('should pad string left', () => {
    expect(Format.padLeft('foo', '-', 5)).toEqual('--foo');
  });

  it('should pad string right', () => {
    expect(Format.padRight('foo', '-', 5)).toEqual('foo--');
  });

  it('should format cpf', () => {
    expect(Format.cpf('12345678901')).toEqual('123.456.789-01');
  });

  it('should format cnpj', () => {
    expect(Format.cnpj('12345678901234')).toEqual('12.345.678/9012-34');
  });

  it('should format cpf and cnpj according to the length', () => {
    expect(Format.cpfCnpj('01234567890')).toEqual('012.345.678-90');
    expect(Format.cpfCnpj('01234567890123')).toEqual('01.234.567/8901-23');
  });

  it('should format a cep code', () => {
    expect(Format.cep('12345678')).toEqual('12345-678');
  });

  it('should format a nf-e key', () => {
    expect(Format.nfeKey('0'.repeat(44))).toEqual('0000' + '.0000'.repeat(10));
  });

  it('should format a ncm string', () => {
    expect(Format.ncm('123')).toEqual('1230.00.00');
    expect(Format.ncm('12345')).toEqual('1234.50.00');
    expect(Format.ncm('12345678')).toEqual('1234.56.78');
  });

  it('should format a cest string', () => {
    expect(Format.cest('123')).toEqual('12.300.00');
    expect(Format.cest('12345')).toEqual('12.345.00');
    expect(Format.cest('12345678')).toEqual('12.345.67');
  });
});
