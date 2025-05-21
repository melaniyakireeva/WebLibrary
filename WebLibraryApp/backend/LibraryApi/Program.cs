using LibraryApp.Auth;
using LibraryApp.Logics;
using LibraryApp.Middlewares;
using DataModels.DbContext;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using LibraryApp.Common;
using NLog.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

string connectionStr = builder.Configuration.GetConnectionString("DefaultConnection") ?? String.Empty;

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                      });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).
    AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,

            ValidIssuer = JwtOptions.ISSUER,

            ValidateAudience = true,

            ValidAudience = JwtOptions.AUDIENCE,

            ValidateLifetime = true,

            IssuerSigningKey = JwtOptions.GetSymmetricSecurityKey(),

            ValidateIssuerSigningKey = true,
        };
    });

builder.Services.AddDbContext<AppDbContext>(
    options => options.UseNpgsql(connectionStr, b => b.MigrationsAssembly("DataModels"))
);

builder.Services.AddTransient<AuthLogic>();

builder.Services.AddTransient<ParametersLogic>();

builder.Services.AddTransient<BookLogic>();

builder.Services.AddTransient<FileLogic>();

builder.Services.AddTransient<AuthorLogic>();

builder.Services.AddTransient<UserLogic>();

builder.Services.AddTransient<AuditLogic>();

builder.Services.RegisterMapsterConfiguration();

builder.Services.AddLogging(loggingBuilder =>
{
    loggingBuilder.ClearProviders();
    loggingBuilder.AddNLog();
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.UseMiddleware<JwtMiddleware>();

app.MapControllers();

app.Run();
