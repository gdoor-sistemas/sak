import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { CpfCnpjPipe } from './cpf-cnpj.pipe';
import { Format } from '../format.helper';

@Component({template: `{{value | cpfCnpj}}`})
class TestHostComponent {
  value: string;
}

describe('CpfCnpjPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        CpfCnpjPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render piped value', () => {
    component.value = '12345678901';
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText.trim()).toBe(Format.cpfCnpj(component.value));
  });
});
