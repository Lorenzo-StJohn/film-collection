import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { FilmInterface } from '../model/film';

@Injectable({
  providedIn: 'root',
})
export class Film {
  private http = inject(HttpClient);
  private filmsSignal = signal<FilmInterface[]>([]);
  public readonly films = this.filmsSignal.asReadonly();


   loadMockFilms(): Promise<any[]> {
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
}
