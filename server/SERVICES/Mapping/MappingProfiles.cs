using API.DTOs;
using AutoMapper;
using DOMAIN.Entities;

namespace API.helpers
{
	public class MappingProfiles : Profile
	{
		public MappingProfiles()
		{
			CreateMap<Product, ProductDto>()
				.ForMember(destination => destination.ProductBrand, src => src.MapFrom(source => source.ProductBrand.Name))
				.ForMember(destination => destination.ProductType, src => src.MapFrom(source => source.ProductType.Name))
				//.ForMember(destination => destination.PictureUrl, src => src.MapFrom(source => "https://localhost:7265/images/" + source.PictureUrl))
				.ReverseMap();

			CreateMap<ProductFormDto, Product>().ForMember(des=>des.PictureUrl,src=>src.MapFrom(src=> "https://localhost:7265/images/products/" + src.Image.FileName));

			CreateMap<ProductType, ProductTypeDto>();
			CreateMap<ProductBrand, ProductBrandDto>();

		}
	}
}
