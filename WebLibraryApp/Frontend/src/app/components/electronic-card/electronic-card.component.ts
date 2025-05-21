import { Component, OnInit } from '@angular/core';
import {
  TuiButton,
  TuiDialogContext,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { EkbElementDto } from '../../services/ekb-table/ekb-table.service';
import { TuiTabs } from '@taiga-ui/kit';
import { NgFor, NgIf } from '@angular/common';
import { TuiTable } from '@taiga-ui/addon-table';
import _ from 'lodash';

@Component({
  selector: 'app-electronic-card',
  standalone: true,
  imports: [TuiTabs, NgIf, TuiTable, NgFor],
  templateUrl: './electronic-card.component.html',
  styleUrl: './electronic-card.component.scss',
})
export class ElectronicCardComponent implements OnInit {
  protected activeItemIndex = 0;
  protected elementsKey: string[] = [];
  protected elementVals: Record<string, any> = {};

  ngOnInit(): void {
    this.elementsKey = _.keys(this.context.data.data);
    this.elementVals = this.context.data.data;
  }

  public readonly context =
    injectContext<
      TuiDialogContext<
        void,
        { data: Record<string, any>; modelRef: EkbElementDto }
      >
    >();
}
