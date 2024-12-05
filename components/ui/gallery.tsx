import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { galleryImages } from "@/data";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="relative h-[550px] rounded-2xl bg-red-50 sm:h-[650px] md:h-full 2xl:h-[550px] w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-2xl"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.image}
              alt=""
              className="object-cover w-full h-full object-left-top"
              unoptimized={true} // Add this property for animated images
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
