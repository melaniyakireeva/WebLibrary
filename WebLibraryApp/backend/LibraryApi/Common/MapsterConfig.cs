using LibraryApp.Auth;
using DataModels.DbModels;
using Mapster;
using System;
using System.Reflection;

namespace LibraryApp.Common
{
    public static class MapsterConfig
    {
        public static void RegisterMapsterConfiguration(this IServiceCollection services)
        {
            TypeAdapterConfig.GlobalSettings.Scan(Assembly.GetExecutingAssembly());
        }
    }
}
