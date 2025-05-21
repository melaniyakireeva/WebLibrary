import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TuiReorder } from '@taiga-ui/addon-table';
import _ from 'lodash';

@Component({
  selector: 'app-table-column-editor',
  standalone: true,
  imports: [TuiReorder],
  templateUrl: './table-column-editor.component.html',
  styleUrl: './table-column-editor.component.scss',
})
export class TableColumnEditorComponent implements OnChanges {
  @Input() availableColumns: string[] = [];
  @Output() onShownColumns = new EventEmitter<string[]>();

  columnsValue: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['availableColumns']){
      this.columnsValue = _.clone(changes['availableColumns'].currentValue);
    }
  }

  onColumnChanged(newColumns: string[]) {
    this.onShownColumns.emit(newColumns);
  }
}
