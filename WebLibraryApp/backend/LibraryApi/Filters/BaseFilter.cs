namespace LibraryApp.Filters
{
    public class Paging
    {
        public int PageIndex { get; set; }
        public int ItemsPerPage { get; set; }
    }

    public class SortInfo
    {
        public string SortColumn { get; set; }
        public bool IsDescending { get; set; }
    }

    public class ScopeParams
    {
        public int[] Ids { get; set; }
    }

    public class BaseFilter
    {
        public Paging? Paging { get; set; }
        public ScopeParams? ScopeParams { get; set; }
        public SortInfo? SortInfo { get; set; }
        public BaseOperationFilter? FilterOperations { get; set; }
    }

    public class BaseFilterResult<T>
    {
        public int TotalItems { get; set; }
        public T[] Items { get; set; }
    }
}
