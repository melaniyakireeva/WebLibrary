import { Component } from '@angular/core';
import { TuiButton, TuiDialogContext, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { Author } from '../../services/author/author-service.service';
import { TuiTooltip } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manufacturer-card',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './manufacturer-card.component.html',
  styleUrl: './manufacturer-card.component.scss',
})
export class ManufacturerCardComponent {
  public readonly context =
    injectContext<TuiDialogContext<void, { manufactureInfo: Author }>>();
}
