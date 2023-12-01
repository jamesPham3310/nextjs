'use client';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageWrapper } from '..';
// import function to register Swiper custom elements

function SliderComponent({ data }: any) {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView={3}
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
        className="mySwiper swiper-cs"
      >
        {data.map((item: any) => (
          <SwiperSlide key={item.src} className="h-[172px] swiper-slide-cs ">
            <ImageWrapper {...item} wrapper="h-[172px]" className="img-overwrite" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderComponent;
