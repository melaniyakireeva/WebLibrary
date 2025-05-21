using DataModels.DbModels.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace DataModels.DbModels
{
    public class Author: IWithId
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string? Patronym { get; set; }
    }
}
