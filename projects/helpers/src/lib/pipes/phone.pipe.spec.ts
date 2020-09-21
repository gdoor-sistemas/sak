import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { Format } from '../format.helper';

@Component({template: `{{value | phone}}`})
class TestHostComponent {
  value: string;
}

describe('PhonePipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        PhonePipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render piped value', () => {
    component.value = '(0xx49) 3441 - 3100)';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.phone(component.value));
  });
});
