import { CommonModule, NgIf, NgSwitchCase } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiDataList } from '@taiga-ui/core';
import { TuiInputComponent, TuiInputModule, TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FilterOperations, StringFilterOperation } from '../../services/filters/filterOperations';
import { FilterConverter } from '../../services/filters/filter-converter';
import _ from 'lodash';

@Component({
  selector: 'app-string-filter-editor',
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
    FormsModule,
    TuiButton,
  ],
  templateUrl: './string-filter-editor.component.html',
  styleUrl: './string-filter-editor.component.scss',
})
export class StringFilterEditorComponent implements OnInit, OnChanges {
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
    this.stringValue = this.filter.valueForComparison;
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

  @Input() filter!: StringFilterOperation;
  @Input() possibleColumns!: string[];

  converter: any = FilterConverter;
  operators: any = FilterOperations;
  possibleOperators: FilterOperations[] = [
    FilterOperations.Equal,
    FilterOperations.Contains,
    FilterOperations.NotEqual,
    FilterOperations.IsNotNull,
    FilterOperations.IsNull,
    FilterOperations.Like
  ];
  protected columnValue!: FormControl<string | null>;
  protected operatorValue!: FormControl<FilterOperations | null>;
  protected stringValue: string = '';
  protected showValue: boolean = false;

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

  onFilterColumnChanged($event: any) {
    this.filter.filterColumn = this.columnValue.value ?? '';
  }

  onValueChanged($event: string) {
    this.filter.valueForComparison = this.stringValue;
  }
}
