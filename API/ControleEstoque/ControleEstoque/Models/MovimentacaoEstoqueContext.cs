using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstoque.Models
{
    public class MovimentacaoEstoqueContext : DbContext
    {
        public MovimentacaoEstoqueContext(DbContextOptions<MovimentacaoEstoqueContext> options) : base(options)
        {
        }

        public DbSet<MovimentacaoEstoque> movimentacoesEstoque { get; set; } = null!;
    }
}
