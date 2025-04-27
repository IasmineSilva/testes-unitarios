namespace JornadaMilhas.API.DTO.Request;

public record OfertaViagemRequest(RotaRequest rota,PeriodoRequest periodo,double preco, double desconto);

