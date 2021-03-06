import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NcmPipe } from '../src/ncm.pipe';
import { Format } from '@gdoor/helpers';

@Component({template: `{{value | ncm}}`})
class TestHostComponent {
  public value: string | number;
}

describe('NcmPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        NcmPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not break with invalid value', () => {
    component.value = undefined;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe('');
  });

  it('should render piped value', () => {
    component.value = 12345678;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.ncm(String(component.value)));
  });
});
