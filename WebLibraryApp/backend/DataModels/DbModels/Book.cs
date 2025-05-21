using LibraryApp.Auth;
using DataModels.DbModels.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.DbModels
{
    public enum State
    {
        Free,
        Taken
    }

    public class Book: IWithId
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string Cipher { get; set; }
        public string ISBN { get; set; }

        [Range(0.0, Int32.MaxValue)]
        public decimal? Price { get; set; }
        public int AuthorValId { get; set; }
        public Author AuthorVal { get; set; }
        public int GenreValId { get; set; }
        public Genre GenreVal { get; set; }
        public int? PublishYear { get; set; }
        public DateTimeOffset? ReceiptDate { get; set; }
        public State State { get; set; } = State.Free;
        public List<BookingData> BookingInfo { get; set; }
        public int? FileId { get; set; }
        public FileModel? File { get; set; }
    }
}
