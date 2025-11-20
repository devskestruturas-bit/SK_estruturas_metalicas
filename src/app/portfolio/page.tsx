'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import ContactVisual from '@/components/ContactVisual';

export default function Portfolio() {
  const imagens = [
    { src: '/img_portfolio_01.png', text: 'Pavilhões industriais' },
    { src: '/img_portfolio_02.png', text: 'Projetos personalizados' },
    { src: '/img_portfolio_03.png', text: 'Mezaninos e ampliações' },
  ];

  const slides = [
    '/carousel_portfolio_01.jpg',
    '/carousel_portfolio_02.jpg',
    '/carousel_portfolio_03.jpg',
    '/carousel_portfolio_04.jpg',
    '/carousel_portfolio_05.jpg',
    '/carousel_portfolio_06.jpg',
    '/carousel_portfolio_07.jpg',
    '/carousel_portfolio_08.jpg',
    '/carousel_portfolio_09.jpg',
    '/carousel_portfolio_10.jpg',
  ];

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full pt-[25%] sm:pt-[25%] lg:pt-[12%] 2xl:pt-[8%] bg-cover bg-center">
      <div className="sm:max-w-7xl max-w-full mx-auto px-0 md:px-12 flex flex-col items-start text-left">

        {/* Título + risquinho */}
        <motion.div
          className="flex items-center mb-4 w-full pl-6 sm:pl-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold txt-dark-blue leading-tight mr-4">
            SOLUÇÕES SOB MEDIDA
          </h2>

          <motion.div
            className="h-[4px] bg-[#0C1956] rounded-full desk"
            initial={{ width: 0 }}
            whileInView={{ width: '30%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Shape azul */}
        <motion.div
          className="h-4 bg-[#9ECCFA] mb-12 ml-6 sm:ml-0"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Imagens verticais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 gap-20 w-full mb-32">
          {imagens.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={item.src}
                alt={item.text}
                width={600}
                height={800}
                className="sm:w-full w-2/3 h-auto object-cover"
                priority={index === 0}
              />
              <p className="mt-6 text-2xl font-semibold txt-dark-blue text-center">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------- CARROSSEL (BOTÕES CUSTOM + SWIPER) ---------- */}
        <div className="relative w-full mx-auto mb-32 sm:scale-110 scale-100 px-4 sm:px-0">

          {/* Botões customizados */}
          <div className="absolute top-1/2 left-4 sm:left-12 md:left-24 lg:left-40 xl:left-56 transform -translate-y-1/2 z-30">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0C1956] rounded-lg flex items-center justify-center text-white focus:outline-none cursor-pointer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 right-4 sm:right-12 md:right-24 lg:right-40 xl:right-56 transform -translate-y-1/2 z-30">
            <button
              ref={nextRef}
              type="button"
              aria-label="Next slide"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0C1956] rounded-lg flex items-center justify-center text-white focus:outline-none cursor-pointer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1.5}
            centeredSlides
            loop
            grabCursor
            className="mySwiper"
            onBeforeInit={(swiper) => {
              // @ts-ignore
              if (prevRef.current && nextRef.current) {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                try {
                  // @ts-ignore
                  if (swiper.navigation) {
                    // @ts-ignore
                    swiper.navigation.init();
                    // @ts-ignore
                    swiper.navigation.update();
                  }
                } catch (e) { /* ignore */ }
              }, 0);
            }}
            breakpoints={{
              320: { slidesPerView: 1.4, spaceBetween: 10 },
              480: { slidesPerView: 2.6, spaceBetween: 14 },
              640: { slidesPerView: 1.3, spaceBetween: 28 },
              768: { slidesPerView: 1.4, spaceBetween: 32 },
              1024: { slidesPerView: 1.5, spaceBetween: 40 },
              1280: { slidesPerView: 1.6, spaceBetween: 48 },
              1536: { slidesPerView: 1.7, spaceBetween: 56 },
            }}
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  {/* Fundo azul atrás da imagem */}
                  <div className="absolute w-[92%] h-[92%] bg-[#9ECCFA] z-0"></div>

                  {/* Imagem */}
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={1200}
                    height={800}
                    className="relative z-10 w-full object-cover shadow-xl h-auto transition-all duration-500 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Estilo de destaque no slide central */}
          <style jsx global>{`
            .mySwiper .swiper-slide {
              transition: transform 0.4s ease, opacity 0.4s ease;
              opacity: 0.7;
            }
            .mySwiper .swiper-slide-active {
              transform: scale(1.05);
              opacity: 1;
              z-index: 10;
            }
          `}</style>
        </div>

        {/* Modal para imagem em tela cheia */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-100 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
