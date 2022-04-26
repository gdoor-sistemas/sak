import { DeviceHelper } from './device.helper';

/**
 * @dynamic
 */
export class WindowHelper {
  /**
   * Opens a blob in new window, if the browser allows
   */
  public static openInNewWindow(content: Blob, title: string, target: string = '_blank'): Window | undefined {
    if (this._msSavesBlob(content, title)) {
      return;
    }

    const url = window.URL.createObjectURL(content);
    const tab = window.open(url, target);
    window.URL.revokeObjectURL(url);
    return tab;
  }

  /**
   * Opens a blob in new window and call print event, if browser allows
   */
  public static printInNewWindow(content: Blob, title: string = null): void {
    this.openInNewWindow(content, title, '_blank')?.print();
  }

  /**
   * Downloads a blob file
   */
  public static downloadBlob(content: Blob, title: string): void {
    if (this._msSavesBlob(content, title)) { return; }

    const url = window.URL.createObjectURL(content);
    const a = document.createElement('a') as HTMLAnchorElement;
    a.className = 'download-anchor';
    document.body.appendChild(a);
    a.href = url;
    a.target = '_blank';
    a.download = title;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  /**
   * Saves a blob if is a MS browser, which doesn't allows opening blobs in new window
   */
  private static _msSavesBlob(blob: Blob, title: string): boolean {
    if (window?.navigator?.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, title);
      return true;
    }

    return false;
  }

  /**
   * Creates an iframe element and calls print API to its content.
   */
  public static printDocument(content: string): void {
    if (DeviceHelper.isMobile(window.navigator.userAgent)) {
      const newWindow = window.open();
      newWindow.document.documentElement.innerHTML = content;
      return newWindow.print();
    }

    const el = document.createElement('iframe');
    el.id = 'window-helper-print-document';
    el.srcdoc = content;
    document.body.append(el);
    el.contentWindow.onafterprint = () => el.remove();
    // este timeout é necessário para o firefox, pois caso contrário o frame é eliminado antes de renderizar
    setTimeout(() => el.contentWindow.print(), 100);
  }
}
