import {BlobHelper, WindowHelper} from '../lib';

fdescribe('Window helper', () => {
  let blob: Blob;

  beforeEach(() => {
    blob = BlobHelper.base64ToBlob(btoa('content'), 'text/plain');
  });

  it('should download blob file and remove anchor if created', () => {
    // create spy object with a click() method
    const spyObj = jasmine.createSpyObj('a', ['click', 'remove']);
    // spy on document.createElement() and return the spy object
    spyOn(document, 'createElement').and.returnValue(spyObj);
    spyOn(document.body, 'appendChild');

    // IE/EDGE doesn't allow opening local blobs
    if (window?.navigator?.msSaveOrOpenBlob) {
      const msDownloadSpy = spyOn(window?.navigator, 'msSaveOrOpenBlob');
      WindowHelper.downloadBlob(blob, 'foo');
      return expect(msDownloadSpy).toHaveBeenCalledTimes(1);
    }

    WindowHelper.downloadBlob(blob, 'foo');

    expect(document.createElement).toHaveBeenCalledTimes(1);
    expect(document.createElement).toHaveBeenCalledWith('a');

    expect(spyObj.href).toBeTruthy();
    expect(spyObj.target).toBe('_blank');
    expect(spyObj.download).toBe('foo');
    expect(spyObj.click).toHaveBeenCalledTimes(1);
    expect(spyObj.click).toHaveBeenCalledWith();
    expect(spyObj.remove).toHaveBeenCalledTimes(1);
  });

  it('should open a new window, if browser allows', () => {
    // IE/EDGE doesn't allow opening local blobs
    if (window?.navigator?.msSaveOrOpenBlob) {
      const msDownloadSpy = spyOn(window?.navigator, 'msSaveOrOpenBlob');
      WindowHelper.openInNewWindow(blob, 'foo');
      return expect(msDownloadSpy).toHaveBeenCalledTimes(1);
    }

    const createSpy = spyOn(window.URL, 'createObjectURL').and.callFake(() => '//fake/url');
    const openSpy = spyOn(window, 'open').and.returnValue(window);
    const revokeSpy = spyOn(window.URL, 'revokeObjectURL');

    const newWindow = WindowHelper.openInNewWindow(blob, 'foo');

    expect(createSpy).toHaveBeenCalledWith(blob);
    expect(openSpy).toHaveBeenCalledWith(createSpy.calls.mostRecent().returnValue, '_blank');
    expect(revokeSpy).toHaveBeenCalledWith(createSpy.calls.mostRecent().returnValue);
    expect(newWindow).toBe(window);
  });

  it('should a new window and print, if browser allows', () => {
    // IE/EDGE doesn't allow opening local blobs
    if (window?.navigator?.msSaveOrOpenBlob) {
      const msDownloadSpy = spyOn(window?.navigator, 'msSaveOrOpenBlob');
      WindowHelper.printInNewWindow(blob, 'foo');
      return expect(msDownloadSpy).toHaveBeenCalledTimes(1);
    }

    spyOn(window, 'open').and.returnValue(window);
    const printSpy = spyOn(window, 'print');

    WindowHelper.printInNewWindow(blob, 'foo');

    expect(printSpy).toHaveBeenCalledTimes(1);
  });

  it('should print a content', () => {
    const content = 'some content';
    const windowMock = jasmine.createSpyObj('Window', ['print']);
    windowMock.print.and.callFake(() => windowMock.onafterprint());
    const iFrameMock = {
      srcdoc: null,
      contentWindow: windowMock,
      remove: jasmine.createSpy('remove'),
    };
    spyOn(document, 'createElement').and.returnValue(iFrameMock as any);

    WindowHelper.printDocument(content);

    expect(iFrameMock.srcdoc).toBe(content);
    expect(iFrameMock.contentWindow.print).toHaveBeenCalledTimes(1);
    expect(iFrameMock.remove).toHaveBeenCalledTimes(1);
  });
});
