namespace LibraryApp.Filters
{
    public class AndFilter: BaseOperationFilter
    {
        public BaseOperationFilter[] Filters { get; set; } = [];
    }
}
