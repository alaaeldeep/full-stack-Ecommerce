

using PERSISTENCE.AppContext;
using Microsoft.EntityFrameworkCore;
using APPLICATION.Repo;
using API.helpers;
using SERVICES.Managers.ProductManager;
using APPLICATION.Repositories;
using APPLICATION.UnitOfWork;

namespace ecommerce
{
	public class Program
	{
		public static void Main(string[] args)
		{

			var builder = WebApplication.CreateBuilder(args);
			#region default
			builder.Services.AddControllers();
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();
			#endregion

			#region database
			builder.Services.AddDbContext<AppDbContext>(opt =>
			{
				opt.UseSqlServer(builder.Configuration.GetConnectionString("default"));
			}
		);
			#endregion

			builder.Services.AddScoped<IProductRepository, ProductRepositoy>();
			builder.Services.AddScoped<IProductManager, ProductManager>();
			builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
			builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);


			#region cors
			builder.Services.AddCors(options =>
			{
				options.AddPolicy("p", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
			});
			#endregion


			var app = builder.Build();

			app.UseStaticFiles();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}
			app.UseCors("p");
			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}