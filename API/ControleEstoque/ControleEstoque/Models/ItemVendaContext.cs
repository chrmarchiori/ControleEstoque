using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ControleEstoque.Models
{
    public class ItemVendaContext : DbContext
    {
        public ItemVendaContext(DbContextOptions<ItemVendaContext> options) : base(options)
        {
        }

        public DbSet<ItemVenda> itensVenda { get; set; } = null!;
    }
}
