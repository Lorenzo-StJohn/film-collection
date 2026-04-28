import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Autofocus } from "../../../../shared/directives/autofocus";
import { Film } from '../../service/film';
import { FilmCard } from "../../components/film-card/film-card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, Autofocus, FilmCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  private fb = inject(FormBuilder);
  private filmService = inject(Film)
  public films = this.filmService.films;
  public filterForm = this.fb.group({
    search: [''],
  });
}
