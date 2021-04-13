import { FullscreenHelper } from '../lib';

describe('Fullscreen helper', () => {
  /**
   * Run the expect open test with browser compatibility.
   */
  function expectOpenFullScreen(): void {
    const spyObj = jasmine.createSpyObj('element', ['requestFullscreen']);
    FullscreenHelper.openFullscreen(spyObj);
    expect(spyObj.requestFullscreen).toHaveBeenCalledTimes(1);

    const spyObjMoz = jasmine.createSpyObj('element', ['mozRequestFullScreen']);
    FullscreenHelper.openFullscreen(spyObjMoz);
    expect(spyObjMoz.mozRequestFullScreen).toHaveBeenCalledTimes(1);

    const spyObjWebkit = jasmine.createSpyObj('element', ['webkitRequestFullscreen']);
    FullscreenHelper.openFullscreen(spyObjWebkit);
    expect(spyObjWebkit.webkitRequestFullscreen).toHaveBeenCalledTimes(1);

    const spyObjMs = jasmine.createSpyObj('element', ['msRequestFullscreen']);
    FullscreenHelper.openFullscreen(spyObjMs);
    expect(spyObjMs.msRequestFullscreen).toHaveBeenCalledTimes(1);
  }

  /**
   * Run the expect Close test with browser compatibility.
   */
  function expectCloseFullScreen(): void {
    const spyObj = jasmine.createSpyObj('element', ['exitFullscreen']);
    FullscreenHelper.closeFullscreen(spyObj);
    expect(spyObj.exitFullscreen).toHaveBeenCalledTimes(1);

    const spyObjMoz = jasmine.createSpyObj('element', ['mozCancelFullScreen']);
    FullscreenHelper.closeFullscreen(spyObjMoz);
    expect(spyObjMoz.mozCancelFullScreen).toHaveBeenCalledTimes(1);

    const spyObjWebkit = jasmine.createSpyObj('element', ['webkitExitFullscreen']);
    FullscreenHelper.closeFullscreen(spyObjWebkit);
    expect(spyObjWebkit.webkitExitFullscreen).toHaveBeenCalledTimes(1);

    const spyObjMs = jasmine.createSpyObj('element', ['msExitFullscreen']);
    FullscreenHelper.closeFullscreen(spyObjMs);
    expect(spyObjMs.msExitFullscreen).toHaveBeenCalledTimes(1);
  }

  it('should toggle between fullscreen statuses', () => {
    const spyOpen = spyOn(FullscreenHelper, 'openFullscreen');
    const spyClose = spyOn(FullscreenHelper, 'closeFullscreen');

    const spyFullscreen = spyOn(FullscreenHelper, 'isFullscreenActive').and.returnValue(true);

    FullscreenHelper.toggleFullscreen(document.documentElement);
    expect(spyOpen).toHaveBeenCalledTimes(0);
    expect(spyClose).toHaveBeenCalledTimes(1);

    spyFullscreen.and.returnValue(false);

    FullscreenHelper.toggleFullscreen(document.documentElement);
    expect(spyOpen).toHaveBeenCalledTimes(1);
    expect(spyClose).toHaveBeenCalledTimes(1);
  });

  it('should return false if requested fullscreen and already on fullscreen', async () => {
    spyOn(FullscreenHelper, 'isFullscreenActive').and.returnValue(true);
    expect(await FullscreenHelper.openFullscreen()).toBeFalse();
  });

  it('should invoke fullscreen when not on fullscreen yet', async () => {
    spyOn(FullscreenHelper, 'isFullscreenActive').and.returnValue(false);
    expectOpenFullScreen();
  });

  it('should return true if requested exit fullscreen and not on fullscreen', async () => {
    spyOn(FullscreenHelper, 'isFullscreenActive').and.returnValue(false);
    expect(await FullscreenHelper.closeFullscreen()).toBeTrue();
  });

  it('should invoke exit fullscreen when on fullscreen', async () => {
    spyOn(FullscreenHelper, 'isFullscreenActive').and.returnValue(true);
    expectCloseFullScreen();
  });
});
