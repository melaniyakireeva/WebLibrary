using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthorController : Controller
    {
        private readonly AuthorLogic _authorLogic;

        private readonly ILogger<AuthorController> _logger;
        public AuthorController(AuthorLogic AuthorLogic,
            ILogger<AuthorController> logger) {
            this._authorLogic = AuthorLogic;
            this._logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuthors()
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение всех авторов пользователем с Id {userId}");

            var Authors = _authorLogic.GetAllAuthors();
            return Json(Authors);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteAuthor([FromBody] DeleteAuthorRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Удаление автора {request.AuthorId} пользователем с Id {userId}");

            var isDeleted = await _authorLogic.DeleteAuthorAsync(request.AuthorId);
            return Ok(isDeleted);
        }

        [HttpPost]
        public async Task<IActionResult> GetAuthorsByFilter([FromBody] GetAuthorsRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение авторов по фильтру пользователем с Id {userId}");

            var Authors = await _authorLogic.GetAuthorsByFiltersAsync(request.Filter);
            var totalCnt = await _authorLogic.GetAuthorsCount(request.Filter);
            var response = new GetAuthorsResponse()
            {
                Items = Authors,
                TotalCount = totalCnt
            };
            return Json(response);
        }

        [HttpPost]
        public async Task<IActionResult> SaveAuthor([FromBody] SaveAuthorsRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Добавление/редактирование автора пользователем с Id {userId}");

            await _authorLogic.SafeSave(request.Author);
            return Ok(true);
        }
    }

    public class GetAuthorsRequest
    {
        public BaseFilter? Filter { get; set; }
    }

    public class SaveAuthorsRequest
    {
        public AuthorDto Author { get; set; }
    }

    public class DeleteAuthorRequest
    {
        public int AuthorId { get; set; }
    }

    public class GetAuthorsResponse
    {
        public AuthorDto[] Items { get; set; }
        public int TotalCount { get; set; }
    }
}
