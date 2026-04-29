import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { FilmInterface } from '../model/film';

@Injectable({
  providedIn: 'root',
})
export class Film {
  private http = inject(HttpClient);
  private filmsSignal = signal<FilmInterface[]>([]);
  public readonly films = this.filmsSignal.asReadonly();
  public filmsFavorite = computed(() => {
    return this.films().filter(film => film.isFavorite);
  })

  public loadMockFilms(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get<FilmInterface[]>('films.json').subscribe({
        next: (data) => {
          this.filmsSignal.set(data);
          resolve(data);
        },
        error: (err) => reject(err),
      });
    });
   }

  public favToggle(id: number, isFavorite: boolean) {
    this.filmsSignal.update(films =>
      films.map(film =>
        film.id === id
          ? { ...film, isFavorite }
          : film
      )
    );
  }

  public getFilmByUrl(url: string) {
    const id = parseInt(url);
    if (id.toString() !== url) {
      return null;
    }
    return this.filmsSignal().find(film => film.id === id);
  }
}
