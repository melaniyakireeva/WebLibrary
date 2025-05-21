using LibraryApp.Auth;
using LibraryApp.Filters;
using DataModels.DbContext;
using DataModels.DbModels;
using Mapster;

namespace LibraryApp.Logics
{
    public class ParametersLogic: BaseFilterLogic<Genre>
    {
        private AppDbContext _context;

        public ParametersLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public async Task<Genre[]> GetParametersByFiltersAsync(BaseFilter filterInfo)
        {
            var parameters = _context.Genres.AsQueryable();
            parameters = this.ApplyFilter(filterInfo, parameters);
            var parametersArray = parameters.ToArray();
            return parametersArray;
        }

        public async Task<int> GetParametersCount(BaseFilter filterInfo)
        {
            var parameters = _context.Genres.AsQueryable();
            filterInfo.ScopeParams = null;
            filterInfo.Paging = null;
            parameters = this.ApplyFilter(filterInfo, parameters);
           return parameters.Count();
        }

        public async Task SafeSave(Genre genre)
        {
            if (genre.Id != 0)
            {
                var elem = _context.Genres.FirstOrDefault(x => x.Id == genre.Id);
                genre.Adapt(elem);
                await _context.SaveChangesAsync();
            }
            else if (!_context.Genres.Any(x => x.Name == genre.Name))
            {
                await _context.Genres.AddAsync(genre);
                await _context.SaveChangesAsync();
            }
        }
    }
}
