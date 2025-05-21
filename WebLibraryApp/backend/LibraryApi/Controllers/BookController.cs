using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly BookLogic _bookLogic;

        private readonly ILogger<BookController> _logger;
        public BookController(BookLogic BookLogic,
            ILogger<BookController> logger)
        {
            this._bookLogic = BookLogic;
            this._logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение всех книг пользователем с Id {userId}");

            var Books = _bookLogic.GetAllBooks();
            return Json(Books);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteBook([FromBody] DeleteBookRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Удаление книги {request.BookId} пользователем с Id {userId}");

            var isDeleted = await _bookLogic.DeleteBookAsync(request.BookId);
            return Ok(isDeleted);
        }

        [HttpPost]
        public async Task<IActionResult> GetBooksByFilter([FromBody] GetBooksRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение книг по фильтру пользователем с Id {userId}");

            var Books = await _bookLogic.GetBooksByFiltersAsync(request.Filter);
            var totalCnt = await _bookLogic.GetBooksCount(request.Filter);
            var response = new GetBooksResponse()
            {
                Items = Books,
                TotalCount = totalCnt
            };
            return Json(response);
        }

        [HttpPost]
        public async Task<IActionResult> SaveBook([FromBody] SaveBooksRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Добавление/редактирование книг пользователем с Id {userId}");

            await _bookLogic.SafeSave(request.Book);
            return Ok(true);
        }
    }

    public class GetBooksRequest
    {
        public BaseFilter? Filter { get; set; }
    }

    public class SaveBooksRequest
    {
        public BookDto Book { get; set; }
    }

    public class DeleteBookRequest
    {
        public int BookId { get; set; }
    }

    public class GetBooksResponse
    {
        public BookDto[] Items { get; set; }
        public int TotalCount { get; set; }
    }
}
