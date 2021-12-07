namespace ControleEstoque.Models
{
    public class Venda
    {
        public int id { get; set; }
        public DateTime? dataVenda { get; set; }
        public int? quantidadeTotal { get; set; }
        public float? valorVenda { get; set; }
        public float valorDescontoTotal { get; set; }
    }
}
