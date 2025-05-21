namespace LibraryApp.Filters
{
    public enum FilterOperations
    {
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

    public interface IFilterOperation<T>
    {
        public string FilterColumn { get; set; }
        public FilterOperations Operation { get; set; }
        public T ValueForComparison { get; set; }
    }
}
