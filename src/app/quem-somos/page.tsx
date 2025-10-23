'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <section className="relative w-full bg-[#F2F3F4] overflow-hidden py-20 px-[12%] md:px-[4%] xl:px-[12%]">
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

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-20 py-24 relative z-10">
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
    </section>
  );
}
