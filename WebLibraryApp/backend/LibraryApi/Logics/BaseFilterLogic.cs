using LibraryApp.Filters;
using DataModels.DbModels.Interfaces;
using Microsoft.IdentityModel.Tokens;
using LibraryApp.Extensions;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace LibraryApp.Logics
{
    public class BaseFilterLogic<T> where T : IWithId
    {
        private class ReplaceExpressionVisitor
        : ExpressionVisitor
        {
            private readonly Expression _oldValue;
            private readonly Expression _newValue;

            public ReplaceExpressionVisitor(Expression oldValue, Expression newValue)
            {
                _oldValue = oldValue;
                _newValue = newValue;
            }

            public override Expression Visit(Expression node)
            {
                if (node == _oldValue)
                    return _newValue;
                return base.Visit(node);
            }
        }

        public virtual IQueryable<T> ApplyFilter(BaseFilter filter, IQueryable<T> valueSet)
        {
            if (filter == null)
            {
                return valueSet;
            }

            if (filter.FilterOperations != null)
            {
                var filterVal = this.GetFilterOperation(filter.FilterOperations);
                valueSet = valueSet.Where(filterVal);
            }

            valueSet = this.ApplySorting(filter, valueSet);

            if (filter.ScopeParams != null)
            {
                if (!filter.ScopeParams.Ids.IsNullOrEmpty())
                {
                    valueSet = valueSet.Where(x => filter.ScopeParams.Ids.Contains(x.Id));
                }
            }

            if (filter.Paging != null)
            {
                int st = filter.Paging.ItemsPerPage * filter.Paging.PageIndex;
                valueSet = valueSet.Skip(st).Take(filter.Paging.ItemsPerPage);
            }

            return valueSet;
        }

        protected virtual IQueryable<T> ApplySorting(BaseFilter filter, IQueryable<T> valueSet)
        {
            if (filter.SortInfo != null)
            {
                if (filter.SortInfo.IsDescending)
                {
                    valueSet = valueSet.OrderByDescending(filter.SortInfo.SortColumn);
                }
                else
                {
                    valueSet = valueSet.OrderBy(filter.SortInfo.SortColumn);
                }
            }
            return valueSet;
        }

        protected IQueryable<T> ApplyFilterOperation(BaseOperationFilter filterOperation, IQueryable<T> valueSet)
        {
            if (filterOperation == null)
            {
                return valueSet;
            }

            if (filterOperation is AndFilter andFilterOperation)
            {
                return this.ApplyAndFilterOperation(andFilterOperation, valueSet);
            }
            else if (filterOperation is OrFilters orFilterOperation)
            {
                return this.ApplyOrFilterOperation(orFilterOperation, valueSet);
            }
            else if (filterOperation is StringFilterOperation stringFilterOperation)
            {
                return this.ApplyStringFilterOperation(stringFilterOperation, valueSet);
            }
            else if (filterOperation is NumberFilterOperation numberFilterOperation)
            {
                return this.ApplyNumberFilterOperation(numberFilterOperation, valueSet);
            }
            else
            {
                return valueSet;
            }
        }

        protected Expression<Func<T, bool>> GetFilterOperation(BaseOperationFilter filterOperation)
        {
            if (filterOperation == null)
            {
                return x => true;
            }

            if (filterOperation is AndFilter andFilterOperation)
            {
                return this.GetAndFilterOperation(andFilterOperation);
            }
            else if (filterOperation is OrFilters orFilterOperation)
            {
                return this.GetOrFilterOperation(orFilterOperation);
            }
            else if (filterOperation is StringFilterOperation stringFilterOperation)
            {
                return this.GetStringFilterOperation(stringFilterOperation);
            }
            else if (filterOperation is NumberFilterOperation numberFilterOperation)
            {
                return this.GetNumberFilterOperation(numberFilterOperation);
            }
            else if (filterOperation is MultipleNumberFilterOperation multipleNumberFilterOperation)
            {
                return this.GetMultipleNumberFilterOperation(multipleNumberFilterOperation);
            }
            else
            {
                return x => true;
            }
        }

        protected IQueryable<T> ApplyOrFilterOperation(OrFilters filterOperation, IQueryable<T> valueSet)
        {
            if (filterOperation == null)
            {
                return valueSet;
            }

            foreach (var filter in filterOperation.Filters)
            {
                valueSet = this.ApplyFilterOperation(filter, valueSet);
            }

            return valueSet;
        }

        protected Expression<Func<T, bool>> GetOrFilterOperation(OrFilters filterOperation)
        {
            if (filterOperation == null || filterOperation.Filters.IsNullOrEmpty())
            {
                return val => true;
            }

            var parameter = Expression.Parameter(typeof(T));
            var firstExpr = this.GetFilterOperation(filterOperation.Filters.First());
            var visitor = new ReplaceExpressionVisitor(firstExpr.Parameters[0], parameter);
            var exprBody = visitor.Visit(firstExpr.Body);
            var resultExpr = Expression.Lambda<Func<T, bool>>(exprBody, parameter);
            if (filterOperation.Filters.Length == 1)
            {
                return resultExpr;
            }

            foreach (var filter in filterOperation.Filters.Skip(1))
            {
                var filterOper = this.GetFilterOperation(filter);
                visitor = new ReplaceExpressionVisitor(filterOper.Parameters[0], parameter);
                var resExpr = visitor.Visit(filterOper.Body);
                resultExpr = Expression.Lambda<Func<T, bool>>(Expression.OrElse(resultExpr.Body, resExpr), parameter);
            }

            return resultExpr;
        }

        protected virtual IQueryable<T> ApplyNumberFilterOperation(NumberFilterOperation filterOperation, IQueryable<T> valueSet)
        {
            if (filterOperation == null)
            {
                return valueSet;
            }

            if (filterOperation.Operation == FilterOperations.Equal)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) == filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.GreaterOrEqual)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) >= filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.Greater)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) > filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.LowerOrEqual)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) <= filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.Lower)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) < filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.NotEqual)
            {
                return valueSet.Where(x => EF.Property<int>(x, filterOperation.FilterColumn) != filterOperation.ValueForComparison);
            }
            else
            {
                return valueSet;
            }
        }

        protected virtual Expression<Func<T, bool>> GetMultipleNumberFilterOperation(MultipleNumberFilterOperation filterOperation)
        {
            if (filterOperation == null)
            {
                return x => true;
            }

            if (filterOperation.Operation == FilterOperations.Contains)
            {
                return x => filterOperation.ValueForComparison.Any(y => y == EF.Property<int>(x, filterOperation.FilterColumn));
            }
            else
            {
                return x => true;
            }
        }

        protected virtual Expression<Func<T, bool>> GetNumberFilterOperation(NumberFilterOperation filterOperation)
        {
            if (filterOperation == null)
            {
                return x => true;
            }

            if (filterOperation.Operation == FilterOperations.Equal)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) == filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.GreaterOrEqual)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) >= filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.Greater)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) > filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.LowerOrEqual)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) <= filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.Lower)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) < filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.NotEqual)
            {
                return x => EF.Property<int>(x, filterOperation.FilterColumn) != filterOperation.ValueForComparison;
            }
            else
            {
                return x => true;
            }
        }

        protected IQueryable<T> ApplyAndFilterOperation(AndFilter filterOperation, IQueryable<T> valueSet)
        {
            if (filterOperation == null)
            {
                return valueSet;
            }

            foreach (var filter in filterOperation.Filters)
            {
                valueSet = this.ApplyFilterOperation(filter, valueSet);
            }

            return valueSet;
        }

        protected Expression<Func<T, bool>> GetAndFilterOperation(AndFilter filterOperation)
        {
            if (filterOperation == null || filterOperation.Filters.IsNullOrEmpty())
            {
                return val => true;
            }

            var parameter = Expression.Parameter(typeof(T));
            var firstExpr = this.GetFilterOperation(filterOperation.Filters.First());
            var visitor = new ReplaceExpressionVisitor(firstExpr.Parameters[0], parameter);
            var exprBody = visitor.Visit(firstExpr.Body);
            var resultExpr = Expression.Lambda<Func<T, bool>>(exprBody, parameter);
            if (filterOperation.Filters.Length == 1)
            {
                return resultExpr;
            }

            foreach (var filter in filterOperation.Filters.Skip(1))
            {
                var filterOper = this.GetFilterOperation(filter);
                visitor = new ReplaceExpressionVisitor(filterOper.Parameters[0], parameter);
                var resExpr = visitor.Visit(filterOper.Body);
                resultExpr = Expression.Lambda<Func<T, bool>>(Expression.AndAlso(resultExpr.Body, resExpr), parameter);
            }

            return resultExpr;
        }

        protected IQueryable<T> ApplyStringFilterOperation(StringFilterOperation filterOperation, IQueryable<T> valueSet)
        {
            if (filterOperation == null)
            {
                return valueSet;
            }

            if (filterOperation.Operation == FilterOperations.Equal)
            {
                return valueSet.Where(x => EF.Property<string>(x, filterOperation.FilterColumn) == filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.Contains)
            {
                return valueSet.Where(x => EF.Property<string>(x, filterOperation.FilterColumn).Contains(filterOperation.ValueForComparison));
            }
            else if (filterOperation.Operation == FilterOperations.NotEqual)
            {
                return valueSet.Where(x => EF.Property<string>(x, filterOperation.FilterColumn) != filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.Like)
            {
                return valueSet.Where(x => EF.Functions.Like(EF.Property<string>(x, filterOperation.FilterColumn), filterOperation.ValueForComparison));
            }
            else
            {
                return valueSet;
            }
        }

        protected virtual Expression<Func<T, bool>> GetStringFilterOperation(StringFilterOperation filterOperation)
        {
            if (filterOperation == null)
            {
                return val => true;
            }

            if (filterOperation.Operation == FilterOperations.Equal)
            {
                return x => EF.Property<string>(x, filterOperation.FilterColumn) == filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.Contains)
            {
                return x => EF.Property<string>(x, filterOperation.FilterColumn).Contains(filterOperation.ValueForComparison);
            }
            else if (filterOperation.Operation == FilterOperations.NotEqual)
            {
                return x => EF.Property<string>(x, filterOperation.FilterColumn) != filterOperation.ValueForComparison;
            }
            else if (filterOperation.Operation == FilterOperations.Like)
            {
                return x => EF.Functions.Like(EF.Property<string>(x, filterOperation.FilterColumn), filterOperation.ValueForComparison);
            }
            else
            {
                return val => true;
            }
        }
    }
}
