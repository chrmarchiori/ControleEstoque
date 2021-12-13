namespace ControleEstoque.Models
{
    public class MovimentacaoEstoque
    {
        public int? id { get; set; }
        public int? idEstoque { get; set; }
        public int? idProduto { get; set; }
        public int idItemVenda { get; set; }
        public float? quantidade { get; set; }
        public string? tipoMovimentacao { get; set; }
        public DateTime? dataMovimentacao { get; set; }
        public float? valorMovimentacao { get; set; }
    }
}
