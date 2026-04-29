import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { FilmInterface } from '../../models/film';

@Component({
  selector: 'app-film-card',
  imports: [FormsModule, NgClass],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  public film = input.required<FilmInterface>();
  public favToggle = output<boolean>();
  public posterLoaded = signal(false);

  public onClick() {
    this.favToggle.emit(!this.film().isFavorite);
  }
}
