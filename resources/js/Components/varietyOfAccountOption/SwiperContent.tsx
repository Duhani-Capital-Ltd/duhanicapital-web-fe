import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperContent() {
    return (
        <div className="h-max rounded-lg">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={false}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="w-full h-full"
            >
                <SwiperSlide className="rounded-lg text-start text-white font-semibold">
                    <div>
                        <img className='rounded-xl' src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg" alt="" />
                        <div className='mt-5 space-y-4 text-gray-600'>
                            <h4 className='text-2xl text-black'>Currinces</h4>
                            <p className='font-extralight'>Trade major, minor, and excotic currency pairs with competitive spreads and laverage, accessing the world's largest financial markets</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-lg text-start text-white font-semibold">
                    <div>
                        <img className='rounded-xl' src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg" alt="" />
                        <div className='mt-5 space-y-4 text-gray-600'>
                            <h4 className='text-2xl text-black'>Currinces</h4>
                            <p className='font-extralight'>Trade major, minor, and excotic currency pairs with competitive spreads and laverage, accessing the world's largest financial markets</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-lg text-start text-white font-semibold">
                    <div>
                        <img className='rounded-xl' src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg" alt="" />
                        <div className='mt-5 space-y-4 text-gray-600'>
                            <h4 className='text-2xl text-black'>Currinces</h4>
                            <p className='font-extralight'>Trade major, minor, and excotic currency pairs with competitive spreads and laverage, accessing the world's largest financial markets</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-lg text-start text-white font-semibold">
                    <div>
                        <img className='rounded-xl' src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg" alt="" />
                        <div className='mt-5 space-y-4 text-gray-600'>
                            <h4 className='text-2xl text-black'>Currinces</h4>
                            <p className='font-extralight'>Trade major, minor, and excotic currency pairs with competitive spreads and laverage, accessing the world's largest financial markets</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-lg text-start text-white font-semibold">
                    <div>
                        <img className='rounded-xl' src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg" alt="" />
                        <div className='mt-5 space-y-4 text-gray-600'>
                            <h4 className='text-2xl text-black'>Currinces</h4>
                            <p className='font-extralight'>Trade major, minor, and excotic currency pairs with competitive spreads and laverage, accessing the world's largest financial markets</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
