using DOMAIN.Entities;
using Microsoft.EntityFrameworkCore;


namespace PERSISTENCE.AppContext
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}
        public DbSet<Product> Products { get; set; }
		public DbSet<ProductType> ProductTypes { get; set; }
		public DbSet<ProductBrand> ProductBrands { get; set; }

	}
}
