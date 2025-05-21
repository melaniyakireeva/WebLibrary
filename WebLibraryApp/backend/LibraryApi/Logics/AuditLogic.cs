using LibraryApp.Auth;
using LibraryApp.Filters;
using DataModels.DbContext;
using DataModels.DbModels;

namespace LibraryApp.Logics
{
    public class AuditLogic: BaseFilterLogic<LogEntry>
    {
        private AppDbContext _context;

        public AuditLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public LogEntry[] GetAllLogs()
        {
            var allLogs = this._context.LogEntries.OrderByDescending(x => x.Id).ToArray();
            return allLogs;
        }

        public async Task<LogEntry[]> GetLogsByFiltersAsync(BaseFilter filterInfo)
        {
            var logs = _context.LogEntries.AsQueryable();
            logs = this.ApplyFilter(filterInfo, logs);
            var logsArray = logs.ToArray();
            return logsArray;
        }

        public async Task<int> GetLogsCount(BaseFilter filterInfo)
        {
            var logs = _context.LogEntries.AsQueryable();
            filterInfo.ScopeParams = null;
            filterInfo.Paging = null;
            logs = this.ApplyFilter(filterInfo, logs);
            return logs.Count();
        }
    }
}
