import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiDialogContext, TuiIcon } from '@taiga-ui/core';
import type { TuiFileLike } from '@taiga-ui/kit';
import { TuiFiles } from '@taiga-ui/kit';
import type { Observable } from 'rxjs';
import { finalize, map, of, Subject, switchMap, timer } from 'rxjs';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TUI_INPUT_FILE_TEXTS } from '@taiga-ui/kit/tokens';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import {
  EkbElementDto,
  EkbTableService,
  GetEkbElementsResponse,
} from '../../services/ekb-table/ekb-table.service';
import { BaseFilter, Paging } from '../../services/filters/filters';
import { AndFilter, FilterOperations, OrFilters, StringFilterOperation } from '../../services/filters/filterOperations';
import _ from 'lodash';
import { CsvHelperService } from '../../services/csv-helper/csv-helper.service';

@Component({
  selector: 'app-load-csv-elements',
  standalone: true,
  imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiFiles, TuiIcon],
  templateUrl: './load-csv-elements.component.html',
  styleUrl: './load-csv-elements.component.scss',
})
export class LoadCsvElementsComponent {
  public readonly context = injectContext<TuiDialogContext<void, void>>();

  protected readonly control = new FormControl<TuiFileLike | null>(null);

  private ekbService: EkbTableService = inject(EkbTableService);

  private csvGenerator: CsvHelperService = inject(CsvHelperService);

  convertToEkb(ekbElement: EkbElementDto): Record<string, any> {
    let result: Record<string, any> = {};
    result[
      'Производитель'
    ] = `${ekbElement.manufacturer?.id} ${ekbElement.manufacturer?.name}`;
    result[
      'Калькодержатель'
    ] = `${ekbElement.traceHolder?.id} ${ekbElement.traceHolder?.name}`;
    result['Категория'] = ekbElement.ekbCategory?.name ?? 'Не известно';
    for (let ekbProp of ekbElement.properties) {
      result[ekbProp.propertyName] = ekbProp.value;
    }
    return result;
  }

  getElementsByFilter(names: string[]): Observable<Record<string, any>[]> {
    let filter: BaseFilter = {
      paging: null,
      scopeParams: null,
      sortInfo: null,
      filterOperations: null,
    };

    const fullFilter = new OrFilters();
    for (let name of names) {
      const filterOperation: StringFilterOperation =
        new StringFilterOperation();
      filterOperation.filterColumn = 'Условное обозначение изделия';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = name;
      fullFilter.filters.push(filterOperation);
    }

    filter.filterOperations = fullFilter;

    return this.ekbService
      .getEkbElements(filter)
      .pipe(map((elements) => _.map(elements.items, this.convertToEkb)));
  }

  onFileChanged($event: any) {
    var file = $event.target.files[0];
    var reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (event) => {
      let csvdata = event?.target?.result?.toString();

      var rowData = csvdata?.split('\r\n') ?? [];

      this.getElementsByFilter(rowData).subscribe((data) => {
        const csvStr = this.csvGenerator.generateCsv(data);
        var downloadLink = document.createElement('a');
        var blob = new Blob(['\ufeff', csvStr]);
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = 'ekb_elements.csv';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    };
  }

  protected readonly file: TuiFileLike = {
    name: 'custom.txt',
  };
}
