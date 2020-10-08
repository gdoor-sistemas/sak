import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NcmPipe } from './ncm.pipe';
import { Format } from '../format.helper';

@Component({template: `{{value | ncm}}`})
class TestHostComponent {
  public value: string;
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
    component.value = '12345678';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.ncm(component.value));
  });
});
