'use client';

import { motion } from 'framer-motion';

interface ContactVisualProps {
  leftImage: string;
  rightImage: string;
  mobImage: string;
}

export default function ContactVisual({
  leftImage = "/left-image.png",
  rightImage = "/right-image.png",
  mobImage = "/fale_conosco_mob.png",
}: ContactVisualProps) {
  return (
    <div className="relative w-full h-[600px]  sm:h-[400px] md:h-[550px]  lg:h-[500px] xl:h-[500px] flex justify-center items-center">
      {/* Box branco de fundo */}
      <div className="absolute inset-0  w-full h-full  mx-auto"></div>

      {/* Imagem esquerda */}
      <motion.img
        src={leftImage}
        alt="Imagem esquerda"
        className="absolute w-11/12 2xl:w-4/6 object-cover desk"
        initial={{ x: 10, y: 30, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Imagem direita */}
      <motion.img
        src={rightImage}
        alt="Imagem direita"
        className="absolute w-11/12 2xl:w-4/6 object-cover desk"
        initial={{ x: -10, y: -30, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.img
        src={mobImage}
        alt="Imagem direita"
        className="w-3/4 sm:w-2/5 object-cover mob"
        initial={{  y: 20, opacity: 0 }}
        whileInView={{  y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
