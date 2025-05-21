import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiLet } from '@taiga-ui/cdk';
import {
  TuiAutoColorPipe,
  TuiButton,
  tuiDialog,
  TuiDialogService,
  TuiDropdown,
  TuiIcon,
  TuiInitialsPipe,
  TuiLink,
  TuiLoader,
  TuiRoot,
  TuiScrollbar,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiCheckbox,
  TuiChip,
  TuiConfirmData,
  TuiDataListWrapper,
  TuiItemsWithMore,
  TuiPagination,
  TuiProgressBar,
  TuiRadioList,
  TuiStatus,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';
import { TuiSelectModule } from '@taiga-ui/legacy';
import { Observable, tap } from 'rxjs';
import _ from 'lodash';
import { UsersService } from '../../services/users/users.service';
import { AccountDTO } from '../../services/messages/room-service.service';
import {
  AndFilter,
  FilterOperations,
  StringFilterOperation,
} from '../../services/filters/filterOperations';
import { BaseFilter, SortInfo } from '../../services/filters/filters';
import { RoleService } from '../../services/role/role-service.service';
import { AccountProfileCardEditComponent } from '../account-profile-card-edit/account-profile-card-edit.component';
import { TUI_CONFIRM } from '@taiga-ui/kit';

@Component({
  selector: 'app-accounts-page',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    DatePipe,
    AsyncPipe,
    TuiAutoColorPipe,
    TuiAvatar,
    TuiBadge,
    TuiLoader,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiChip,
    TuiSelectModule,
    TuiDataListWrapper,
    TuiRoot,
    ReactiveFormsModule,
    TuiChip,
    TuiScrollbar,
    TuiLet,
    TuiInitialsPipe,
    TuiTextfield,
    TuiTooltip,
    TuiDropdown,
    TuiIcon,
    TuiInitialsPipe,
    TuiItemsWithMore,
    TuiLink,
    TuiProgressBar,
    TuiRadioList,
    TuiStatus,
    TuiTable,
    TuiTitle,
    TuiPagination,
  ],
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.scss',
})
export class AccountsPageComponent implements OnInit {
  private readonly dialogs = inject(TuiDialogService);

  private readonly addUserModal = tuiDialog(AccountProfileCardEditComponent, {
    dismissible: true,
    label: 'Добавить пользователя',
    size: 'auto',
  });

  readonly columnsType: string[] = ['Name', 'Surname', 'Login', 'Organization'];

  columnForSort: string = '';

  filterNameVal: string = '';

  constructor(
    private cdRef: ChangeDetectorRef,
    private userService: UsersService,
    protected roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.currentData$ = this.userService.getAllUsers().pipe(
      tap((x) => {
        this.isLoading = false;
      })
    );
  }

  currentData$!: Observable<AccountDTO[]>;

  isLoading: boolean = false;

  onAddUser() {
    this.addUserModal(undefined).subscribe((x) => {
      this.userService.saveUser(x).subscribe((y) => {
        this.updateFilterParams();
        this.cdRef.markForCheck();
      });
    });
  }

  onFilterNameChange(event: any) {
    this.updateFilterParams();
  }

  onSortColumnChange(event: any) {
    this.updateFilterParams();
  }

  updateFilterParams() {
    let filter: BaseFilter = {
      paging: null,
      scopeParams: null,
      sortInfo: null,
      filterOperations: null,
    };

    const fullFilter = new AndFilter();
    if (!_.isEmpty(this.filterNameVal)) {
      const filterOperation: StringFilterOperation =
        new StringFilterOperation();
      filterOperation.filterColumn = 'Login';
      filterOperation.operation = FilterOperations.Contains;
      filterOperation.valueForComparison = this.filterNameVal;
      fullFilter.filters.push(filterOperation);
    }

    filter.filterOperations = fullFilter;

    if (
      this.columnForSort !== 'None' &&
      this.columnsType.includes(this.columnForSort)
    ) {
      filter.sortInfo = <SortInfo>{
        sortColumn: this.columnForSort,
        isDescending: false,
      };
    }

    this.isLoading = true;

    this.currentData$ = this.userService.getUsersByFilter(filter).pipe(
      tap((x) => {
        this.isLoading = false;
      })
    );
    this.cdRef.markForCheck();
  }

  onDisableUser(item: AccountDTO) {
    if (!item.isDisabled){
      const data: TuiConfirmData = {
        yes: 'Да',
        no: 'Отмена',
      };

      this.dialogs
        .open<boolean>(TUI_CONFIRM, {
          label: 'Вы уверены что хотите заблокировать данного пользователя?',
          size: 's',
          data,
        })
        .subscribe((x) => {
          if (x) {
            item.isDisabled = !item.isDisabled;
            this.userService.updateUserInfo(item).subscribe((x) => {
              this.updateFilterParams();
            });
          }
        });
    }
    else{
      item.isDisabled = !item.isDisabled;
      this.isLoading = true;
      this.userService.updateUserInfo(item).subscribe((x) => {
        this.updateFilterParams();
        this.isLoading = false;
      });
    }
  }

  onDeleteUser(item: AccountDTO) {
    const data: TuiConfirmData = {
      yes: 'Да',
      no: 'Отмена',
    };

    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Вы уверены что хотите удалить данного пользователя?',
        size: 's',
        data,
      })
      .subscribe((x) => {
        if (x) {
          this.userService.deleteUser(item.id).subscribe((x) => {
            if (x) {
              this.updateFilterParams();
            }
          });
        }
      });
  }
}
