import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiDataList,
  TuiDialogContext,
  TuiDropdown,
  TuiIcon,
  TuiSelect,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiTooltip } from '@taiga-ui/kit';
import { injectContext } from '@taiga-ui/polymorpheus';
import _ from 'lodash';
import { ReferenceInfo, References } from '../../services/reference/reference.service';
import { AsyncPipe, formatDate, NgIf } from '@angular/common';
import type { TemplateRef } from '@angular/core';
import { TuiAutoFocus, tuiPure } from '@taiga-ui/cdk';
import { TuiDataListWrapper, TuiSlider } from '@taiga-ui/kit';
import {
  TuiInputModule,
  TuiSelectModule,
  TuiMultiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

export class ReferenceListItem {
  modelRef!: ReferenceInfo;

  constructor(reference: ReferenceInfo) {
    this.modelRef = reference;
  }

  toString() {
    return `${this.modelRef.id} - ${this.modelRef.name}`;
  }
}

@Component({
  selector: 'app-element-to-reference',
  standalone: true,
  imports: [
    TuiTextfield,
    TuiIcon,
    TuiTooltip,
    TuiButton,
    FormsModule,
    CommonModule,
    AsyncPipe,
    FormsModule,
    TuiAutoFocus,
    TuiButton,
    NgIf,
    TuiDropdown,
    TuiDataListWrapper,
    TuiDataList,
    TuiInputModule,
    TuiSelectModule,
    TuiSelect,
    TuiSlider,
    TuiTextfield,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './element-to-reference.component.html',
  styleUrl: './element-to-reference.component.scss',
})
export class ElementToReferenceComponent implements OnInit {
  ngOnInit(): void {
    this.selectedReferences = this.context.data.selectedReferences ?? [];
    this.allReferences = this.context.data.userReferences ?? [];
  }

  public readonly context = injectContext<
    TuiDialogContext<
      {
        userReferences: number[];
        selectedReferences: number[];
      },
      {
        userReferences?: ReferenceListItem[];
        selectedReferences?: ReferenceListItem[];
      }
    >
  >();

  search: string = '';
  selectedReferences: ReferenceListItem[] = [];
  allReferences: ReferenceListItem[] = [];

  protected submit(): void {
    if (!_.isEmpty(this.selectedReferences)) {
      this.context.completeWith({
        selectedReferences: _.map(
          this.selectedReferences,
          (x) => x.modelRef.id
        ),
        userReferences: _.map(this.allReferences, (x) => x.modelRef.id),
      });
    }
  }
}
