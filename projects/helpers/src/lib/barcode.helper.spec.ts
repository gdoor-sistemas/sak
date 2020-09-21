import { Barcode } from './barcode.helper';

describe('Barcode helper', () => {
  let svg: SVGElement;

  beforeEach(() => {
    document.getElementById('barcode-test')?.remove();

    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = 'barcode-test';
    document.body.appendChild(svg);
  });

  it('should render a barcode', () => {
    Barcode.render('123', svg);
    expect(svg.innerHTML).toBeTruthy();
  });
});
