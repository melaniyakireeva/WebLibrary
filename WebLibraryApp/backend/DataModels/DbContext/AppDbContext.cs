using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibraryApp.Auth;
using DataModels.DbModels;
using Microsoft.EntityFrameworkCore;

namespace DataModels.DbContext
{
    public class AppDbContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<LogEntry> LogEntries { get; set; }
        public DbSet<FileModel> Files { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Book> Books { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }
         
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().
                HasIndex(x => x.Login).IsUnique();

            var user = new User()
            {
                Id = 1,
                Login = "ivan",
                Name = "Иван",
                Surname = "Иванович",
                Email = "ivan@mail.ru",
                Password = "ivan1234",
                Role = Role.User
            };
            var expert = new User()
            {
                Id = 2,
                Login = "sergey",
                Name = "Сергей",
                Surname = "Сергеевич",
                Email = "sergey@mail.ru",
                Password = "sergey1234",
                Role = Role.Expert
            };
            var admin = new User()
            {
                Id = 3,
                Login = "admin",
                Name = "Админ",
                Surname = "Админович",
                Email = "admin@mail.ru",
                Password = "admin1234",
                Role = Role.Admin
            };

            builder.Entity<User>().HasData(
                user,
                expert,
                admin
            );

            builder.Entity<Author>().Property(x => x.Surname).HasMaxLength(40);
            builder.Entity<Author>().Property(x => x.Name).HasMaxLength(40);
            builder.Entity<Author>().Property(x => x.Patronym).HasMaxLength(40);

            builder.Entity<Genre>().Property(x => x.Name).HasMaxLength(60);

            builder.Entity<Book>().Property(x => x.Name).HasMaxLength(90);

            builder.Entity<Genre>().HasData(new Genre[] {
                new Genre() { Id = 1, Name = "Научная литература" },
                new Genre() { Id = 2, Name = "Детектив" },
                new Genre() { Id = 3, Name = "Фантастика" },
                new Genre() { Id = 4, Name = "Комиксы" },
                new Genre() { Id = 5, Name = "Техническая литература" },
                new Genre() { Id = 6, Name = "Научная фантастика" },
                new Genre() { Id = 7, Name = "Былины" },
                new Genre() { Id = 8, Name = "Художественная литература" },
            });

            builder.Entity<Author>().HasData(new Author[]
            {
                new Author()
                {
                    Id = 1000,
                    Name = "Александр",
                    Surname = "Пушкин",
                    Patronym = "Сергеевич"
                },
                new Author()
                {
                    Id = 1001,
                    Name = "Антон",
                    Surname = "Чехов",
                    Patronym = "Павлович"
                },
                new Author()
                {
                    Id = 1002,
                    Name = "Иван",
                    Surname = "Тургенев",
                    Patronym = "Сергеевич"
                },
            });

            builder.Entity<Book>().HasData(new Book[]
            {
                new Book()
                {
                    Id = 1000,
                    Name = "Евгений Онегин",
                    Description = "Можно сказать, что весь XIX век прошел под знаком А. С. Пушкина.",
                    ISBN = "9785389049031",
                    Cipher = "3580106097",
                    Price = 267,
                    PublishYear = 2021,
                    ReceiptDate = new DateTime(2022, 3, 3).ToUniversalTime(),
                    State = State.Free,
                    GenreValId = 8,
                    AuthorValId = 1000
                },
                new Book()
                {
                    Id = 1001,
                    Name = "Руслан и Людмила",
                    Description = "Литературная репутация Пушкина складывалась во многом благодаря популярности его поэм.",
                    ISBN = "9785389135864",
                    Cipher = "3121856336",
                    Price = 375,
                    PublishYear = 2021,
                    ReceiptDate = new DateTime(2023, 1, 2).ToUniversalTime(),
                    State = State.Free,
                    GenreValId = 8,
                    AuthorValId = 1000
                },
            });
        }
    }
}
