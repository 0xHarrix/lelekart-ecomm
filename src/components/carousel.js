import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import '../styles/DarkModeCarousel.css';

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper"
        style={{ height: '30rem' }}
      >
        <SwiperSlide><img src='FASHION.png' alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src='ELECTRONICS.png' alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src='pexels-pixabay-236086.jpg' alt="Slide 3" /></SwiperSlide>
      </Swiper> 
  );
};

export default Carousel;
