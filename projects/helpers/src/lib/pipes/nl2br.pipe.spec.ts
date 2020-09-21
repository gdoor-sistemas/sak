import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Nl2BrPipe } from './nl2br.pipe';

@Component({template: `<span [innerHTML]="value | nl2br"></span>`})
class TestHostComponent {
  value: string;
}

describe('Nl2BrPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        Nl2BrPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render piped value', () => {
    component.value = 'foo\nbar';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain('foo<br');
  });
});
