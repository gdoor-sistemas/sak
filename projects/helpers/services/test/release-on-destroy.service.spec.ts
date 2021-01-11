import { ReleaseOnDestroy } from '../src/release-on-destroy.service';
import { of as observableOf, Subject, Subscription, timer } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  template: '',
  providers: [ReleaseOnDestroy],
})
class HostComponent {
  public subscription: Subscription;
  public value: any = null;
  private _sub = new Subject();

  constructor(private _destroyed$: ReleaseOnDestroy) {
    this.subscription = this._sub.pipe(
      takeUntil(_destroyed$),
    ).subscribe(value => this.value = value);
  }

  public call(value): void {
    this._sub.next(value);
  }
}

describe('ReleaseOnDestroy service', () => {
  describe('Standalone', () => {
    let service: ReleaseOnDestroy;

    beforeEach(() => {
      service = new ReleaseOnDestroy();
    });

    it('should complete observable', () => {
      let value = 'foo';

      timer(1000).pipe(
        takeUntil(service),
        finalize(() => value = 'bar'),
      ).subscribe();

      service.ngOnDestroy();

      expect(value).toBe('bar');
    });

    it('should forward value', () => {
      let value = 'foo';

      observableOf('bar').pipe(
        takeUntil(service),
      ).subscribe(data => value = data);

      expect(value).toBe('bar');
    });
  });

  describe('Provided by a component', () => {
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          HostComponent,
        ],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('should instantiate', () => {
      expect(component).toBeTruthy();
    });

    it('should unsubscribe to subject', () => {
      expect(component.subscription.closed).toBeFalse();
      fixture.destroy();
      expect(component.subscription.closed).toBeTrue();
    });

    it('should set value', () => {
      component.call(123);
      expect(component.value).toBe(123);

      fixture.destroy();
      expect(component.subscription.closed).toBeTrue();
    });
  });
});
