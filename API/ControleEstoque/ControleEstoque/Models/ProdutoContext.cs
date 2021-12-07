using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstoque.Models
{
    public class ProdutoContext : DbContext
    {
        public ProdutoContext(DbContextOptions<ProdutoContext> options) : base(options)
        {
        }

        public DbSet<Produto> produtos { get; set; } = null!;

    }
}
