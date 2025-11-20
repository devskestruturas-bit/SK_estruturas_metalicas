'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Clientes() {
  return (
    <section className="relative w-full pt-0 sm:pt-[25%] lg:pt-[12%] 2xl:pt-[8%] bg-cover bg-center pb-0 md:pb-40 overflow-hidden">
      <div className="sm:max-w-7xl max-w-full mx-auto px-0 md:px-12 flex flex-col items-start text-left pb-0 md:pb-28">
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
            ALGUNS PARCEIROS
          </h2>
          <motion.div
            className="h-[4px] bg-[#0C1956] rounded-full desk"
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
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
      </div>

      {/* ---------- SEÇÃO IMAGEM FUNDO + CONTEÚDO ---------- */}
      <div className="relative w-full h-[400px] md:h-[400px] bg-[#F2F7FB]  overflow-visible flex items-center justify-between shadow-lg ">

        {/* ======== SHAPES DE FUNDO (DIREITA -> ESQUERDA) ======== */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute right-[200px] top-[-120px] w-[800px] h-[926px] desk "
        >
          <Image
            src="/shape_clientes.svg"
            alt="Shape decorativo"
            fill
            className="object-contain "
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute right-[-400px] top-[-120px] w-[800px] h-[926px] desk "
        >
          <Image
            src="/shape_clientes.svg"
            alt="Shape decorativo"
            fill
            className="object-contain "
          />
        </motion.div>

        {/* Fundo de imagem suave */}
        <Image src="/bg-clientes.jpg" alt="Fundo clientes" fill className="object-cover " />

        {/* Conteúdo interno */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center xl:justify-center px-6 md:px-16 gap-10">
          {/* Imagem do celular */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" w-[80%] md:w-[45%] flex justify-end pr-40 "
          >
            <Image src="/celular.png" alt="App no celular" width={300} height={450} className="object-contain desk" />
          </motion.div>

          {/* Imagem dos logos dos clientes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[90%] md:w-[45%] flex justify-start"
          >
            <Image src="/logos-clientes.png" alt="Logos dos clientes" width={650} height={400} className="object-contain desk" />
            <Image src="/logos-clientes-mob.png" alt="Logos dos clientes" width={650} height={400} className="object-contain mob" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
