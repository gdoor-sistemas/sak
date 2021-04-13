/**
 * @dynamic
 */
export class FullscreenHelper {
  /**
   * Returns whether fullscreen mode is activated
   */
  public static isFullscreenActive(): boolean {
    return Boolean(document.fullscreenElement);
  }

  /**
   * Toggles the document's fullscreen status for the `hostElement`
   */
  public static async toggleFullscreen(hostElement: Element): Promise<boolean> {
    return this.isFullscreenActive() ? this.closeFullscreen() : this.openFullscreen(hostElement);
  }

  /**
   * Requests for the browser to FullScreen on the provided `element`
   */
  public static async openFullscreen(element: any = document): Promise<boolean> {
    if (this.isFullscreenActive()) {
      return false;
    }

    if (element.requestFullscreen) {
      return await element.requestFullscreen();
    }

    if (element.mozRequestFullScreen) { /* Firefox */
      return element.mozRequestFullScreen();
    }

    if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      return element.webkitRequestFullscreen();
    }

    if (element.msRequestFullscreen) { /* IE/Edge */
      return element.msRequestFullscreen();
    }

    return true;
  }

  /**
   * Requests for the browser to remove the FullScreen status
   */
  public static async closeFullscreen(el: any = document): Promise<boolean> {
    if (!this.isFullscreenActive()) {
      return true;
    }

    if (el.exitFullscreen) {
      return await el.exitFullscreen();
    }

    if (el.mozCancelFullScreen) { /* Firefox */
      return el.mozCancelFullScreen();
    }

    if (el.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      return el.webkitExitFullscreen();
    }

    if (el.msExitFullscreen) { /* IE/Edge */
      return el.msExitFullscreen();
    }
  }
}
