using API.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SERVICES.Managers.ProductManager
{
	public interface IProductManager
	{
		public Task<IEnumerable<ProductDto>> GetAllProducts(int? type,int? brand);
		public Task<ProductDto> GetProductById(int id);
		public Task<ProductFormDto> AddProduct(ProductFormDto ProductWriteDto);

		public Task<IEnumerable<ProductTypeDto>> GetAllProductTypes();
		public Task<IEnumerable<ProductBrandDto>> GetAllProductBrands();
		public Task DeleteProduct(int id);
	}
}
