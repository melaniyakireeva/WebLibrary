using LibraryApp.Auth;
using LibraryApp.Filters;
using DataModels.DbContext;
using DataModels.DbModels;
using Mapster;
using Npgsql.TypeMapping;
using System.IO;

namespace LibraryApp.Logics
{
    public class UserLogic : BaseFilterLogic<User>
    {
        private AppDbContext _context;

        public UserLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public AccountDTO[] GetUsersByFilter(BaseFilter filterInfo)
        {
            var users = _context.Users.AsQueryable();
            users = this.ApplyFilter(filterInfo, users);
            return users.ToArray().Adapt<AccountDTO[]>();
        }

        public AccountDTO[] GetAllUsers()
        {
            var allUsers = this._context.Users.OrderBy(x => x.Id).ToArray();
            return allUsers.Adapt<AccountDTO[]>();
        }

        public AccountDTO GetUser(int id)
        {
            var user = this._context.Users.FirstOrDefault(x => x.Id == id);
            return user.Adapt<AccountDTO>();
        }

        public void SaveUser(RegisterAdminDto account)
        {
            if (_context.Users.Any(x => x.Login == account.Login))
            {
                throw new ArgumentException("User with this username already exists");
            }

            var newUser = account.Adapt<User>();
            _context.Users.Add(newUser);
            _context.SaveChanges();

        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = this._context.Users.FirstOrDefault(x => x.Id == id);
            if (user == null)
            {
                return false;
            }
            this._context.Users.Remove(user);
            await this._context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateUserAsync(AccountDTO accountDTO)
        {
            var user = this._context.Users.FirstOrDefault(x => x.Id == accountDTO.Id);
            if (user == null)
            {
                return false;
            }
            accountDTO.Adapt(user);
            await this._context.SaveChangesAsync();
            return true;
        }
    }
}
