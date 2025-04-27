namespace JornadaMilhas.API.DTO.Request;

public record RotaEditRequest(int id, string origem, string destino): RotaRequest(origem,destino);
