import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Autofocus } from "../../../../shared/directives/autofocus";

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, Autofocus],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  private fb = inject(FormBuilder);
  public filterForm = this.fb.group({
    search: [''],
  });
}
