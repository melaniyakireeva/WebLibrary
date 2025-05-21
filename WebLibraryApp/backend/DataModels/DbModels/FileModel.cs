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
    public class FileModel: IWithId
    {
        [Key]
        public int Id { get; set; }
        public double Size { get; set; }
        public string FileName { get; set; }
        public string FileExt { get; set; }
        public User? Owner { get; set; }
        public string FileData { get; set; }
    }
}
