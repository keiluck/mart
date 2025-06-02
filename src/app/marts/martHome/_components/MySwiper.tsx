"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
];

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      style={{ borderRadius: 8,width: '100%', height: 200 }}
    >
      {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={url}
              alt={`slide-${idx}`}
              width={800}
              height={300}
              style={{ width: '100%', borderRadius: 4, objectFit: 'cover',background: '#ccc', padding: 5 }}
              priority
              unoptimized
            />
          </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
