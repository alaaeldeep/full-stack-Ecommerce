using DOMAIN.Entities;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
	public class ProductDto
	{
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
		public decimal Price { get; set; }
		public string PictureUrl { get; set; }
		public string ProductType { get; set;}
		public string ProductBrand { get; set; }
	}
	public class ProductWriteDto
	{
		public string Title { get; set; }
		public string Description { get; set; }
		public decimal Price { get; set; }
		public string PictureUrl { get; set; }
		public int ProductTypeId { get; set; }
		public int ProductBrandId { get; set; }
	}

	public class ProductFormDto
	{
		public string Title { get; set; }
		public string Description { get; set; }
		public decimal Price { get; set; }
		public IFormFile Image { get; set; }
		public int ProductTypeId { get; set; }
		public int ProductBrandId { get; set; }
	}
}
