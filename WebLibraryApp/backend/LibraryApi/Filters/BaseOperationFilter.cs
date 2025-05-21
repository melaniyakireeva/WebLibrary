using System.Text.Json.Serialization;

namespace LibraryApp.Filters
{
    [JsonDerivedType(typeof(MultipleNumberFilterOperation), typeDiscriminator: "MultipleNumberFilter")]
    [JsonDerivedType(typeof(NumberFilterOperation), typeDiscriminator: "NumberFilter")]
    [JsonDerivedType(typeof(StringFilterOperation), typeDiscriminator: "StringFilter")]
    [JsonDerivedType(typeof(OrFilters), typeDiscriminator: "OrFilter")]
    [JsonDerivedType(typeof(AndFilter), typeDiscriminator: "AndFilter")]
    public class BaseOperationFilter
    {
    }
}
