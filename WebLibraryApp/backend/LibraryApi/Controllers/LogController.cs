using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using DataModels.DbModels;
using Mapster;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/audit/[action]")]
    [ApiController]
    public class LogController: Controller
    {
        private readonly AuditLogic _auditLogic;

        private readonly ILogger<LogController> _logger;

        public LogController(AuditLogic auditLogic,
            ILogger<LogController> logger)
        {
            this._auditLogic = auditLogic;
            this._logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> GetLogsByFilter(GetLogsRequest request)
        {
            var logs = await _auditLogic.GetLogsByFiltersAsync(request.Filter);
            var totalCnt = await _auditLogic.GetLogsCount(request.Filter);

            var logsResponse = new GetLogsResponse()
            {
                Items = logs,
                TotalCount = totalCnt
            };

            return Ok(logsResponse);
        }
    }

    public class GetLogsRequest
    {
        public BaseFilter? Filter { get; set; }
    }

    public class GetLogsResponse
    {
        public LogEntry[] Items { get; set; }
        public int TotalCount { get; set; }
    }
}
