'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ContactVisual from "../components/ContactVisual";

export default function Hero() {
  const line1 = 'ESTAMOS PRONTOS PARA';
  const line2 = 'TRANSFORMAR O SEU NEGÓCIO!';
  const smallText = 'Na SK Estruturas Metálicas, cada projeto é tratado com excelência e dedicação.';

  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const smallTextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Cada letra já começa invisível e deslocada (evita flicker)
  const splitText = (text: string) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        // inline-block para permitir animação no eixo Y
        // estilo inline inicial para evitar "flash" antes do GSAP executar
        style={{ display: 'inline-block', opacity: 0, transform: 'translateY(40px)' }}
        className={char === ' ' ? 'w-[10px] inline-block' : ''}
      >
        {char}
      </span>
    ));

  useEffect(() => {
    // timeline com defaults
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
    });

    // Fundo: começa em scale 1.2 (definido inline no div do bg) -> anima para 1
    // if (bgRef.current) {
    //   gsap.to(bgRef.current, { scale: 1, duration: 20, ease: 'power1.inOut' });
    // }

    // Linha 1 letras
    if (line1Ref.current) {
      const letters1 = Array.from(line1Ref.current.children) as HTMLElement[];
      tl.to(
        letters1,
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.4,
        },
        0
      );
    }

    // Linha 2 letras (começam junto, mas com pequeno offset opcional)
    if (line2Ref.current) {
      const letters2 = Array.from(line2Ref.current.children) as HTMLElement[];
      tl.to(
        letters2,
        {
          y: 0,
          opacity: 1,
          stagger: 0.03,
          duration: 0.4,
          delay:0.4,
        },
        0 
      );
    }

    // Texto pequeno (inicia junto)
    if (smallTextRef.current) {
      tl.to(
        smallTextRef.current,
        { opacity: 1, y: 0,delay:0.6, duration: 0.6 },
        0
      );
    }

    // Botão (inicia junto)
    if (buttonRef.current) {
      tl.to(
        buttonRef.current,
        { opacity: 1, scale: 1,delay:0.8, duration: 0.2 },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-[750px] md:h-[850px] sm:h-[700px] flex justify-start items-start bg-gray-100">
        {/* IMAGEM DE FUNDO */}
        <div
          ref={bgRef}
          style={{ transform: 'scale(1)' }}
          className="absolute left-0 w-full h-full"
        >
          <Image
            src="/bg_hero.jpg"
            alt="imagem SK"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* CONTEÚDO */}
        <div
          className="absolute pb-0 md:pb-40 lg:pb-0 xl:pb-40 flex flex-col pt-[30%] sm:pt-[0%] justify-start sm:justify-center items-center sm:items-start
          pl-[5%] md:pl-[4%] xl:pl-[12%] pr-[5%] sm:pr-0 w-full md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-2/3 h-full"
        >
          {/* Linha 1 */}
          <h1
            ref={line1Ref}
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[34px] 2xl:text-5xl font-bold mb-1 txt-dark-blue text-center lg:text-left leading-tight flex flex-wrap"
          >
            {splitText(line1)}
          </h1>

          {/* Linha 2 */}
          <h1
            ref={line2Ref}
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[34px] 2xl:text-5xl font-bold mb-4 txt-dark-blue text-center lg:text-left leading-tight flex flex-wrap"
          >
            {splitText(line2)}
          </h1>

          {/* Texto pequeno */}
          <p
            ref={smallTextRef}
            // começa invisível via class tailwind
            className="opacity-0 translate-y-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-md 2xl:text-xl txt-dark-blue mb-4 text-center md:text-left w-[70%] md:w-[60%] sm:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[45%]"
            style={{ transform: 'translateY(20px)' }}
          >
            {smallText}
          </p>

          {/* Botão */}
          <button
            ref={buttonRef}
            className="opacity-0 transform scale-95 relative text-white rounded-full cursor-pointer overflow-hidden 
              text-sm sm:text-base md:text-lg lg:text-lg xl:text-md 2xl:text-xl
              py-3 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10
              w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[65%] 2xl:w-2/5 duration-500 bg-[#0A3274] hover:bg-[#39B2F7]"
            style={{ transform: 'scale(0.95)' }}
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>
      </div>

      <a
        href="https://wa.me/555131776005"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <ContactVisual
          leftImage="/left-image.png"
          rightImage="/right-image.png"
          mobImage="/fale_conosco_mob.png"
        />
      </a>
    </>
  );
}
