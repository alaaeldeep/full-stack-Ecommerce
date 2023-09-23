using APPLICATION.Repo;
using DOMAIN.Entities;
using Microsoft.EntityFrameworkCore;
using PERSISTENCE.AppContext;
using System.Linq.Expressions;

namespace APPLICATION.Repositories
{

	public class ProductRepositoy : BaseRepository<Product>, IProductRepository
	{
		public ProductRepositoy(AppDbContext context) : base(context)
		{
		}

		

		public async Task<IEnumerable<Product>> GetAll(IEnumerable<string>? includes, Expression<Func<Product, bool>>? type, Expression<Func<Product, bool>>? brand)
		{
			IQueryable<Product> query = _context.Set<Product>();
			if (type != null)
			{ 
				query = query.Where(type);
			}
			if (brand != null)
			{
				query = query.Where(brand);
			}


			foreach (var item in includes)
			{
				query = query.Include(item);
			}

			return await query.ToListAsync();
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