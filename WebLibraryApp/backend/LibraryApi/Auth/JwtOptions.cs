using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace LibraryApp.Auth
{
    public class JwtOptions
    {
        public const string ISSUER = "Backend1947";
        public const string AUDIENCE = "Frontend1947";
        private static readonly string KEY = "AHHFSHHAHHAHAAAHAHHFSHHAHHAHAAAH";
        public const int LIFETIME = 120;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
