import React, { useEffect, useState } from 'react';
import Furniture from './Furniture';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('furnitures.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])

    return (
        // <div style={{backgroundImage:`url(https://i.ibb.co/cJsKnvj/design.jpg)`}} className='bg-fixed '>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            

            
            {/* <div className='2xl:w-[1700px] py-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> */}
                {
                    furnitures.map((furniture, index) => <SwiperSlide><Furniture SwiperSlide={SwiperSlide} furniture={furniture} key={index} /> </SwiperSlide> )
                    
                }
            {/* </div> */}
               
        </Swiper>
            
    );
};

export default Furnitures;