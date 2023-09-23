namespace DOMAIN.Entities
{
	public class Product
	{
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
		public decimal Price { get; set; }
		public string PictureUrl { get; set; }
		public int ProductTypeId { get; set; }
		public ProductType ProductType { get; set; } = null;
		public int ProductBrandId { get; set; }
		public ProductBrand ProductBrand { get; set; } = null;
	}
}
