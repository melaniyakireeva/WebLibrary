using System.IdentityModel.Tokens.Jwt;

namespace LibraryApp.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            if (context.Request.Headers.TryGetValue("Authorization", out var authHeader))
            {
                var token = authHeader.ToString().Replace("Bearer ", "");
                var handler = new JwtSecurityTokenHandler();
                var jwt = handler.ReadJwtToken(token);
                var userId = jwt.Claims.FirstOrDefault(x => x.Type == "UserId")?.Value;
                context.Items["UserId"] = userId;
            }

            await _next(context);
        }
    }
}
