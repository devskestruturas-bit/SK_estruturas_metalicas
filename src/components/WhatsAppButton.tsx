'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-28 right-6 z-50 flex items-center">
      {/* Shape animado do WhatsApp */}
      <motion.div
        className="bg-[#25D366] text-white rounded-full px-4 py-4 flex items-center shadow-lg cursor-pointer overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ width: 80 }}
        animate={{ width: isHovered ? 230 : 60 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={() => window.open("https://wa.me/555131776005", "_blank")}
      >
        {/* Ícone do WhatsApp */}
        <Image
          src="/whats_icon.png" // Substitua pelo caminho da sua imagem
          alt="WhatsApp"
          width={40}
          height={40}
        />

        {/* Texto dentro do shape */}
        <motion.span
          className="ml-3 whitespace-nowrap font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Fale com a gente
        </motion.span>
      </motion.div>
    </div>
  );
}
