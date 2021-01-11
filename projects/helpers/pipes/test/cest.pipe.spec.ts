import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CestPipe } from '../src/cest.pipe';
import { Format } from '@gdoor/helpers';

@Component({template: `{{value | cest}}`})
class TestHostComponent {
  public value: string;
}

describe('CestPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CestPipe,
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
    component.value = '1234567';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.cest(component.value));
  });
});
