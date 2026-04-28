import { Component, computed, input, output } from '@angular/core';
import { FilmInterface } from '../../model/film';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-film-card',
  imports: [FormsModule, NgClass],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  public film = input.required<FilmInterface>();
  public favToggle = output<boolean>();

  public onClick() {
    this.favToggle.emit(!this.film().isFavorite);
  }
}
