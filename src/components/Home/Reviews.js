import React, { useCallback,useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from "swiper";
import { useQuery } from '@tanstack/react-query';
import Furniture from '../furnitures/Furniture';

const Reviews = () => {
    const { isLoading, data: products, refetch } = useQuery(['architectures'], () =>
        fetch('https://furniture-ms4p.onrender.com/furnitures').then(res =>
            res.json()
        )
    )

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    if (isLoading) {
        return <button className='btn' >loading</button>
    }
    return (
        <div>
             <>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar,EffectCoverflow,Pagination, Autoplay]}
        effect={"coverflow"}
        breakpoints={{
            // when window width is >= 640px
            640: {
                width: 640,
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                width: 768,
                slidesPerView: 2,
            },
            1600: {
                width: 1600,
                slidesPerView: 3,
            },


        }}

        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
            delay: 3000
        }}
        coverflowEffect={{
          rotate: 200,
          stretch: 5,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {
                    products.map((furniture) => <SwiperSlide key={furniture._id} ><Furniture refetch={refetch} furniture={furniture} /> </SwiperSlide>)

                }
      </Swiper>
    </>
        </div>
    );
};

export default Reviews;