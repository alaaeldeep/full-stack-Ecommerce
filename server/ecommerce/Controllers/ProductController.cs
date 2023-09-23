
using API.DTOs;


using Microsoft.AspNetCore.Mvc;
using SERVICES.Managers.ProductManager;
using System;
using System.Threading.Tasks;

namespace ecommerce.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProductController : ControllerBase
	{
		private readonly IProductManager _productManager;
		private readonly IWebHostEnvironment _webHostEnvironment;

		public ProductController(IProductManager productManager, IWebHostEnvironment webHostEnvironment)
		{
			_productManager = productManager;
			_webHostEnvironment = webHostEnvironment;
		}


		[HttpGet]
		public async Task<ActionResult<IReadOnlyList<ProductDto>>> GetProducts([FromQuery] int? brand, int? type)
		{
			var result = await _productManager.GetAllProducts(type, brand);
			return Ok(result);
		}


		[HttpGet("{id}")]
		public async Task<ActionResult<ProductDto>> GetProductById(int id)
		{
			var product = await _productManager.GetProductById(id);
			return product is null ? NotFound() : Ok(product);
		}


		[HttpPost]
		public async Task<ActionResult> CreateProduct([FromForm] ProductFormDto Product)
		{
			var file = Product.Image;

			var path = Path.Combine(_webHostEnvironment.WebRootPath, @$"images\products\{file.FileName}");

			using (FileStream Stream = new(path, FileMode.Create))
			{
				file.CopyTo(Stream);
			}

			await _productManager.AddProduct(Product);
			return Ok();
		}
	
		
		[HttpDelete("{id}")]
		public async Task<ActionResult> MyMethodAsync(int id)
		{
			await	_productManager.DeleteProduct(id);
			return NoContent();
		}


		[HttpGet("Brands")]
		public async Task<ActionResult<IEnumerable<ProductBrandDto>>> GetProductBrandss()
		{
			var ProductBrands = await _productManager.GetAllProductBrands();
			return Ok(ProductBrands);
		}


		[HttpGet("Types")]
		public async Task<ActionResult<IEnumerable<ProductTypeDto>>> GetProductTypes()
		{
			var result = await _productManager.GetAllProductTypes();
			return Ok(result);
		}
	}
}



