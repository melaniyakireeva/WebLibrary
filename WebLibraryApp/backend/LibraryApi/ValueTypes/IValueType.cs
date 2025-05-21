namespace LibraryApp.ValueTypes
{
    public interface IValueType
    {
    }

    public class StringValueType : IValueType
    {
        public string Value { get; set; }
    }

    public class DoubleValueType: IValueType
    {
        public double Value { get; set; }
    }

    public class RangeValueType : IValueType
    {
        public IValueType MinValue { get; set; }
        public IValueType MaxValue { get; set; }
    }
}
