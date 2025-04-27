namespace JornadaMilhas.Dominio.Validacao;
public abstract class Valida : IValidavel
{
    private readonly Erros erros = new();
    public bool EhValido => erros.Count()==0;
    public Erros Erros => erros;
    protected abstract void Validar();
}
