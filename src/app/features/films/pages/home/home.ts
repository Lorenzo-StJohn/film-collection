import { Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { Autofocus } from "../../../../shared/directives/autofocus";
import { Film } from '../../service/film';
import { FilmCard } from "../../components/film-card/film-card";

@Component({
  selector: 'app-home',
  imports: [FormsModule, Autofocus, FilmCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  private filmService = inject(Film)
  public filmsUnfiltered = this.filmService.films;
  public filmsFavorite = this.filmService.filmsFavorite;

  public filter = signal('');
  public films = computed(() => {
    return this.filmsUnfiltered().filter(film => film.title.toLowerCase().includes(this.filter().toLowerCase()));
  });

  public onFavToggle(id: number, value: boolean) {
    this.filmService.favToggle(id, value);
  }
}
