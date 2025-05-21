import _ from 'lodash';
import { AndFilter, FilterOperation, FilterOperations, FilterType, IFilter, NumberFilterOperation, OrFilters, StringFilterOperation } from './filterOperations';

export class FilterConverter {
  public static getOperatorFromStr(oper: string): FilterOperations {
    if (oper === '>') {
      return FilterOperations.Greater;
    } else if (oper === '>=') {
      return FilterOperations.GreaterOrEqual;
    } else if (oper === '<') {
      return FilterOperations.Lower;
    } else if (oper === '<=') {
      return FilterOperations.LowerOrEqual;
    } else if (oper.toLowerCase() === 'contains') {
      return FilterOperations.Contains;
    } else if (oper === '=') {
      return FilterOperations.Equal;
    } else if (oper === '!=' || oper === '<>') {
      return FilterOperations.NotEqual;
    } else {
      return FilterOperations.IsNotNull;
    }
  }

  public static getFilterFromObj(
    obj: any,
    allowedColumns: string[]
  ): IFilter | null {
    if (_.isNil(obj)) {
      return null;
    }

    if (_.isArray(obj)) {
      const filter = new AndFilter();
      const subFilters = _.compact(
        _.map(obj, (x) => this.getFilterFromObj(x, allowedColumns))
      );
      filter.filters = subFilters;
      return filter;
    } else {
      const field = _.capitalize(obj.field);
      if (!_.includes(allowedColumns, field)) {
        return null;
      }

      const operator = this.getOperatorFromStr(obj.operator);
      const value = obj.value;
      if (operator === FilterOperations.IsNotNull) {
        const res = new StringFilterOperation();
        res.filterColumn = field;
        res.operation = operator;
        return res;
      }
      if (_.isString(value)) {
        const res = new StringFilterOperation();
        res.filterColumn = field;
        res.operation = operator;
        res.valueForComparison = value;
        return res;
      } else if (_.isNumber(value)) {
        const res = new NumberFilterOperation();
        res.filterColumn = field;
        res.operation = operator;
        res.valueForComparison = value;
        return res;
      } else {
        return null;
      }
    }
  }

  public static copyFilter(filter: IFilter): IFilter {
    if (filter.$type === FilterType[FilterType.StringFilter]) {
      const convertedFilter = filter as StringFilterOperation;
      const stringFilter = new StringFilterOperation();
      stringFilter.filterColumn = convertedFilter.filterColumn;
      stringFilter.operation = convertedFilter.operation;
      stringFilter.valueForComparison = convertedFilter.valueForComparison;
      return stringFilter;
    } else if (filter.$type === FilterType[FilterType.NumberFilter]) {
      const convertedFilter = filter as NumberFilterOperation;
      const numberFilter = new NumberFilterOperation();
      numberFilter.filterColumn = convertedFilter.filterColumn;
      numberFilter.operation = convertedFilter.operation;
      numberFilter.valueForComparison = convertedFilter.valueForComparison;
      return numberFilter;
    } else if (filter.$type === FilterType[FilterType.OrFilter]) {
      const orFilter = filter as OrFilters;
      const newFilter = new OrFilters();
      newFilter.filters = _.map(orFilter.filters, (x) =>
        FilterConverter.copyFilter(x)
      );
      return newFilter;
    } else if (filter.$type === FilterType[FilterType.AndFilter]) {
      const andFilter = filter as AndFilter;
      const newFilter = new AndFilter();
      newFilter.filters = _.map(andFilter.filters, (x) =>
        FilterConverter.copyFilter(x)
      );
      return newFilter;
    } else {
      return new AndFilter();
    }
  }

  public static convertToTree(
    filter: IFilter,
    parent?: TreeNode
  ): TreeNode | undefined | null {
    if (_.isNil(filter)) {
      return null;
    } else if (filter.$type === FilterType[FilterType.StringFilter]) {
      const stringFilter = filter as StringFilterOperation;
      return {
        parent: parent,
        icon: '@tui.text-cursor-input',
        value: filter,
        text: 'StringFilter',
      };
    } else if (filter.$type === FilterType[FilterType.NumberFilter]) {
      const numberFilter = filter as NumberFilterOperation;
      return {
        parent: parent,
        icon: '@tui.diff',
        value: filter,
        text: 'NumberFilter',
      };
    } else if (filter.$type === FilterType[FilterType.OrFilter]) {
      const orFilter = filter as OrFilters;
      const treeElem: TreeNode = {
        parent: parent,
        icon: '@tui.blend',
        value: filter,
        text: 'OR',
      };
      treeElem.children = _.filter(
        _.map(orFilter.filters, (x) => this.convertToTree(x, treeElem)),
        (x) => !_.isNil(x)
      );
      return treeElem;
    } else if (filter.$type === FilterType[FilterType.AndFilter]) {
      const andFilter = filter as AndFilter;
      const treeElem: TreeNode = {
        parent: parent,
        icon: '@tui.ampersand',
        value: filter,
        children: _.filter(
          _.map(andFilter.filters, (x) => this.convertToTree(x)),
          (x) => !_.isNil(x)
        ),
        text: 'AND',
      };
      treeElem.children = _.filter(
        _.map(andFilter.filters, (x) => this.convertToTree(x, treeElem)),
        (x) => !_.isNil(x)
      );
      return treeElem;
    } else {
      return {
        value: filter,
        text: 'Unknown',
      };
    }
  }

  public static removeEmptyFilters(filter: IFilter): IFilter | null {
    if (filter.$type === FilterType[FilterType.StringFilter]) {
      const stringFilter: StringFilterOperation =
        filter as StringFilterOperation;
      return _.isNil(stringFilter.filterColumn) ||
        _.isNil(stringFilter.operation)
        ? null
        : stringFilter;
    } else if (filter.$type === FilterType[FilterType.NumberFilter]) {
      const numberFilter: NumberFilterOperation =
        filter as NumberFilterOperation;
      return _.isNil(numberFilter.filterColumn) ||
        _.isNil(numberFilter.operation) ||
        _.isNil(numberFilter.valueForComparison)
        ? null
        : numberFilter;
    } else if (filter.$type === FilterType[FilterType.OrFilter]) {
      const orFilter = filter as OrFilters;
      const filteredData = _.compact(
        _.map(orFilter.filters, (x) => FilterConverter.removeEmptyFilters(x))
      );
      if (_.isEmpty(filteredData)) {
        return null;
      } else {
        const res = new OrFilters();
        res.filters = filteredData;
        return res;
      }
    } else if (filter.$type === FilterType[FilterType.AndFilter]) {
      const orFilter = filter as AndFilter;
      const filteredData = _.compact(
        _.map(orFilter.filters, (x) => FilterConverter.removeEmptyFilters(x))
      );
      if (_.isEmpty(filteredData)) {
        return null;
      } else {
        const res = new AndFilter();
        res.filters = filteredData;
        return res;
      }
    } else {
      return null;
    }
  }

  public static isEmptyFilter(filter: IFilter): boolean {
    if (_.isNil(filter)) {
      return true;
    } else if (filter.$type === FilterType[FilterType.StringFilter]) {
      return false;
    } else if (filter.$type === FilterType[FilterType.NumberFilter]) {
      return false;
    } else if (filter.$type === FilterType[FilterType.OrFilter]) {
      const orFilter = filter as OrFilters;
      return _.every(orFilter.filters, (x) => FilterConverter.isEmptyFilter(x));
    } else if (filter.$type === FilterType[FilterType.AndFilter]) {
      const andFilter = filter as AndFilter;
      return _.every(andFilter.filters, (x) =>
        FilterConverter.isEmptyFilter(x)
      );
    } else {
      return true;
    }
  }

  public static convertToString(filter: IFilter): string {
    if (_.isNil(filter)) {
      return '';
    }
    if (filter.$type === FilterType[FilterType.StringFilter]) {
      const stringFilter = filter as StringFilterOperation;
      return `'${stringFilter.filterColumn}' ${this.convertOperationToString(
        stringFilter.operation
      )} '${stringFilter.valueForComparison}'`;
    } else if (filter.$type === FilterType[FilterType.NumberFilter]) {
      const numberFilter = filter as NumberFilterOperation;
      return `'${numberFilter.filterColumn}' ${this.convertOperationToString(
        numberFilter.operation
      )} ${numberFilter.valueForComparison}`;
    } else if (filter.$type === FilterType[FilterType.OrFilter]) {
      const orFilter = filter as OrFilters;
      let filterArr: string[] = _.map(orFilter.filters, (x) =>
        this.convertToString(x)
      );
      return filterArr.join(' OR ');
    } else if (filter.$type === FilterType[FilterType.AndFilter]) {
      const andFilter = filter as AndFilter;
      let filterArr: string[] = _.map(
        andFilter.filters,
        (x) => `(${this.convertToString(x)})`
      );
      return filterArr.join(' AND ');
    } else {
      return 'Unknown';
    }
  }

  public static convertOperationToNameString(filterOper: FilterOperations) {
    switch (filterOper) {
      case FilterOperations.Contains:
        return 'Содержит';
      case FilterOperations.IsNotNull:
        return 'Имеет значение';
      case FilterOperations.IsNull:
        return 'Не имеет значение';
      case FilterOperations.Equal:
        return 'Равно';
      case FilterOperations.GreaterOrEqual:
        return 'Больше или равно';
      case FilterOperations.Greater:
        return 'Больше';
      case FilterOperations.Lower:
        return 'Меньше';
      case FilterOperations.LowerOrEqual:
        return 'Меньше или равно';
      case FilterOperations.NotEqual:
        return 'Не равен';
      case FilterOperations.Like:
        return 'Соответствует LIKE выражению';
    }
  }

  public static convertOperationToString(filterOper: FilterOperations) {
    switch (filterOper) {
      case FilterOperations.Contains:
        return 'содержит';
      case FilterOperations.IsNotNull:
        return 'имеет значение';
      case FilterOperations.IsNull:
        return 'не имеет значение';
      case FilterOperations.Equal:
        return '==';
      case FilterOperations.GreaterOrEqual:
        return '>=';
      case FilterOperations.Greater:
        return '>';
      case FilterOperations.Lower:
        return '<';
      case FilterOperations.LowerOrEqual:
        return '<=';
      case FilterOperations.NotEqual:
        return '!=';
      case FilterOperations.Like:
        return 'LIKE';
    }
  }
}

export interface TreeNode {
  children?: TreeNode[];
  readonly text: string;
  readonly icon?: string;
  readonly value: IFilter;
  readonly parent?: TreeNode;
}
