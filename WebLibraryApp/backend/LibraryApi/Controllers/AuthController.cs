using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System;
using LibraryApp.Auth;
using LibraryApp.Logics;
using Mapster;

namespace LibraryApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly ILogger<AuthController> _logger;

        private readonly AuthLogic _authLogic;
        private readonly UserLogic _userLogic;

        public AuthController(AuthLogic authLogic, UserLogic userLogic,
            ILogger<AuthController> logger)
        {
            this._authLogic = authLogic;
            this._userLogic = userLogic;
            this._logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Token(LoginDto loginDto)
        {
            try
            {
                var identity = _authLogic.GetUser(loginDto);
                if (identity == null)
                {
                    _logger.LogWarning($"Попытка авторизации с почтой {loginDto.Email}");
                    return BadRequest(new { errorText = "Invalid username or password." });
                }
                else if (identity.IsDisabled ?? false)
                {
                    _logger.LogWarning($"Попытка авторизации заблокированного пользователя с почтой {loginDto.Email}");
                    return BadRequest(new { errorText = "User is blocked." });
                }

                _logger.LogInformation($"Авторизации с почтой {loginDto.Email}");

                var now = DateTime.UtcNow;
                identity.LastVisitDate = now;
                await this._userLogic.UpdateUserAsync(identity.Adapt<AccountDTO>());

                var claims = new List<Claim>
                {
                    new Claim("UserId", identity.Id.ToString()),
                    new Claim(ClaimsIdentity.DefaultNameClaimType, identity.Email),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, identity.Role.ToString())
                };

                var jwt = new JwtSecurityToken(
                        issuer: JwtOptions.ISSUER,
                        audience: JwtOptions.AUDIENCE,
                        notBefore: now,
                        claims: claims,
                        expires: now.Add(TimeSpan.FromMinutes(JwtOptions.LIFETIME)),
                        signingCredentials: new SigningCredentials(JwtOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                var response = new
                {
                    access_token = encodedJwt,
                    username = identity.Name,
                    userid = identity.Id,
                    role = identity.Role
                };
                return Json(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordDto changePasswordDto)
        {
            try
            {
                var identity = _authLogic.GetUser(new LoginDto() { Email = changePasswordDto.Email, Password = changePasswordDto.OldPassword });
                if (identity == null)
                {
                    _logger.LogWarning($"Попытка смены пароля аккаунтом с почтой {changePasswordDto.Email}");
                    return BadRequest(new { errorText = "Invalid username or password." });
                }
                else if (identity.IsDisabled ?? false)
                {
                    _logger.LogWarning($"Попытка смены пароля заблокированного пользователя с почтой {changePasswordDto.Email}");
                    return BadRequest(new { errorText = "User is blocked." });
                }

                _logger.LogInformation($"Смена пароля пользователем с почтой {changePasswordDto.Email}");
                var isChanged = _authLogic.ChangePassword(changePasswordDto);
                return Ok(isChanged);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public IActionResult Register(RegisterDto registerDto)
        {
            try
            {
                _authLogic.RegisterUser(registerDto);
                _logger.LogWarning($"Регистрация аккаунта с почтой {registerDto.Email} и логином {registerDto.Login}");
                return Ok(registerDto);
            }
            catch (Exception ex)
            {
                _logger.LogWarning($"Некорректная попытка регистрации аккаунта с почтой {registerDto.Email} и логином {registerDto.Login}");
                return BadRequest(ex.Message);
            }
        }
    }
}
