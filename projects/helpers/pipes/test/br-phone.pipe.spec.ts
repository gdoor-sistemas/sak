import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { BrPhonePipe } from '../src/br-phone.pipe';
import { Format } from '@gdoor/helpers';

@Component({template: `<span [innerHTML]="value | brPhone:link"></span>`})
class TestHostComponent {
  public value: string;
  public link = false;
}

describe('PhonePipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        BrPhonePipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render piped value without link', () => {
    component.value = '(0xx49) 3441 - 3100';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.phone(component.value));
    expect(fixture.nativeElement.querySelector('a.link')).toBeFalsy();
  });

  it('should render piped value with link', () => {
    component.value = '(0xx49) 3441 - 3100';
    component.link = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a.link')).toBeTruthy();
  });
});
