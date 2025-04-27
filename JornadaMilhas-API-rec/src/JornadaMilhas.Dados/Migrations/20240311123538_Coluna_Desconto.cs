using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JornadaMilhas.Dados.Migrations
{
    /// <inheritdoc />
    public partial class Coluna_Desconto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Desconto",
                table: "OfertasViagem",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Desconto",
                table: "OfertasViagem");
        }
    }
}
