﻿using DataModels.DbModels.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModels.DbModels
{
    public class LogEntry: IWithId
    {
        public int Id { get; set; }
        public string? CallSite { get; set; }
        public string? Date { get; set; }
        public string? Exception { get; set; }
        public string? Level { get; set; }
        public string? Logger { get; set; }
        public string? MachineName { get; set; }
        public string? Message { get; set; }
        public string? StackTrace { get; set; }
        public string? Thread { get; set; }
        public string? Username { get; set; }
    }
}
