namespace ControleEstoque.Models
{
    public class ItemVenda
    {
        public int? id { get; set; }
        public int? idVenda { get; set;}
        public int? idProduto { get; set; }
        public int? idEstoque { get; set; }
        public float? precoProduto { get; set; }
        public float valorDesconto { get; set; }
    }
}
