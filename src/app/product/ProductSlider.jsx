"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import '../globals.css'

function ProductSlider({ images }) {
    return (
        <div className='lg:w-3/6 lg:h-5/6 w-full h-auto rounded-xl overflow-hidden'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {images?.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductSlider