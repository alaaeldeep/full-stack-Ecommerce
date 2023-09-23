using APPLICATION.ProductRepositoy;
using DOMAIN.Entities;
using System.Linq.Expressions;

namespace APPLICATION.Repo
{
	public interface IProductRepository : IBaseRepository<Product>
	{
		Task<IEnumerable<Product>> GetAll(IEnumerable<string>? includes, Expression<Func<Product, bool>>? type, Expression<Func<Product, bool>>? brand);
	}
}
