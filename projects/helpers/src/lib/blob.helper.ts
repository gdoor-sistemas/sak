/**
 * @author LucasRLReis <lucas.reis@outlook.com>
 * @dynamic
 */
export class BlobHelper {
  /**
   * Converts a base64 string to Blob
   *
   * @param base64content Content to be parsed as Blob
   * @param type Blob's MIME type
   */
  public static base64ToBlob(base64content: string, type: string): Blob {
    const byteCharacters = atob(base64content);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type});
  }
}
