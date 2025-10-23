// 'use client';

// import { useRef, useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import ContactVisual from '@/components/ContactVisual';

// export default function Processos() {
//   const imagens = [
//     { src: '/img_processos_01.png', text: 'Pavilhões industriais' },
//     { src: '/img_processos_02.png', text: 'Projetos personalizados' },
//     { src: '/img_processos_03.png', text: 'Mezaninos e ampliações' },
//   ];

//   const slides = [
//     '/carousel_processos_01.jpg',
//     '/carousel_processos_02.jpg',
//     '/carousel_processos_03.jpg',
//     '/carousel_processos_04.jpg',
//     '/carousel_processos_05.jpg',
//   ];

//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <section className="relative w-full pt-[25%] sm:pt-[8%] bg-cover bg-center">
//       <div className="sm:max-w-7xl max-w-full mx-auto px-0 md:px-12 flex flex-col items-start text-left">

//         {/* Título */}
//         <motion.div
//           className="flex items-center mb-4 w-full pl-6 sm:pl-0"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold txt-dark-blue leading-tight mr-4">
//             Soluções Sob Medida
//           </h2>

//           <motion.div
//             className="h-[4px] bg-[#0A3274] rounded-full desk"
//             initial={{ width: 0 }}
//             whileInView={{ width: '40%' }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//             viewport={{ once: true }}
//           />
//         </motion.div>

//         {/* Shape azul */}
//         <motion.div
//           className="h-4 bg-[#39B2F7] mb-12 ml-6 sm:ml-0"
//           initial={{ width: 0 }}
//           whileInView={{ width: '15%' }}
//           transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
//           viewport={{ once: true }}
//         />

//         {/* Imagens verticais */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 gap-20 w-full mb-32">
//           {imagens.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative sm:w-full w-2/3 h-auto aspect-[3/4]">
//                 <Image
//                   src={item.src}
//                   alt={item.text}
//                   fill
//                   sizes="(max-width: 768px) 70vw, 30vw"
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//               </div>
//               <p className="mt-6 text-2xl font-semibold txt-dark-blue text-center">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Carrossel */}
//         <div className="relative w-full mx-auto mb-32 sm:scale-110 scale-100 px-4 sm:px-0">

//           {/* Botões */}
//           <div className="absolute top-1/2 left-4 sm:left-12 md:left-24 lg:left-40 xl:left-56 transform -translate-y-1/2 z-30">
//             <button
//               ref={prevRef}
//               className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0A3274] rounded-lg flex items-center justify-center text-white cursor-pointer"
//             >
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
//               </svg>
//             </button>
//           </div>

//           <div className="absolute top-1/2 right-4 sm:right-12 md:right-24 lg:right-40 xl:right-56 transform -translate-y-1/2 z-30">
//             <button
//               ref={nextRef}
//               className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#0A3274] rounded-lg flex items-center justify-center text-white cursor-pointer"
//             >
//               <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
//                 <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
//               </svg>
//             </button>
//           </div>

//           {/* Swiper */}
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={40}
//             slidesPerView={1.5}
//             centeredSlides
//             loop
//             grabCursor
//             className="mySwiper"
//             onBeforeInit={(swiper) => {
//               // @ts-ignore
//               swiper.params.navigation.prevEl = prevRef.current;
//               // @ts-ignore
//               swiper.params.navigation.nextEl = nextRef.current;
//             }}
//             onSwiper={(swiper) => {
//               setTimeout(() => {
//                 // @ts-ignore
//                 swiper.navigation.init();
//                 // @ts-ignore
//                 swiper.navigation.update();
//               }, 0);
//             }}
//             breakpoints={{
//               320: { slidesPerView: 1.4, spaceBetween: 10 },
//               480: { slidesPerView: 2.6, spaceBetween: 14 },
//               640: { slidesPerView: 1.3, spaceBetween: 28 },
//               768: { slidesPerView: 1.4, spaceBetween: 32 },
//               1024: { slidesPerView: 1.5, spaceBetween: 40 },
//               1280: { slidesPerView: 1.6, spaceBetween: 48 },
//               1536: { slidesPerView: 1.7, spaceBetween: 56 },
//             }}
//           >
//             {slides.map((src, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className="relative flex items-center justify-center cursor-pointer"
//                   onClick={() => setSelectedImage(src)}
//                 >
//                   <div className="absolute w-[92%] h-[92%] bg-[#39B2F7] z-0" />
//                   <div className="relative z-10 w-full h-auto aspect-[16/9]">
//                     <Image
//                       src={src}
//                       alt={`Slide ${index + 1}`}
//                       fill
//                       sizes="(max-width: 768px) 90vw, 60vw"
//                       className="object-cover shadow-xl"
//                     />
//                   </div>
//                   <motion.div
//                     className="absolute bottom-2 right-1 bg-[#0A3274] text-white text-[10px] sm:text-[12px] px-[5px] py-[3px] z-20 flex items-center gap-2 select-none"
//                   >
//                     <span>Clique para ver</span>
//                   </motion.div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           <style jsx global>{`
//             .mySwiper .swiper-slide {
//               transition: transform 0.4s ease, opacity 0.4s ease;
//               opacity: 0.7;
//             }
//             .mySwiper .swiper-slide-active {
//               transform: scale(1.05);
//               opacity: 1;
//               z-index: 10;
//             }
//           `}</style>
//         </div>

//         {/* Modal */}
//         {selectedImage && (
//           <div
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] cursor-pointer"
//             onClick={() => setSelectedImage(null)}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="relative w-[90%] h-[90%] max-w-[90%] max-h-[90%]"
//             >
//               <Image
//                 src={selectedImage}
//                 alt="Imagem ampliada"
//                 fill
//                 sizes="100vw"
//                 className="object-contain rounded-lg shadow-2xl"
//               />
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
