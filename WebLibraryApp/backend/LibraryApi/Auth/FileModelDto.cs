using LibraryApp.Auth;
using System.ComponentModel.DataAnnotations;

namespace LibraryApp.Auth
{
    public class FileModelDto
    {
        [Key]
        public int Id { get; set; }
        public double Size { get; set; }
        public string FileName { get; set; }
        public string FileExt { get; set; }
        public User? Owner { get; set; }
        public string FileData { get; set; }
    }

    public class FileModelTableDto
    {
        [Key]
        public int Id { get; set; }
        public double Size { get; set; }
        public string FileName { get; set; }
        public string FileExt { get; set; }
        public User? Owner { get; set; }
    }
}
