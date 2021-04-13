/**
 * @dynamic
 */
export class DownloadHelper {
  /**
   * Creates a dummy element and triggers the file download.
   */
  public static triggerDownload(res: any, fileName: string, extension: string = 'zip', mimeType: string = 'application/zip'): void {
    const blob = new Blob([res], {type: mimeType});
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = `${fileName}.${extension}`;
    anchor.href = url;
    anchor.click();
    anchor.remove();
  }
}
