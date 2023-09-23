
using APPLICATION.Repo;
using PERSISTENCE.AppContext;

using DOMAIN.Entities;

namespace APPLICATION.UnitOfWork
{
	public class UnitOfWork : IUnitOfWork
	{

		private readonly AppDbContext _context;
		public IProductRepository ProductRepository { get; }
		public IProductTypeRepository ProductTypeRepository { get; }
		public IProductBrandRepository ProductBrandRepository { get; }

		public UnitOfWork(AppDbContext context)
		{
			_context = context;
			ProductRepository = new APPLICATION.Repositories.ProductRepositoy(context);
			ProductTypeRepository = new APPLICATION.Repositories.ProductTypeRepositoy(context);
			ProductBrandRepository = new APPLICATION.Repositories.ProductBrandRepositoy(context);
		}

		public async Task Complete()
		{
			await _context.SaveChangesAsync();
		}
	}
}
