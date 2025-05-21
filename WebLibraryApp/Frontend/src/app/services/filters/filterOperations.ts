export interface IFilter {
  $type: string;
}

export enum FilterType{
  StringFilter,
  NumberFilter,
  MultipleNumberFilter,
  OrFilter,
  AndFilter
}

export enum FilterOperations {
  Equal,
  NotEqual,
  Contains,
  Lower,
  Greater,
  LowerOrEqual,
  GreaterOrEqual,
  IsNull,
  IsNotNull,
  Like
}

export interface FilterOperation<T> extends IFilter {
  filterColumn: string;
  operation: FilterOperations;
  valueForComparison: T;
}

export class OrFilters implements IFilter {
  $type: string = FilterType[FilterType.OrFilter];
  filters: IFilter[] = [];
}

export class AndFilter implements IFilter {
  $type: string = FilterType[FilterType.AndFilter];
  filters: IFilter[] = [];
}

export class StringFilterOperation implements FilterOperation<string> {
  $type: string = FilterType[FilterType.StringFilter];
  filterColumn!: string;
  operation!: FilterOperations;
  valueForComparison!: string;
}

export class NumberFilterOperation implements FilterOperation<number> {
  $type: string = FilterType[FilterType.NumberFilter];
  filterColumn!: string;
  operation!: FilterOperations;
  valueForComparison!: number;
}

export class MultipleNumberFilterOperation implements FilterOperation<number[]> {
  $type: string = FilterType[FilterType.MultipleNumberFilter];
  filterColumn!: string;
  operation!: FilterOperations;
  valueForComparison!: number[];
}