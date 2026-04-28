import { Component, input } from '@angular/core';
import { FilmInterface } from '../../model/film';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<FilmInterface>();
}
