import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IFilter } from '../../services/filters/filterOperations';
import _ from 'lodash';
import { FilterConverter } from '../../services/filters/filter-converter';
import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataList } from '@taiga-ui/core';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { StringFilterEditorComponent } from '../string-filter-editor/string-filter-editor.component';
import { NumberFilterEditorComponent } from '../number-filter-editor/number-filter-editor.component';

@Component({
  selector: 'app-filter-editor',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgIf,
    CommonModule,
    FormsModule,
    TuiDataList,
    NumberFilterEditorComponent,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    StringFilterEditorComponent,
  ],
  templateUrl: './filter-editor.component.html',
  styleUrl: './filter-editor.component.scss',
})
export class FilterEditorComponent implements OnChanges {
  @Input() filter?: any;
  @Input() possibleColumns!: string[];

  protected filterStrRepresentation!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (!_.isNil(changes['filter'])) {
      const filter = changes['filter'];
      const newVal = filter.currentValue;
      this.filterStrRepresentation = FilterConverter.convertToString(newVal);
    }
  }
}
