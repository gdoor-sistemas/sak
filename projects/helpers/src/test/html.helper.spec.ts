import { HtmlHelper } from '../lib';

describe('Html helper', () => {
  it('should replace the non-ASCII Printable chars for their HTML Entiies equivalents', () => {
    expect(HtmlHelper.encodeHTMLEntities('GDOOR ® < > " \' & © ∆')).toBe('GDOOR &reg; &lt; &gt; &quot; &apos; &amp; &copy; &#8710;');
  });

  it('should replace the HTML Entities chars for their non-ASCII Printable equivalents', () => {
    expect(HtmlHelper.decodeHTMLEntities('GDOOR &reg; &lt; &gt; &quot; &apos; &amp; &copy; &#8710;')).toBe('GDOOR ® < > " \' & © ∆');
  });
});
