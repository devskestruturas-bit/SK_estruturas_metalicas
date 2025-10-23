'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Processos() {
  const cards = [
    {
      img: '/processo_01.jpg',
      title: 'Recebimento e Estocagem',
      description: 'Cortes e encaixes precisos, de acordo com o projeto executado.'
    },
    {
      img: '/processo_02.jpg',
      title: 'Preparação e Montagem',
      description: 'Cortes e encaixes precisos, de acordo com o projeto executado.'
    },
    {
      img: '/processo_03.jpg',
      title: 'Solda e Pintura',
      description: 'Cortes e encaixes precisos, de acordo com o projeto executado.'
    }
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  }

  return (
    <section className="relative w-full pt-[25%] sm:pt-[25%] lg:pt-[12%] 2xl:pt-[8%] pb-32 bg-cover bg-center">
      <div className="sm:max-w-7xl max-w-full mx-auto px-0 md:px-12 flex flex-col items-start text-left pb-0 ">
        {/* Texto 1 - ESTRUTURAÇÃO METÁLICA */}
        <motion.h2
          className="text-xl sm:text-3xl md:text-3xl lg:text-3xl txt-dark-blue mb-2 pl-6 sm:pl-0"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ESTRUTURAÇÃO METÁLICA
        </motion.h2>

        {/* Título + risquinho */}
        <motion.div
          className="flex items-center mb-4 w-full pl-6 sm:pl-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold txt-dark-blue leading-tight mr-4">
            NOSSOS PARCEIROS
          </h2>
          <motion.div
            className="h-[4px] bg-[#0A3274] rounded-full desk"
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Shape azul */}
        <motion.div
          className="h-4 bg-[#39B2F7] mb-12 ml-6 sm:ml-0"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="sm:max-w-7xl max-w-full mx-auto px-6 md:px-12 flex flex-col sm:flex-row gap-6">
        {cards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={index}
              className="relative w-full sm:w-[30%] h-[300px] sm:h-[500px] overflow-hidden shadow-lg cursor-pointer "
              onClick={() => toggleCard(index)}
            >
              <Image src={card.img} alt={card.title} fill className="object-cover " />

              {/* Overlay azul */}
              <motion.div
                className="absolute bottom-0 w-full bg-[#0A3274]/90 text-white flex flex-col h-[30%] items-center justify-center p-4 gap-2 rounded-b-lg"
                animate={{ height: isActive ? '50%' : '30%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Seta acima do título */}
                <motion.div
                  animate={{ rotate: isActive ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <FaChevronDown className="text-white text-xl" />
                </motion.div>

                <h3 className="font-bold text-lg sm:text-xl xl:text-2xl text-center">
                  {card.title}
                </h3>

                {isActive && (
                  <p className="text-sm sm:text-base xl:text-lg text-center mt-2">
                    {card.description}
                  </p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ---------- TEXTO ABAIXO DOS CARDS ---------- */}
      <div className="sm:max-w-7xl max-w-full mx-auto px-6 md:px-12 mt-16 text-center  flex flex-col gap-2">
        <p className="text-lg sm:text-4xl txt-dark-blue">
          <strong>Na SK, cada obra passa por um processo produtivo rigoroso,</strong>
          garantindo <strong>desempenho</strong> e <strong>segurança</strong> em todas as etapas.
        </p>
        <p className="text-base sm:text-2xl pt-[2%] txt-dark-blue">
          Todo o sistema é monitorado de perto pela equipe técnica, assegurando eficiência e conformidade com as normas da engenharia moderna.
        </p>
      </div>
    </section>
  )
}
