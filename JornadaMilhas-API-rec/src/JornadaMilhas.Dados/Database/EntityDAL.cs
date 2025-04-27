using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace JornadaMilhas.Dados.Database;
public class EntityDAL<T> where T : class
{
    private readonly JornadaMilhasContext context;

    public EntityDAL(JornadaMilhasContext dbContext)
    {
        context = dbContext;
    }

    public async Task<IEnumerable<T>> Listar()
    {
        return await context.Set<T>().ToListAsync();
    }
    public async Task<IEnumerable<T>> ListaPaginadaAsync(int page, int pageSize)
    {

        return await this.context.Set<T>()
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync(); ;
    }

    public async Task Adicionar(T objeto)
    {
        await context.Set<T>().AddAsync(objeto);
        await context.SaveChangesAsync();
    }
    public async Task Atualizar(T objeto)
    {
        context.Set<T>().Update(objeto);
        await context.SaveChangesAsync();
    }
    public async Task Deletar(T objeto)
    {
        context.Set<T>().Remove(objeto);
        await context.SaveChangesAsync();
    }

    public T? RecuperarPor(Func<T, bool> condicao)
    {
        return context.Set<T>().FirstOrDefault(condicao);
    }

    public async Task<IEnumerable<T>> ListarPaginado(int page, int pageSize)
    {

        return await this.context.Set<T>()
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(); ;
    }

    public async Task<T?> UltimoRegistroAsync(Expression<Func<T, bool>> condicao = null)
    {
        IQueryable<T> query = context.Set<T>();
        if (condicao != null)
        {
            query = query.Where(condicao);
        }
        return await query.OrderByDescending(x => EF.Property<int>(x, "Id"))
                                       .FirstOrDefaultAsync();
    }
}
