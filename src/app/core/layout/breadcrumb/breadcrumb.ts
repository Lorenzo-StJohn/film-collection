import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from './services/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  private breadcrumbService = inject(BreadcrumbService);
  public breadcrumbString = this.breadcrumbService.breadcrumbs;
  private breadcrumbArray = computed(() => this.breadcrumbString().split('/'));
  public breadcrumbs = computed(() => {
    const initialArray:[string, string][] = [];
    return this.breadcrumbArray().reduce((acc, value, index) => {
      if (index === 1) {
        switch (value) {
          case 'home':
            acc.push(['/home', 'Home']);
            break;
          case 'about':
            acc.push(['/about', 'About']);
            break;
        }
      }
      return acc;
    }, initialArray)
  })
}
