import { IFilter, StringFilterOperation } from "./filterOperations";

export interface Paging {
  pageIndex: number;
  itemsPerPage: number;
}

export interface SortInfo {
  sortColumn: string;
  isDescending: boolean;
}

export interface ScopeParams {
  ids: number[];
}

export interface BaseFilter {
  paging: Paging | null;
  scopeParams: ScopeParams | null;
  sortInfo: SortInfo | null;
  filterOperations: IFilter | null;
}

export interface BaseFilterResult<T> {
  totalItems: number;
  items: T[];
}
