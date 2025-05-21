using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using Mapster;
using Microsoft.AspNetCore.Mvc;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserLogic _userLogic;

        private readonly ILogger<UserController> _logger;

        public UserController(UserLogic authLogic,
            ILogger<UserController> logger)
        {
            this._userLogic = authLogic;
            this._logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение всех пользователей пользователем с Id {userId}");

            var allUsers = _userLogic.GetAllUsers();
            return Json(allUsers);
        }

        [HttpPost]
        public async Task<IActionResult> GetUsersByFilter([FromBody] GetUsersRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение пользователей по фильтру пользователем с Id {userId}");

            var users = _userLogic.GetUsersByFilter(request.Filter);
            var response = new GetUsersResponse()
            {
                Accounts = users,
            };
            return Json(response);
        }

        [HttpPost]
        public async Task<IActionResult> GetUser([FromBody] GetAccountById request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Получение пользователя с Id {request.UserId} пользователем с Id {userId}");

            var user = _userLogic.GetUser(request.UserId);
            return Json(user);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateUser([FromBody] UpdateAccountInfo request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Обновление пользователя с Id {request.Account.Id} пользователем с Id {userId}");

            var user = await _userLogic.UpdateUserAsync(request.Account);
            return Json(user);
        }

        [HttpPost]
        public async Task<IActionResult> DeleteUser(DeleteUserRequest request)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Удаление пользователя с Id {request.UserId} пользователем с Id {userId}");

            var isDeleted = await _userLogic.DeleteUserAsync(request.UserId);
            return Ok(isDeleted);
        }

        [HttpPost]
        public IActionResult SaveUser(RegisterAdminDto registerDto)
        {
            var userIdStr = HttpContext.Items["UserId"];
            int? userId = null;
            if (userIdStr != null)
            {
                userId = Convert.ToInt32(userIdStr);
            }
            this._logger.LogInformation($"Добавление пользователя пользователем с Id {userId}");

            _userLogic.SaveUser(registerDto);
            return Ok(true);
        }
    }
}

public class DeleteUserRequest
{
    public int UserId { get; set; }
}

public class GetUsersRequest
{
    public BaseFilter? Filter { get; set; }
}

public class GetUsersResponse
{
    public AccountDTO[] Accounts { get; set; }
}

public class GetAccountById
{
    public int UserId { get; set; }
}

public class UpdateAccountInfo
{
    public AccountDTO Account { get; set; }
}