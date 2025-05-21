using DataModels.DbContext;
using DataModels.DbModels;
using LibraryApp.Auth;
using LibraryApp.Filters;
using LibraryApp.Logics;
using Mapster;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using System.IO;

namespace LibraryApp.Logics
{
    public class FileLogic : BaseFilterLogic<FileModel>
    {
        private AppDbContext _context;
        private const long MAX_FILE_SIZE = 10 * 1024 * 1024; //10 mb - max size;
        public FileLogic(AppDbContext appDbContext)
        {
            this._context = appDbContext;
        }

        public async Task<int> UploadFile(IFormFile file, int? userId)
        {
            long fileSize = file.Length;
            if (fileSize > MAX_FILE_SIZE)
            {
                throw new Exception("File size is larger than limit");
            }

            using (MemoryStream memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);
                byte[] fileBytes = memoryStream.ToArray();
                string base64String = Convert.ToBase64String(fileBytes);
                FileModel fileModel = new FileModel();
                fileModel.FileName = file.FileName;
                fileModel.FileExt = Path.GetExtension(file.FileName);
                if (userId.HasValue)
                {
                    fileModel.Owner = this._context.Users.FirstOrDefault(x => x.Id == userId.Value);
                }
                fileModel.Size = fileSize;
                fileModel.FileData = base64String;
                this._context.Files.Add(fileModel);
                await this._context.SaveChangesAsync();
                return fileModel.Id;
            }
        }

        public async Task<FileModelDto> GetFileInfo(int fileId)
        {
            var fileModel = this._context.Files.FirstOrDefault(x => x.Id == fileId);
            return fileModel.Adapt<FileModelDto>();
        }

        public async Task<FileModelTableDto[]> GetAllFiles()
        {
            var fileModel = this._context.Files.Select(x => x.Adapt<FileModelTableDto>()).ToArray();
            return fileModel;
        }

        public async Task<FileModelTableDto[]> GetFilesByFilterAsync(BaseFilter filter)
        {
            var filesQuery = _context.Files.AsQueryable();
            filesQuery = this.ApplyFilter(filter, filesQuery);
            return filesQuery.ToArray().Adapt<FileModelTableDto[]>();
        }

        public async Task<int> GetFilesCountAsync(BaseFilter filterInfo)
        {
            var filesQuery = _context.Files.AsQueryable();
            filterInfo.ScopeParams = null;
            filterInfo.Paging = null;
            filesQuery = this.ApplyFilter(filterInfo, filesQuery);
            return filesQuery.Count();
        }
    }
}
