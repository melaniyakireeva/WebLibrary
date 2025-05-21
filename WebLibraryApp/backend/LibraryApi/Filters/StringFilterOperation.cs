namespace LibraryApp.Filters
{
    public class StringFilterOperation : BaseOperationFilter, IFilterOperation<string>
    {
        public string FilterColumn { get; set; }
        public FilterOperations Operation { get; set; }
        public string ValueForComparison { get; set; }
    }
}
