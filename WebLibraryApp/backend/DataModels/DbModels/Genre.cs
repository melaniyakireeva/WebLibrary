﻿using DataModels.DbModels.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.DbModels
{
    public class Genre: IWithId
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
