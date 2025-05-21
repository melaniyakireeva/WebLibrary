using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using DataModels.DbModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly ParametersLogic _genreLogic;

        private readonly ILogger<GenreController> _logger;

        public GenreController(ParametersLogic parametersLogic,
            ILogger<GenreController> logger)
        {
            this._genreLogic = parametersLogic;
            this._logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> GetGenresByFilter([FromBody] GetGenresRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение жанров по фильтру пользователем с Id {userId}");

            var parameters = await _genreLogic.GetParametersByFiltersAsync(request.Filter);
            var totalCnt = await _genreLogic.GetParametersCount(request.Filter);
            var response = new GetParametersResponse()
            {
                Items = parameters,
                TotalCount = totalCnt
            };
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> SaveGenre([FromBody] SaveGenreRequest request)
        {
            await _genreLogic.SafeSave(request.Genre);
            return Ok(true);
        }
    }

    public class SaveGenreRequest
    {
        public Genre Genre { get; set; }
    }

    public class GetGenresRequest
    {
        public BaseFilter? Filter { get; set; }
    }

    public class GetParametersResponse
    {
        public Genre[] Items { get; set; }
        public int TotalCount { get; set; }
    }
}
