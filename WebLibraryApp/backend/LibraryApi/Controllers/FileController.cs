using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FileController : Controller
    {
        private readonly FileLogic _fileLogic;
        private readonly ILogger<FileController> _logger;

        public FileController(FileLogic fileLogic, ILogger<FileController> logger)
        {
            this._fileLogic = fileLogic;
            this._logger = logger;
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> UploadFile()
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Загрузка файла пользователем с Id {userId}");
            var formCollection = await Request.ReadFormAsync();
            var fileToSave = formCollection.Files.First();
            int id = await this._fileLogic.UploadFile(fileToSave, userId);
            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> GetFile(GetFileRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получения файла с ID {request.FileId} пользователем с Id {userId}");

            var fileData = await this._fileLogic.GetFileInfo(request.FileId);
            return Ok(fileData);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFiles()
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получения всех файлов пользователем с Id {userId}");
            var fileData = await this._fileLogic.GetAllFiles();
            return Ok(fileData);
        }

        [HttpPost]
        public async Task<IActionResult> GetFilesByFilter(GetFilesByFilterRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получения файлов по фильтру пользователем с Id {userId}");

            var fileData = await this._fileLogic.GetFilesByFilterAsync(request.Filter);
            var fileCnt = await this._fileLogic.GetFilesCountAsync(request.Filter);
            var response = new GetFilesByFilterResponse()
            {
                Items = fileData,
                TotalCount = fileCnt
            };
            return Ok(response);
        }
    }

    public class GetFilesByFilterResponse
    {
        public FileModelTableDto[] Items { get; set; }
        public int TotalCount { get; set; }
    }

    public class GetFilesByFilterRequest
    {
        public BaseFilter Filter { get; set; }
    }

    public class GetFileRequest
    {
        public int FileId { get; set; }
    }
}
