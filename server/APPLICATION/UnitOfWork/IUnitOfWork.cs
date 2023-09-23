using APPLICATION.ProductRepositoy;
using APPLICATION.Repo;


namespace APPLICATION.UnitOfWork
{
	public interface IUnitOfWork
	{
		IProductRepository ProductRepository { get; }
		IProductTypeRepository ProductTypeRepository { get; }
		IProductBrandRepository ProductBrandRepository { get; }

		Task Complete();
	}
}
