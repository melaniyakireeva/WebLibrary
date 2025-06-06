import { NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { tuiScrollbarOptionsProvider } from '@taiga-ui/core/components/scrollbar';
import { TuiTextfield } from '@taiga-ui/core/components/textfield';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import type { TuiCountryIsoCode, TuiLanguageName } from '@taiga-ui/i18n/types';
import { TuiLanguageSwitcherService } from '@taiga-ui/i18n/utils';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TuiBadgedContent } from '@taiga-ui/kit/components/badged-content';
import { TuiButtonSelect } from '@taiga-ui/kit/directives/button-select';
import _ from 'lodash';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TitleCasePipe,
    TuiBadge,
    TuiBadgedContent,
    TuiButton,
    TuiIcon,
    TuiButtonSelect,
    TuiDataList,
    TuiFlagPipe,
    TuiTextfield,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  providers: [tuiScrollbarOptionsProvider({ mode: 'hover' })],
})
export class LanguageSwitcherComponent {
  protected readonly switcher = inject(TuiLanguageSwitcherService);
  protected readonly language = new FormControl(
    capitalize(this.switcher.language)
  );

  protected open = false;

  public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
    ['chinese', 'CN'],
    ['english', 'GB'],
    ['russian', 'RU'],
  ]);

  public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

  public setLang(lang: TuiLanguageName): void {
    this.language.setValue(lang);
    this.switcher.setLanguage(lang);
    this.open = false;
  }
}

function capitalize(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}