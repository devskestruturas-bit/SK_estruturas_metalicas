'use client'

import ContactVisual from '@/components/ContactVisual';
import { motion, Variants, Transition } from 'framer-motion';
import Image from 'next/image';

export default function Valores() {
  const cards = [
    { img: '/icon_valores_01.png', text: 'Valorização das pessoas' },
    { img: '/icon_valores_02.png', text: 'Ética e transparência' },
    { img: '/icon_valores_03.png', text: 'Comprometimento e união' },
    { img: '/icon_valores_04.png', text: 'Segurança e sustentabilidade' },
  ];

  // Tipagem do transition
  const defaultTransition: Transition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: defaultTransition },
  };

  const imgVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      className="relative w-full pt-[25%] sm:pt-[25%] lg:pt-[12%] 2xl:pt-[8%] bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_valores.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left">

        {/* Título */}
        <motion.h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold txt-dark-blue leading-tight mb-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: defaultTransition }}
          viewport={{ once: true, amount: 0.3 }}
        >
          NOSSA CULTURA E VALORES
        </motion.h2>

        {/* Shape azul */}
        <motion.div
          className="h-4 bg-[#39B2F7] mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: '100px', transition: defaultTransition }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-lg"
              variants={cardVariants}
            >
              <motion.div variants={imgVariants} className="mb-4">
                <Image
                  src={card.img}
                  alt={card.text}
                  width={120}
                  height={109}
                  className="object-contain"
                  priority
                />
              </motion.div>
              <motion.p
                className="text-center text-2xl md:text-xl xl:text-2xl font-semibold text-gray-800"
                variants={textVariants}
              >
                {card.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ContactVisual */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: defaultTransition }}
        viewport={{ once: true}}
        className="relative w-full mt-16"
      >
        <ContactVisual
          leftImage="/visao_left.png"
          rightImage="/visao_right.png"
          mobImage="/visao_mob.png"
        />
      </motion.div>
    </section>
  );
}
