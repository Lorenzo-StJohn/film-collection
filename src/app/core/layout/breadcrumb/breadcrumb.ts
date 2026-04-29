import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from './services/breadcrumb';
import { Film } from '../../../features/films/service/film';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  private breadcrumbService = inject(BreadcrumbService);
  private filmService = inject(Film);
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
      if (index === 2) {
        const id = value;
        const film = this.filmService.getFilmByUrl(id);
        const title = film ? film.title : 'Not found';
        acc.push([`/home/${value}`, title]);
      }
      return acc;
    }, initialArray)
  })
}
