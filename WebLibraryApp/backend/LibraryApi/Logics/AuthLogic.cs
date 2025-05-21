using LibraryApp.Auth;
using DataModels.DbContext;
using Mapster;

namespace LibraryApp.Logics
{
    public class AuthLogic
    {
        private AppDbContext _context;

        public AuthLogic(AppDbContext appDbContext) {
            this._context = appDbContext;
        }

        public bool ChangePassword(ChangePasswordDto changePasswordDto)
        {
            try
            {
                var user = _context.Users.FirstOrDefault(x => x.Password == changePasswordDto.OldPassword && x.Email == changePasswordDto.Email);
                user.Password = changePasswordDto.NewPassword;
                this._context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public User GetUser(LoginDto loginDto)
        {
            var user = _context.Users.FirstOrDefault(x => x.Password == loginDto.Password && x.Email == loginDto.Email);
            return user;
        }

        public void RegisterUser(RegisterDto registerDto)
        {
            if (_context.Users.Any(x => x.Login == registerDto.Login))
            {
                throw new ArgumentException("User with this username already exists");
            }

            var newUser = registerDto.Adapt<User>();
            newUser.Role = Role.User;
            _context.Users.Add(newUser);
            _context.SaveChanges();
        }
    }
}
