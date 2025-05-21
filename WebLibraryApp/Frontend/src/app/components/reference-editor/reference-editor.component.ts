import { Component, Input } from '@angular/core';
import { ReferenceInfo } from '../../services/reference/reference.service';
import { TuiButton, TuiIcon } from '@taiga-ui/core';

@Component({
  selector: 'app-reference-editor',
  standalone: true,
  imports: [TuiIcon, TuiButton],
  templateUrl: './reference-editor.component.html',
  styleUrl: './reference-editor.component.scss',
})
export class ReferenceEditorComponent {
  @Input() referenceInfo!: ReferenceInfo;
}
