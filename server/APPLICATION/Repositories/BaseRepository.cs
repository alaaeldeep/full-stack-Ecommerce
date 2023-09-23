using APPLICATION.ProductRepositoy;
using Microsoft.EntityFrameworkCore;
using PERSISTENCE.AppContext;
using System.Linq.Expressions;

namespace APPLICATION.Repositories
{
	public class BaseRepository<T> : IBaseRepository<T> where T : class
	{
		protected readonly AppDbContext _context;
		public BaseRepository(AppDbContext context)
		{
			_context = context;
		}
		public async Task AddOne(T t)
		{
			await _context.Set<T>().AddAsync(t);
		}

		public async Task Delete(int id)
		{
		var entity= 	 await _context.Set<T>().FindAsync(id);
			if (entity != null)
			{	
				_context.Set<T>().Remove(entity);
			}else
			{
				throw new Exception("not Found");
			}
			
		}

		public virtual async Task<IEnumerable<T>> GetAll()
		{
		
			return await _context.Set<T>().ToListAsync();
		}

		public async Task<T> GetById(int id)
		{
			return await _context.Set<T>().FindAsync(id);
		}
	}
}
