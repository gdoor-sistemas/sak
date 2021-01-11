import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
/**
 * Facilita a implementação do padrão de design usando takeUntil, não sendo necessário criar o subject nem implementar a interface OnDestroy
 * Exemplo:
 * ```typescript
 * @Component({
 *   //...
 *   providers: [ReleaseOnDestroy],
 * })
 * export class Component {
 *   constructor(private _destroyed$: ReleaseOnDestroy) {}
 * }
 * ```
 */
export class ReleaseOnDestroy extends Subject<any> implements OnDestroy {
  /**
   * Dispara evento quando o passo de destruição do Angular for chamado
   */
  public ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
