namespace LibraryApp.Filters
{
    public class NumberFilterOperation : BaseOperationFilter, IFilterOperation<int>
    {
        public string FilterColumn { get; set; }
        public FilterOperations Operation { get; set; }
        public int ValueForComparison { get; set; }
    }

    public class MultipleNumberFilterOperation : BaseOperationFilter, IFilterOperation<int[]>
    {
        public string FilterColumn { get; set; }
        public FilterOperations Operation { get; set; }
        public int[] ValueForComparison { get; set; }
    }
}
