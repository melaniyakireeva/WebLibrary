using DataModels.DbModels;
using DataModels.DbModels.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace LibraryApp.Auth
{
    public class User: IWithId
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Login { get; set; }
        public DateTime? LastVisitDate
        {
            get; set;
        }
        public int? ProfileIconId { get; set; }
        public FileModel? ProfileIcon { get; set; }
        public bool? IsDisabled { get; set; }
        public Role Role { get; set; }
    }

    public enum Role
    {
        Admin,
        Expert,
        User
    }
}
