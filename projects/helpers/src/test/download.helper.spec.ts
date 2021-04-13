import { DownloadHelper } from '../lib';

describe('Download helper', () => {
  it('should invoke a download', () => {
    const spyObj = jasmine.createSpyObj('a', ['click', 'remove']);
    spyOn(document, 'createElement').and.returnValue(spyObj);

    DownloadHelper.triggerDownload('testing purposes only', 'test', 'txt', 'text/plain');

    expect(document.createElement).toHaveBeenCalledTimes(1);
    expect(document.createElement).toHaveBeenCalledWith('a');

    expect(spyObj.href).toBeTruthy();
    expect(spyObj.download).toBe('test.txt');
    expect(spyObj.click).toHaveBeenCalledTimes(1);
    expect(spyObj.click).toHaveBeenCalledWith();
    expect(spyObj.remove).toHaveBeenCalledTimes(1);
    expect(spyObj.remove).toHaveBeenCalledWith();
  });
});
