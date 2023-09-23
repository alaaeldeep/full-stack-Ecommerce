

using DOMAIN.Entities;
using System.Linq.Expressions;

namespace APPLICATION.ProductRepositoy
{
	public interface IBaseRepository<T> where T : class
	{
		Task<IEnumerable<T>> GetAll();
		Task<T> GetById(int id);
		Task AddOne(T T);
		Task Delete(int id);
	}
}
