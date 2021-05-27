/**
 * @dynamic
 */
export class DeviceHelper {

  /**
   * Test the user agent against common mobile devices returning true if it matches.
   */
  public static isMobile(userAgent: string): boolean {
    const MOBILES = {
      IPHONE: /\biPhone\b/,
      IPOD: /\biPod\b/,
      ANDROID: /\bAndroid\b/,
      WINDOWS_PHONE: /\bWindows-Phone\b/,
    };

    const match = Object.keys(MOBILES).find(mobile => {
      return userAgent.match(MOBILES[mobile]);
    });
    return !!match;
  }

  /**
   * Test the user agent against common mobile devices returning true if it NOT matches.
   */
  public static isDesktop(userAgent: string): boolean {
    return !this.isMobile(userAgent);
  }
}
