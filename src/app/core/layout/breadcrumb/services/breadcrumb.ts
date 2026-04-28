import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  public readonly breadcrumbs = signal<string>("");

  constructor() {
    const url = this.router.routerState.snapshot.url;
    this.breadcrumbs.set(url);
    const subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       const url = this.router.routerState.snapshot.url;
        this.breadcrumbs.set(url);
      }
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
