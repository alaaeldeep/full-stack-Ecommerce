

using API.DTOs;
using APPLICATION.UnitOfWork;
using AutoMapper;
using DOMAIN.Entities;
using System.Linq.Expressions;

namespace SERVICES.Managers.ProductManager
{
	public class ProductManager : IProductManager
	{

		private readonly IUnitOfWork _unitOfWork;
		private readonly IMapper _mapper;
	


		public ProductManager(IUnitOfWork unitOfWork, IMapper mapper)
		{

			_mapper = mapper;
			_unitOfWork = unitOfWork;
			
		}

		public async Task<IEnumerable<ProductDto>> GetAllProducts(int? Producttype, int? Productbrand)
		{
			Expression<Func<Product, bool>> type;
			Expression<Func<Product, bool>> brand;

			if (Producttype == null) 
			{
				 type = Product => Product.ProductTypeId >0;
			} else
			{
				 type = Product => Product.ProductTypeId == Producttype;
			}

			if (Productbrand == null)
			{
				brand = Product => Product.ProductBrandId > 0;
			} else 
			{
				 brand = Product => Product.ProductBrandId == Productbrand; 
			}


		


		

			var products = await _unitOfWork.ProductRepository.GetAll(new List<string> { "ProductType", "ProductBrand" }, type,brand);

			return _mapper.Map<IEnumerable<ProductDto>>(products);
		}


		public async Task<ProductDto> GetProductById(int id)
		{
			var product = await _unitOfWork.ProductRepository.GetById(id);
			return _mapper.Map<ProductDto>(product);
		}

		public async Task<ProductFormDto> AddProduct(ProductFormDto ProductWriteDto)
		{
			
			await _unitOfWork.ProductRepository.AddOne(_mapper.Map<Product>(ProductWriteDto));
			await _unitOfWork.Complete();
			return ProductWriteDto;
		}

		public async Task<IEnumerable<ProductTypeDto>> GetAllProductTypes()
		{
			var result = await _unitOfWork.ProductTypeRepository.GetAll();
			return _mapper.Map<IEnumerable<ProductTypeDto>>(result);
		}

		public async Task<IEnumerable<ProductBrandDto>> GetAllProductBrands()
		{
			var result = await _unitOfWork.ProductBrandRepository.GetAll();
			return _mapper.Map<IEnumerable<ProductBrandDto>>(result);
		}

		public async Task DeleteProduct(int id)
		{
			await _unitOfWork.ProductRepository.Delete(id);
			await _unitOfWork.Complete();
		}
	}
}


