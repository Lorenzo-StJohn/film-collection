import { Component, inject, input, OnInit } from '@angular/core';
import { Film as filmService } from '../../service/film';
import { FilmInterface } from '../../models/film';
import { Router, RouterLink } from '@angular/router';
import { DurationPipe } from '../../../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-film',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class Film implements OnInit {
  public readonly filmId = input<string>();
  private filmService = inject(filmService);
  private router = inject(Router);
  public film?: FilmInterface | null;

  ngOnInit(): void {
    this.film = this.filmService.getFilmByUrl(this.filmId()!);
    if (!this.film) {
      this.router.navigate(['/home']);
    }
  }
}
