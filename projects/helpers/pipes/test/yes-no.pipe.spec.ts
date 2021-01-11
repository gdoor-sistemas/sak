import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Injectable } from '@angular/core';
import { YesNoPipe } from '../src/yes-no.pipe';
import { GdYesNotIntl } from '../src/yes-no-intl.service';

@Component({
  template: `{{value | yesNo}}`,
})
class TestHostComponent {
  public value: boolean;
}

describe('YesNoPipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  const text: () => string = () => fixture.nativeElement.innerText.trim();

  const initModule = async (providers = []) => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        YesNoPipe,
      ],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  };

  describe('With default intl', () => {
    beforeEach(() => initModule());

    it('should compile', () => {
      expect(component).toBeTruthy();
    });

    it('should render correct value', () => {
      fixture.detectChanges();
      expect(text()).toBe('Não');

      component.value = true;
      fixture.detectChanges();
      expect(text()).toBe('Sim');
    });
  });

  describe('With custom intl', () => {
    @Injectable()
    class CustomIntl extends GdYesNotIntl {
      public readonly yes: string = 'ja';
      public readonly no: string = 'nein';
    }

    beforeEach(() => initModule([
      {provide: GdYesNotIntl, useClass: CustomIntl},
    ]));

    it('should compile', () => {
      expect(component).toBeTruthy();
    });

    it('should render correct value', () => {
      fixture.detectChanges();
      expect(text()).toBe('nein');

      component.value = true;
      fixture.detectChanges();
      expect(text()).toBe('ja');
    });
  });
});
