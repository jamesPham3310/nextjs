'use client';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlogComponent } from '../Blog';
// import function to register Swiper custom elements

function SliderComponent({ data }: any) {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        breakpoints={{
          376: {
            allowTouchMove: true,
          },
          767: {
            allowTouchMove: true,
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {data.slice(0, 2).map((item: any) => (
          <SwiperSlide key={'mobile' + item.image.url} className="swiper-slide-b ">
            <BlogComponent {...item} className="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderComponent;
