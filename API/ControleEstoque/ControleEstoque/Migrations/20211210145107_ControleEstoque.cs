using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ControleEstoque.Migrations
{
    public partial class ControleEstoque : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "estoques",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    descricao = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_estoques", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "itemVenda",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idVenda = table.Column<int>(type: "integer", nullable: true),
                    idProduto = table.Column<int>(type: "integer", nullable: true),
                    idEstoque = table.Column<int>(type: "integer", nullable: true),
                    precoProduto = table.Column<float>(type: "real", nullable: true),
                    valorDesconto = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_itemVenda", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "movimentacaoEstoque",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    idEstoque = table.Column<int>(type: "integer", nullable: true),
                    idProduto = table.Column<int>(type: "integer", nullable: true),
                    idItemVenda = table.Column<int>(type: "integer", nullable: true),
                    quantidade = table.Column<float>(type: "real", nullable: true),
                    tipoMovimentacao = table.Column<string>(type: "text", nullable: true),
                    dataMovimentacao = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    valorMovimentacao = table.Column<float>(type: "real", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_movimentacaoEstoque", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "produto",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    descricao = table.Column<string>(type: "text", nullable: true),
                    preco = table.Column<float>(type: "real", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_produto", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "venda",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    dataVenda = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    quantidadeTotal = table.Column<int>(type: "integer", nullable: true),
                    valorVenda = table.Column<float>(type: "real", nullable: true),
                    valorDescontoTotal = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venda", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "estoques");

            migrationBuilder.DropTable(
                name: "itemVenda");

            migrationBuilder.DropTable(
                name: "movimentacaoEstoque");

            migrationBuilder.DropTable(
                name: "produto");

            migrationBuilder.DropTable(
                name: "venda");
        }
    }
}
