import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BrlPipe } from './brl.pipe';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt', {});

@Component({template: `{{value | brl:precision}}`})
class TestHostComponent {
  public value: number;
  public precision = 2;
}

describe('BrlPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  const text: () => string = () => fixture.nativeElement.innerText.trim();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        BrlPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not break with invalid value', () => {
    component.value = 'undefined' as any;
    fixture.detectChanges();
    expect(text()).toBe('undefined');
  });

  it('should render piped value', () => {
    component.value = 123.456;
    fixture.detectChanges();
    expect(text()).toMatch(/R\$.?123,46/);
  });

  it('should render piped value with precision=3', () => {
    component.value = 123.456;
    component.precision = 3;
    fixture.detectChanges();
    expect(text()).toMatch(/R\$.?123,456/);
  });
});
