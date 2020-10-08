import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Format } from '../format.helper';
import { CharPipe } from './char.pipe';

@Component({template: `{{value | char}}`})
class TestHostComponent {
  public value: number;
}

describe('CharPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CharPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not break with invalid value', () => {
    component.value = 'asdk' as any;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe('');
  });

  it('should render piped value', () => {
    component.value = 65;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe('A');
  });
});
