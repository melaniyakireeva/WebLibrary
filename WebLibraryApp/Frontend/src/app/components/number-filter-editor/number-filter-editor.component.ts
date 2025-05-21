import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FilterOperations,
  NumberFilterOperation,
} from '../../services/filters/filterOperations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterConverter } from '../../services/filters/filter-converter';
import { CommonModule, NgIf, NgSwitchCase } from '@angular/common';
import { TuiButton, TuiDataList, TuiTextfield } from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiInputNumberModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import _ from 'lodash';

@Component({
  selector: 'app-number-filter-editor',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgIf,
    CommonModule,
    TuiDataList,
    TuiInputModule,
    TuiSelectModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiTextfield,
    TuiInputNumberModule,
    FormsModule,
    TuiButton,
  ],
  templateUrl: './number-filter-editor.component.html',
  styleUrl: './number-filter-editor.component.scss',
})
export class NumberFilterEditorComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.initFilter();
    }
  }

  ngOnInit(): void {
    this.initFilter();
  }

  initFilter() {
    this.columnValue = new FormControl<string>(this.filter.filterColumn);
    this.operatorValue = new FormControl<FilterOperations>(
      this.filter.operation
    );
    this.numberValue = this.filter.valueForComparison;
    if (
      _.isNil(this.filter.operation) ||
      this.filter.operation == FilterOperations.IsNotNull ||
      this.filter.operation == FilterOperations.IsNull
    ) {
      this.showValue = false;
    } else {
      this.showValue = true;
    }
  }

  @Input() filter!: NumberFilterOperation;
  @Input() possibleColumns!: string[];

  converter: any = FilterConverter;
  operators: any = FilterOperations;
  possibleOperators: FilterOperations[] = [
    FilterOperations.Equal,
    FilterOperations.NotEqual,
    FilterOperations.Lower,
    FilterOperations.LowerOrEqual,
    FilterOperations.Greater,
    FilterOperations.GreaterOrEqual,
    FilterOperations.IsNotNull,
    FilterOperations.IsNull,
  ];
  protected columnValue!: FormControl<string | null>;
  protected operatorValue!: FormControl<FilterOperations | null>;
  protected numberValue: number = 0;
  protected showValue: boolean = false;

  onFilterColumnChanged($event: any) {
    this.filter.filterColumn = this.columnValue.value ?? '';
  }

  onOperatorChanged($event: FilterOperations) {
    if (
      $event == FilterOperations.IsNotNull ||
      $event == FilterOperations.IsNull
    ) {
      this.showValue = false;
    } else {
      this.showValue = true;
    }
    this.filter.operation = this.operatorValue.value ?? FilterOperations.Equal;
  }

  onValueChanged($event: number) {
    this.filter.valueForComparison = $event;
  }
}
