using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ControleEstoque.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

        public DbSet<Estoque> estoques { get; set; } = null!;
        public DbSet<ItemVenda> itemVenda { get; set; } = null!;
        public DbSet<MovimentacaoEstoque> movimentacaoEstoque { get; set; } = null!;
        public DbSet<Produto> produto { get; set; } = null!;
        public DbSet<Venda> venda { get; set; } = null!;
    }
}
