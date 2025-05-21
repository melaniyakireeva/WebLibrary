import { TUI_DARK_MODE, TuiRoot } from "@taiga-ui/core";
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { AsyncPipe } from '@angular/common';
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { NavigationPageComponent } from "./components/navigation-page/navigation-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TuiRoot,
    NavigationPageComponent,
    AuthPageComponent,
    RegisterPageComponent,
    CommonModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  darkMode = inject(TUI_DARK_MODE);
  title = 'project1947';

  constructor(){
  }
}
