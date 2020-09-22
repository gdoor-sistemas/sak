import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Injectable } from '@angular/core';
import { ActiveInactivePipe } from './active-inactive.pipe';
import { GdActiveInactiveIntl } from './active-inactive-intl.service';

@Component({
  template: `<span id="active">{{active | activeInactive:genre:lowerCase}}</span>
  <span id="inactive">{{inactive | activeInactive:genre:lowerCase}}</span>`,
})
class TestHostComponent {
  public readonly active = true;
  public readonly inactive = false;
  public genre: any = 'm';
  public lowerCase = false;
}

class Page {
  constructor(private _fixture: ComponentFixture<TestHostComponent>) {}

  public activeEl(): HTMLSpanElement {
    return this._fixture.nativeElement.querySelector('#active');
  }

  public inactiveEl(): HTMLSpanElement {
    return this._fixture.nativeElement.querySelector('#inactive');
  }
}

describe('ActiveInactivePipe', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let page: Page;

  const initModule = async (providers = []) => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ActiveInactivePipe,
      ],
      providers,
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    page = new Page(fixture);
    component = fixture.componentInstance;
  };

  describe('With default intl', () => {
    beforeEach(() => initModule());

    it('should compile', () => {
      expect(component).toBeTruthy();
    });

    it('should render correct value', () => {
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('Ativo');
      expect(page.inactiveEl().innerText).toBe('Inativo');

      component.genre = 'f';
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('Ativa');
      expect(page.inactiveEl().innerText).toBe('Inativa');

      component.lowerCase = true;
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('ativa');
      expect(page.inactiveEl().innerText).toBe('inativa');
    });
  });

  describe('With custom intl', () => {
    @Injectable()
    class CustomIntl extends GdActiveInactiveIntl {
      public readonly activeMaleLabel = 'activeMaleLabel';
      public readonly activeFemaleLabel = 'activeFemaleLabel';
      public readonly inactiveMaleLabel = 'inactiveMaleLabel';
      public readonly inactiveFemaleLabel = 'inactiveFemaleLabel';
    }

    beforeEach(() => initModule([
      {provide: GdActiveInactiveIntl, useClass: CustomIntl},
    ]));

    it('should compile', () => {
      expect(component).toBeTruthy();
    });

    it('should render correct value', () => {
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('activeMaleLabel');
      expect(page.inactiveEl().innerText).toBe('inactiveMaleLabel');

      component.genre = 'f';
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('activeFemaleLabel');
      expect(page.inactiveEl().innerText).toBe('inactiveFemaleLabel');

      component.lowerCase = true;
      fixture.detectChanges();
      expect(page.activeEl().innerText).toBe('activefemalelabel');
      expect(page.inactiveEl().innerText).toBe('inactivefemalelabel');
    });
  });
});
