'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <section className="relative w-full bg-[#F2F3F4] overflow-hidden py-0 sm:py-24  px-[12%] md:px-[4%] xl:px-[12%]">
      {/* Imagem vertical esquerda */}
      <div className="absolute top-0 left-0 h-full z-0 hidden lg:block">
        <Image
          src="/img_vertical.png"
          alt="Imagem vertical"
          width={400}
          height={500}
          className="object-cover h-full w-auto"
          priority
        />
      </div>

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-20  py-0 sm:py-24  relative z-10">
        {/* Imagem principal */}
        <motion.div
          className="w-full lg:w-2/4 xl:w-2/3 2xl:w-2/4 h-96 lg:h-[600px]"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/img_quem-somos.jpg"
              alt="Quem Somos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Textos */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl txt-dark-blue mb-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            NOSSA HISTÓRIA
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold txt-dark-blue leading-tight mb-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            QUEM SOMOS
          </motion.h1>

          <motion.div
            className="h-4 bg-[#39B2F7] mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl txt-dark-blue leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Com duas décadas de atuação no mercado, a SK Estruturas Metálicas é especialista na fabricação e montagem de estruturas metálicas em todo o Sul do Brasil.
            <br /><br />
            Atendemos desde grandes indústrias e redes varejistas até obras menores, sempre com o mesmo padrão de qualidade e comprometimento. Com processos industrializados e tecnologia de ponta, garantimos precisão, agilidade e durabilidade em cada projeto.
            <br /><br />
            Além de contarmos com uma equipe experiente e engenheiros registrados no CREA/RS, garantindo segurança e responsabilidade técnica em cada etapa do processo.
          </motion.p>
        </div>
      </div>

      {/* ================================
         BLOCO — FUNDADOR DA SK
      ================================= */}
      <div className="w-full flex flex-col items-center justify-center py-24 relative z-10">

  <motion.h2
    className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl txt-white p-6 rounded-t-2xl text-center bg-dark-blue w-full max-w-full lg:max-w-3/4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    FUNDADOR DA SK
  </motion.h2>

  <motion.div
    className="w-full max-w-full lg:max-w-3/4 bg-white rounded-b-2xl lg:rounded-b-2xl shadow-xl 
               p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center z-50"
    initial={{ opacity: 1, scale: 1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
  >

    {/* Imagem em formato circular */}
    <motion.div
      className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] 
                 rounded-full overflow-hidden shadow-lg flex-shrink-0"
      initial={{ rotate: -5, opacity: 0, scale: 0.8  }}
      whileInView={{ rotate: 0, opacity: 1, scale: 1  }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Image
        src="/luis.png"
        alt="Fundador da SK - Luis Carlos Schmidt"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </motion.div>

    {/* Conteúdo */}
    <div className="flex flex-col justify-center text-center lg:text-left">
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold txt-dark-blue mb-4"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Luis Carlos Schmidt
      </motion.h1>

      <motion.div
        className="h-3 w-24 bg-[#39B2F7] mb-6 mx-auto lg:mx-0"
        initial={{ width: 0 }}
        whileInView={{ width: "96px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      <motion.p
        className="text-sm sm:text-base lg:text-lg xl:text-lg txt-dark-blue leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Desde muito jovem, Schmidt já via nas construções mais do que estruturas, 
        via a possibilidade de transformar sonhos em realidade.

        <br /><br />
        Com visão, coragem e muito trabalho, ele deu forma à SK Estruturas Metálicas, 
        construindo uma trajetória sólida, feita de dedicação e propósito.

        <br /><br />
        Hoje, mais de duas décadas depois, o que começou como o sonho de um menino 
        se tornou referência no mercado, mantendo vivo o mesmo espírito visionário 
        que moveu Schmidt desde o início.
      </motion.p>
    </div>
  </motion.div>
</div>

    </section>
  );
}
