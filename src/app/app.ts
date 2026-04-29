import { Component, inject, OnInit, signal } from '@angular/core';

import { Layout } from './core/layout/layout';
import { Film } from './features/films/service/film';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('film-collection');
  private filmService = inject(Film);

  public ngOnInit() {
    void this.filmService.loadMockFilms();
  }
}
