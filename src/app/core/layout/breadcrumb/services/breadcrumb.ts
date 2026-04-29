import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private breadcrumbsSignal = signal<string>('');
  public readonly breadcrumbs = this.breadcrumbsSignal.asReadonly();

  constructor() {
    const url = this.router.routerState.snapshot.url;
    this.breadcrumbsSignal.set(url);
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.routerState.snapshot.url;
        this.breadcrumbsSignal.set(url);
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
