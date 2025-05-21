import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TUI_DARK_MODE } from '@taiga-ui/core';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent implements OnInit {
  public initVal: boolean = false;

  protected readonly darkMode = inject(TUI_DARK_MODE);

  ngOnInit(): void {
    this.initVal = !this.darkMode();
  }

  onModelChanged($event: any) {
    this.darkMode.set(!$event);
  }
}
