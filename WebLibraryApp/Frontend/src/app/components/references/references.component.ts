import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReferenceInfo, References, ReferenceService } from '../../services/reference/reference.service';
import { AuthService } from '../../services/auth/auth-service.service';
import { TuiButton, tuiDialog, TuiLoader } from '@taiga-ui/core';
import { AddReferenceModalComponent } from '../add-reference-modal/add-reference-modal.component';
import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { ReferenceEditorComponent } from '../reference-editor/reference-editor.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ReferenceEkbElementComponent } from '../reference-ekb-element/reference-ekb-element.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    TuiLoader,
    TuiButton,
    ReferenceEditorComponent,
    NgIf,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements OnInit {
  protected isLoading: boolean = true;
  protected accountId: number = -1;
  protected currentData$: Observable<ReferenceInfo[]> = of([]);

  private readonly addReference = tuiDialog(AddReferenceModalComponent, {
    dismissible: true,
    label: 'Добавить справочник',
    size: 'auto',
  });

  private readonly referenceElements = tuiDialog(ReferenceEkbElementComponent, {
    dismissible: true,
    label: 'Элементы справочника',
    size: 'auto',
  });

  constructor(
    private referenceService: ReferenceService,
    private authService: AuthService,
    private cdRef: ChangeDetectorRef
  ) {
    this.accountId = this.authService.getUserInfo()?.userId ?? -1;
  }

  ngOnInit(): void {
    this.updateFilterParams();
  }

  onAddReference() {
    this.addReference({ userId: this.accountId }).subscribe((x) => {
      this.referenceService.saveUserReference(x).subscribe((y) => {
        this.updateFilterParams();
        this.cdRef.markForCheck();
      });
    });
  }

  onReferenceClick(reference: ReferenceInfo){
    this.referenceElements({referenceId: reference.id}).subscribe(x => {});
  }

  updateFilterParams() {
    this.isLoading = true;
    this.currentData$ = this.referenceService
      .getUserReference(this.accountId)
      .pipe(
        tap((x) => {
          this.isLoading = false;
        }),
        map((x) => {
          return x.items;
        }),
        shareReplay(1)
      );
  }
}
