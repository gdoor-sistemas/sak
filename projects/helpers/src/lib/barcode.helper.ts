import * as JsBarcode from 'jsbarcode';

export type BarcodeFormat =
  'CODE39' |
  'CODE128' |
  'CODE128A' |
  'CODE128B' |
  'CODE128C' |
  'EAN13' |
  'EAN8' |
  'EAN5' |
  'EAN2' |
  'UPC' |
  'ITF14' |
  'ITF' |
  'MSI' |
  'MSI10' |
  'MSI11' |
  'MSI1010' |
  'MSI1110' |
  'PHARMACODE' |
  'CODABAR';

/**
 * @author LucasRLReis <lucas.reis@outlook.com>
 * @dynamic
 */
export class Barcode {
  /**
   * Renders a barcode into an SVGElement
   *
   * @param barcode Barcode content to be rendered
   * @param element HTML element who will contains the rendered barcode
   * @param format Code format
   */
  public static render(barcode: string, element: SVGElement, format: BarcodeFormat = null): void {
    if (!(element && barcode)) {
      return;
    }

    if (!format) {
      switch (barcode.length) {
        case 8:
          format = 'EAN8';
          break;

        case 13:
          format = 'EAN13';
          break;

        case 14:
          format = 'ITF14';
          break;

        default:
          format = 'UPC';
      }
    }

    try {
      JsBarcode(element, barcode, {
        format,
        width: 2,
        height: 60,
      });
    } catch (e) {
      console.warn(e);
    }

    // se o elemento estiver vazio, é porque o código informado não está dentro dos padrões do formato
    // então, renderiza novamente no formato genérico
    if (!element.innerHTML) {
      JsBarcode(element, barcode, {
        width: 2,
        height: 60,
      });
    }
  }
}
