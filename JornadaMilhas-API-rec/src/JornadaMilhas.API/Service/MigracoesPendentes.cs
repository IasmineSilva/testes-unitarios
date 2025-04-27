using JornadaMilhas.Dados;
using Microsoft.EntityFrameworkCore;

namespace JornadaMilhas.API.Service;

public static class MigracoesPendentes
{
    public static void ExecuteMigration(this IApplicationBuilder app)
    {
        using (var serviceScope = app.ApplicationServices.CreateScope())
        {
            var serviceDb = serviceScope.ServiceProvider
                             .GetService<JornadaMilhasContext>();
           
            serviceDb!.Database.Migrate();
        }
    }
}
