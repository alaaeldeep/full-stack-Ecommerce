using APPLICATION.ProductRepositoy;
using DOMAIN.Entities;
using System.Runtime.InteropServices;

namespace APPLICATION.Repo
{
	public interface IProductBrandRepository : IBaseRepository<ProductBrand>
	{
		//Task<IEnumerable<Product>> GetAllProducts();
		//Task<Product> GetProductById(int id);
		//Task<IReadOnlyList<ProductBrand>> GetProductBrands();
		//Task<IReadOnlyList<ProductType>> GetProductTypes();
		//Task AddProduct(Product product);
	}
}
