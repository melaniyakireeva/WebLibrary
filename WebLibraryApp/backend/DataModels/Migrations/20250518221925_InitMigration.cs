using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DataModels.Migrations
{
    /// <inheritdoc />
    public partial class InitMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    Surname = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                    Patronym = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Size = table.Column<double>(type: "double precision", nullable: false),
                    FileName = table.Column<string>(type: "text", nullable: false),
                    FileExt = table.Column<string>(type: "text", nullable: false),
                    FileData = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Genres",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(60)", maxLength: 60, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genres", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LogEntries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CallSite = table.Column<string>(type: "text", nullable: true),
                    Date = table.Column<string>(type: "text", nullable: true),
                    Exception = table.Column<string>(type: "text", nullable: true),
                    Level = table.Column<string>(type: "text", nullable: true),
                    Logger = table.Column<string>(type: "text", nullable: true),
                    MachineName = table.Column<string>(type: "text", nullable: true),
                    Message = table.Column<string>(type: "text", nullable: true),
                    StackTrace = table.Column<string>(type: "text", nullable: true),
                    Thread = table.Column<string>(type: "text", nullable: true),
                    Username = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LogEntries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Login = table.Column<string>(type: "text", nullable: false),
                    LastVisitDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    ProfileIconId = table.Column<int>(type: "integer", nullable: true),
                    IsDisabled = table.Column<bool>(type: "boolean", nullable: true),
                    Role = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Files_ProfileIconId",
                        column: x => x.ProfileIconId,
                        principalTable: "Files",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "character varying(90)", maxLength: 90, nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Cipher = table.Column<string>(type: "text", nullable: false),
                    ISBN = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<decimal>(type: "numeric", nullable: true),
                    AuthorValId = table.Column<int>(type: "integer", nullable: false),
                    GenreValId = table.Column<int>(type: "integer", nullable: false),
                    PublishYear = table.Column<int>(type: "integer", nullable: true),
                    ReceiptDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    State = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Books_Authors_AuthorValId",
                        column: x => x.AuthorValId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Books_Genres_GenreValId",
                        column: x => x.GenreValId,
                        principalTable: "Genres",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookingData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BookId = table.Column<int>(type: "integer", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    BookingDateStart = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    BookingDateEnd = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingData", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BookingData_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookingData_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Name", "Patronym", "Surname" },
                values: new object[,]
                {
                    { 1000, "Александр", "Сергеевич", "Пушкин" },
                    { 1001, "Антон", "Павлович", "Чехов" },
                    { 1002, "Иван", "Сергеевич", "Тургенев" }
                });

            migrationBuilder.InsertData(
                table: "Genres",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Научная литература" },
                    { 2, "Детектив" },
                    { 3, "Фантастика" },
                    { 4, "Комиксы" },
                    { 5, "Техническая литература" },
                    { 6, "Научная фантастика" },
                    { 7, "Былины" },
                    { 8, "Художественная литература" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IsDisabled", "LastVisitDate", "Login", "Name", "Password", "ProfileIconId", "Role", "Surname" },
                values: new object[,]
                {
                    { 1, "ivan@mail.ru", null, null, "ivan", "Иван", "ivan1234", null, 2, "Иванович" },
                    { 2, "sergey@mail.ru", null, null, "sergey", "Сергей", "sergey1234", null, 1, "Сергеевич" },
                    { 3, "admin@mail.ru", null, null, "admin", "Админ", "admin1234", null, 0, "Админович" }
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "AuthorValId", "Cipher", "Description", "GenreValId", "ISBN", "Name", "Price", "PublishYear", "ReceiptDate", "State" },
                values: new object[,]
                {
                    { 1000, 1000, "3580106097", "Можно сказать, что весь XIX век прошел под знаком А. С. Пушкина.", 8, "9785389049031", "Евгений Онегин", 267m, 2021, new DateTimeOffset(new DateTime(2022, 3, 2, 21, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 0 },
                    { 1001, 1000, "3121856336", "Литературная репутация Пушкина складывалась во многом благодаря популярности его поэм.", 8, "9785389135864", "Руслан и Людмила", 375m, 2021, new DateTimeOffset(new DateTime(2023, 1, 1, 21, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)), 0 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookingData_BookId",
                table: "BookingData",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_BookingData_UserId",
                table: "BookingData",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_AuthorValId",
                table: "Books",
                column: "AuthorValId");

            migrationBuilder.CreateIndex(
                name: "IX_Books_GenreValId",
                table: "Books",
                column: "GenreValId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Login",
                table: "Users",
                column: "Login",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_ProfileIconId",
                table: "Users",
                column: "ProfileIconId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingData");

            migrationBuilder.DropTable(
                name: "LogEntries");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropTable(
                name: "Genres");

            migrationBuilder.DropTable(
                name: "Files");
        }
    }
}
