// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./swiper.css";

const HomeSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="home/1.jpg" alt="" style={{ height: "100%" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="home/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="home/3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="home/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="home/5.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeSwiper;
