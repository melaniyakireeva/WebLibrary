using DataModels.DbModels;
using System.ComponentModel.DataAnnotations;

namespace LibraryApp.Auth
{
    public class BookDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string Cipher { get; set; }
        public string ISBN { get; set; }
        public decimal? Price { get; set; }
        public int AuthorValId { get; set; }
        public Author AuthorVal { get; set; }
        public int GenreValId { get; set; }
        public Genre GenreVal { get; set; }
        public int? PublishYear { get; set; }
        public DateTimeOffset? ReceiptDate { get; set; }
        public int? FileId { get; set; }
    }
}
