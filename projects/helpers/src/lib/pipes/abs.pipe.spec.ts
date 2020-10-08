import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AbsPipe } from './abs.pipe';

@Component({template: `{{value | abs}}`})
class TestHostComponent {
  public value: any;
}

describe('AbsPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        AbsPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should not break with invalid value', () => {
    component.value = 'some value';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe('0');
  });

  it('should render piped value', () => {
    component.value = -5.6;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe('5.6');
  });
});
