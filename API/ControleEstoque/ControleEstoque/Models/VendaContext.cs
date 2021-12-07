using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstoque.Models
{
    public class VendaContext : DbContext  
    {
        public VendaContext(DbContextOptions<VendaContext> options) : base(options)
        {
        }

        public DbSet<Venda> vendas { get; set; } = null!;
    }
}
