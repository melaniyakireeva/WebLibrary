using LibraryApp.Auth;
using DataModels.DbModels.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.DbModels
{
    public class BookingData: IWithId
    {
        public int Id { get; set; }
        public Book Book { get; set; }
        public User User { get; set; }
        public DateTime BookingDateStart { get; set; }
        public DateTime BookingDateEnd { get; set; }
    }
}
