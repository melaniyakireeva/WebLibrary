using LibraryApp.Auth;
using LibraryApp.Filters;
using DataModels.DbContext;
using DataModels.DbModels;
using Mapster;
using System.Data.Entity;

namespace LibraryApp.Logics
{
    public class AuthorLogic: BaseFilterLogic<Author>
    {
        private AppDbContext _context;

        public AuthorLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public AuthorDto GetAuthor(int AuthorId)
        {
            var Author = _context.Authors.FirstOrDefault(x => x.Id == AuthorId);
            if (Author == null)
            {
                throw new ArgumentException();
            }
            return Author.Adapt<AuthorDto>();
        }

        public async Task<AuthorDto[]> GetAuthorsByFiltersAsync(BaseFilter filterInfo)
        {
            var Authors = _context.Authors.AsQueryable();
            Authors = this.ApplyFilter(filterInfo, Authors);
            var AuthorsArr = Authors.ToArray();
            return AuthorsArr.Adapt<AuthorDto[]>();
        }

        public async Task<int> GetAuthorsCount(BaseFilter filterInfo)
        {
            var Authors = _context.Authors.AsQueryable();
            filterInfo.ScopeParams = null;
            filterInfo.Paging = null;
            Authors = this.ApplyFilter(filterInfo, Authors);
            return Authors.Count();
        }

        public async Task<bool> DeleteAuthorAsync(int id)
        {
            var elem = _context.Authors.FirstOrDefault(x => x.Id == id);
            if (elem == null)
            {
                return false;
            }
            _context.Authors.Remove(elem);
            await _context.SaveChangesAsync();
            return true;
        }

        public AuthorDto[] GetAllAuthors()
        {
            var Authors = _context.Authors.ToArray();
            return Authors.Adapt<AuthorDto[]>();
        }

        public async Task SafeSave(AuthorDto Author)
        {
            if (Author.Id != 0)
            {
                var elem = _context.Authors.FirstOrDefault(x => x.Id == Author.Id);
                Author.Adapt(elem);
                await _context.SaveChangesAsync();
            }
            else if (!_context.Authors.Any(x => x.Name == Author.Name))
            {
                var efAuthor = Author.Adapt<Author>();
                await _context.Authors.AddAsync(efAuthor);
                await _context.SaveChangesAsync();
            }
        }
    }
}
