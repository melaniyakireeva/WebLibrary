using DataModels.DbContext;
using DataModels.DbModels;
using LibraryApp.Auth;
using LibraryApp.Filters;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.Logics
{
    public class BookLogic : BaseFilterLogic<Book>
    {
        private AppDbContext _context;

        public BookLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public BookDto GetBook(int bookId)
        {
            var book = _context.Books.FirstOrDefault(x => x.Id == bookId);
            if (book == null)
            {
                throw new ArgumentException();
            }
            return book.Adapt<BookDto>();
        }

        public async Task<BookDto[]> GetBooksByFiltersAsync(BaseFilter filterInfo)
        {
            var books = _context.Books.Include(x => x.GenreVal).Include(x => x.AuthorVal).AsQueryable();
            books = this.ApplyFilter(filterInfo, books);
            var booksArr = books.ToArray();
            return booksArr.Adapt<BookDto[]>();
        }

        public async Task<int> GetBooksCount(BaseFilter filterInfo)
        {
            var books = _context.Books.AsQueryable();
            filterInfo.ScopeParams = null;
            filterInfo.Paging = null;
            books = this.ApplyFilter(filterInfo, books);
            return books.Count();
        }

        public async Task<bool> DeleteBookAsync(int id)
        {
            var elem = _context.Books.FirstOrDefault(x => x.Id == id);
            if (elem == null)
            {
                return false;
            }
            _context.Books.Remove(elem);
            await _context.SaveChangesAsync();
            return true;
        }

        public BookDto[] GetAllBooks()
        {
            var books = _context.Books.ToArray();
            return books.Adapt<BookDto[]>();
        }

        public async Task SafeSave(BookDto book)
        {
            if (book.Id != 0)
            {
                var efBook = _context.Books.FirstOrDefault(x => x.Id == book.Id);
                book.Adapt(efBook);
                if (efBook.ReceiptDate.HasValue)
                {
                    efBook.ReceiptDate = efBook.ReceiptDate.Value.ToUniversalTime();
                }
                efBook.AuthorVal = _context.Authors.First(x => x.Id == efBook.AuthorVal.Id);
                efBook.AuthorValId = efBook.AuthorVal.Id;
                efBook.GenreVal = _context.Genres.First(x => x.Id == efBook.GenreVal.Id);
                efBook.GenreValId = efBook.GenreVal.Id;
                await _context.SaveChangesAsync();
            }
            else if (!_context.Books.Any(x => x.Name == book.Name))
            {
                var efBook = book.Adapt<Book>();
                if (efBook.ReceiptDate.HasValue)
                {
                    efBook.ReceiptDate = efBook.ReceiptDate.Value.ToUniversalTime();
                }
                efBook.AuthorVal = _context.Authors.First(x => x.Id == efBook.AuthorVal.Id);
                efBook.AuthorValId = efBook.AuthorVal.Id;
                efBook.GenreVal = _context.Genres.First(x => x.Id == efBook.GenreVal.Id);
                efBook.GenreValId = efBook.GenreVal.Id;
                await _context.Books.AddAsync(efBook);
                await _context.SaveChangesAsync();
            }
        }
    }
}
