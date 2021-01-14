import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PercentValuePipe } from '../src/percent-value.pipe';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt', {});

@Component({template: `{{value | percentValue:param}}`})
class TestHostComponent {
  public value: number;
  public param: any = 2;
}

fdescribe('PercentValuePipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  const text: () => string = () => fixture.nativeElement.innerText.trim();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        PercentValuePipe,
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
    expect(text()).toBe('123,46%');

    component.value = 35;
    fixture.detectChanges();
    expect(text()).toBe('35,00%');
  });

  it('should render piped value with precision=3', () => {
    component.value = 123.456;
    component.param = 3;
    fixture.detectChanges();
    expect(text()).toBe('123,456%');
  });

  it('should render piped value with digits info', () => {
    component.value = 3;
    component.param = '2.1-2';
    fixture.detectChanges();
    expect(text()).toBe('03,0%');

    component.value = 3.456;
    fixture.detectChanges();
    expect(text()).toBe('03,46%');
  });
});
