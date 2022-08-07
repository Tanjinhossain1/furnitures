import React, { useCallback, useEffect, useRef, useState } from 'react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Furniture from '../furnitures/Furniture';
import 'swiper/css/virtual'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';

const Architectures = () => {
    
    const { isLoading, data: products, refetch } = useQuery(['architectures'], () =>
    fetch('http://localhost:5000/furnitures').then(res =>
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
    let architectures;
    if(!isLoading){
         architectures = products.filter(architecture => architecture.category === 'architecture')
    }
    return (
        // <div style={{backgroundImage:`url(https://i.ibb.co/cJsKnvj/design.jpg)`}} className='bg-fixed '>
        <div className='w-3/4 mx-auto my-32'>
            <div className='md:flex justify-between mb-3 items-center'>
                <div>
                    <p className='text-3xl'>Architectures</p>
                </div>
                <div className='flex justify-end gap-10'>
                    <div className="text-end" onClick={handlePrev} >
                        <FontAwesomeIcon className='text-2xl text-gray-500' icon={faAngleLeft} />
                    </div>
                    <div className="next-arrow" onClick={handleNext} >
                        <FontAwesomeIcon className='text-2xl text-gray-500' icon={faAngleRight} />
                    </div>
                </div>
            </div>
            <Swiper
                ref={sliderRef}
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
                        slidesPerView: 4,
                    },


                }}
                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}


                spaceBetween={50}
                slidesPerView={2}
                autoplay={{
                    delay: 3500
                }}

            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >


                {
                    architectures.map((furniture, index) => <SwiperSlide key={index} ><Furniture refetch={refetch} furniture={furniture}  /> </SwiperSlide>)
                }

                {/* </div> */}

            </Swiper>
        </div>

    );
};

export default Architectures;