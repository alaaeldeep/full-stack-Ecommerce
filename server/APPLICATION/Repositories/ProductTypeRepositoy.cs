using APPLICATION.Repo;
using DOMAIN.Entities;
using PERSISTENCE.AppContext;


namespace APPLICATION.Repositories
{

	public class ProductTypeRepositoy : BaseRepository<ProductType>, IProductTypeRepository
	{
		public ProductTypeRepositoy(AppDbContext context) : base(context)
		{
		}



	}
}



//public async Task<Product> GetProductById(int id)
//{
//	return await _context.Products
//		.Include(p => p.ProductType)
//		.Include(p => p.ProductBrand)
//		.FirstOrDefaultAsync(p => p.Id == id);
//}


//public async Task<IEnumerable<Product>> GetAllProducts()
//{
//	var ListOfProducts = await _context.Products
//		.Include(p => p.ProductType)
//		.Include(p => p.ProductBrand)
//		.ToListAsync();
//	return ListOfProducts;
//}


//public async Task AddProduct(Product product)
//{
//	await _context.Products.AddAsync(product);
//	_context.SaveChanges();
//	return;
//}


//public async Task<IReadOnlyList<ProductBrand>> GetProductBrands()
//{
//	return await _context.ProductBrands.ToListAsync();
//}


//public async Task<IReadOnlyList<ProductType>> GetProductTypes()
//{
//	return await _context.ProductTypes.ToListAsync();
//}
//public async Task<IEnumerable<Product>> GetAllProducts(string order = "order", int categoryType = 0, int skip = 1, int take = 5)
//{
//	var ListOfProducts = await _context.Products
//		.Include(p => p.ProductType)
//		.Include(p => p.ProductBrand)
//		.Where(p => categoryType == 0 ? p.ProductTypeId != 0 : p.ProductTypeId == categoryType)
//		.Skip((skip - 1) * take).Take(take)
//		.ToListAsync();


//	switch (order.ToLower())
//	{
//		case "price":
//			ListOfProducts = ListOfProducts.OrderBy(p => p.Price).ToList();
//			break;


//		case "price_dec":
//			ListOfProducts = ListOfProducts.OrderByDescending(p => p.Price).ToList();
//			break;


//		default:
//			ListOfProducts = ListOfProducts.OrderBy(p => p.Title).ToList(); break;

//	}
//	return ListOfProducts;
//}