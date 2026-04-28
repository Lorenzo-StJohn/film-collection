import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Breadcrumb } from "./breadcrumb/breadcrumb";

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, Breadcrumb],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
