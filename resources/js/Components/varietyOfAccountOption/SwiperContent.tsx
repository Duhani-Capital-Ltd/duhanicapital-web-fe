import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function SwiperContent() {
    return (
        <div className="rounded-lg h-max">
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
                <SwiperSlide className="font-semibold text-white rounded-lg text-start">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image_tplpvc.png"
                            alt=""
                        />
                        <div className="mt-5 space-y-4 text-gray-600">
                            <h4 className="text-2xl text-black">Currencies</h4>
                            <p className="font-extralight">
                                Trade major, minor, and exotic currency pairs
                                with competitive spreads and leverage, accessing
                                the world's largest financial market.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="font-semibold text-white rounded-lg text-start">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image-1_kjzuru.png"
                            alt=""
                        />
                        <div className="mt-5 space-y-4 text-gray-600">
                            <h4 className="text-2xl text-black">Gold</h4>
                            <p className="font-extralight">
                                Invest in gold to hedge against inflation and
                                economic uncertainty, benefiting from its
                                historical stability and value appreciation.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="font-semibold text-white rounded-lg text-start">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image-2_zhlane.png"
                            alt=""
                        />
                        <div className="mt-5 space-y-4 text-gray-600">
                            <h4 className="text-2xl text-black">Commodities</h4>
                            <p className="font-extralight">
                                Diversify your portfolio by trading commodities
                                like oil, silver, and agricultural products,
                                capitalizing on supply and demand trends.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="font-semibold text-white rounded-lg text-start">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649402/c10c56f0b2e0d8dc967e0ea327f17fe7_bafjpj.png"
                            alt=""
                        />
                        <div className="mt-5 space-y-4 text-gray-600">
                            <h4 className="text-2xl text-black">Stocks</h4>
                            <p className="font-extralight">
                                Diversify your portfolio by trading commodities
                                like oil, silver, and agricultural products,
                                capitalizing on supply and demand trends.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="font-semibold text-white rounded-lg text-start">
                    <div>
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730649274/image_tplpvc.png"
                            alt=""
                        />
                        <div className="mt-5 space-y-4 text-gray-600">
                            <h4 className="text-2xl text-black">Currencies</h4>
                            <p className="font-extralight">
                                Trade major, minor, and exotic currency pairs
                                with competitive spreads and leverage, accessing
                                the world's largest financial market.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
