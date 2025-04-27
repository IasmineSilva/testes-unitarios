using JornadaMilhas.API.DTO.Request;
using JornadaMilhas.API.Service;
using JornadaMilhas.Dados.Database;
using JornadaMilhas.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace JornadaMilhas.API.Endpoint;

public static class RotaExtensions
{
    public static void AddEndPointRota(this WebApplication app)
    {
        app.MapPost("/rota-viagem", async ([FromServices] RotaConverter converter, [FromServices] EntityDAL<Rota> entityDAL, [FromBody] RotaRequest rotaReq) =>
        {
            Rota rota = new();
            try
            {
                rota = converter.RequestToEntity(rotaReq);
                if (rota.EhValido)
                {
                    await entityDAL.Adicionar(converter.RequestToEntity(rotaReq));
                    return Results.Created("Rota criada com sucesso!", rotaReq);
                }
                throw new Exception("Rota inválida.");
            }
            catch (Exception ex)
            {
                return Results.Problem($"Erro:{rota.Erros} => {ex.Message}");
            }

        }).WithTags("Rota Viagem").WithSummary("Adiciona uma nova rota de viagem.").WithOpenApi().RequireAuthorization();

        app.MapGet("/rota-viagem/{id}", ([FromServices] RotaConverter converter, [FromServices] EntityDAL<Rota> entityDAL, int id) =>
        {
            return Results.Ok(converter.EntityToResponse(entityDAL.RecuperarPor(a => a.Id == id)!));
        }).WithTags("Rota Viagem").WithSummary("Obtem rota de viagem por id.").WithOpenApi().RequireAuthorization();

        app.MapDelete("/rota-viagem/{id}", async ([FromServices] RotaConverter converter, [FromServices] EntityDAL<Rota> entityDAL, int id) =>
        {
            var rota = entityDAL.RecuperarPor(a => a.Id == id);
            if (rota is null)
            {
                return Results.NotFound($"Rota com ID={id} para exclusão não encontrado.");
            }
            await entityDAL.Deletar(rota);
            return Results.NoContent();
        }).WithTags("Rota Viagem").WithSummary("Deleta uma rota de viagem por id.").WithOpenApi().RequireAuthorization();

        app.MapPut("/rota-viagem", async ([FromServices] RotaConverter converter, [FromServices] EntityDAL<Rota> entityDAL, [FromBody] RotaEditRequest rotaReq) =>
        {
            var rotaAtualizada = entityDAL.RecuperarPor(a => a.Id == rotaReq.id);
            var rotaConvertida = converter.RequestToEntity(rotaReq);
            if (rotaAtualizada is null)
            {
                return Results.NotFound($"Oferta com ID={rotaReq.id} para atualização não encontrado.");
            }
            rotaAtualizada.Origem = rotaReq.origem;
            rotaAtualizada.Destino = rotaReq.destino;
            await entityDAL.Atualizar(rotaAtualizada);
            return Results.NoContent();

        }).WithTags("Rota Viagem").WithSummary("Atualiza uma rota de viagem.").WithOpenApi().RequireAuthorization();

        app.MapGet("/rota-viagem/", async ([FromServices] RotaConverter converter, [FromServices] EntityDAL<Rota> entityDAL, [FromQuery] int pagina = 1, [FromQuery] int tamanhoPorPagina = 25) =>
        {
            var rotas = await entityDAL.ListarPaginado(pagina, tamanhoPorPagina);
            if (rotas is null) return Results.NotFound();
            return Results.Ok(converter.EntityListToResponseList(rotas));
        }).WithTags("Rota Viagem").WithSummary("Obtem a consulta de rota paginada.").WithOpenApi().RequireAuthorization();

    }
}
