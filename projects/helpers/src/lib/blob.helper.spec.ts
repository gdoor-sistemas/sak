import { BlobHelper } from './blob.helper';

describe('Blob helper', () => {
  it('should convert a string into a blob', () => {
    const blob = BlobHelper.base64ToBlob(btoa('test'), 'text/plain');
    expect(blob).toBeInstanceOf(Blob);
    expect(blob.size).toBe(4);
    expect(blob.type).toBe('text/plain');
  });
});
