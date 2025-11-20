'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

type Props = {
  menu: { label: string; path: string }[];
  router: any;
  setMenuOpen: (open: boolean) => void;
};

export default function MotionMenu({ menu, router, setMenuOpen }: Props) {
  // prevenir scroll do body quando o menu estiver aberto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-[60px] left-0 w-full flex flex-col items-center pointer-events-auto z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Shape azul */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#0C1956] rounded-b-2xl"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />

        {/* Conteúdo */}
        <motion.div
          className="relative flex flex-col items-center py-20 space-y-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
        >
          {/* Menu */}
          <div className="flex flex-col items-start w-full space-y-6  text-xl">
            {menu.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer hover:text-blue-300 transition border-b-1 pb-2 w-full"
                onClick={() => {
                  const id = item.path.replace('/', '');
                  const section = document.getElementById(id);

                  if (item.label === 'Trabalhe Conosco') {
                    const footer = document.querySelector('footer');
                    footer?.scrollIntoView({ behavior: 'smooth' });
                  } else if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    router.push(item.path);
                  }

                  setMenuOpen(false);
                }}

              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Contatos */}
          <div className="flex flex-col items-center gap-4  text-center">
            <a
              href="mailto:comercial@skestruturas.com.br"
              className="bg-white text-[#0C1956] px-6 py-2 rounded-full font-semibold text-lg shadow-md hover:bg-[#39B2F7] hover:text-white transition"
            >
              comercial@skestruturas.com.br
            </a>

            <div className='flex w-full gap-2 justify-center items-center'>
              <a
              href="tel:+555131776005"
              className="bg-[#0C1956] border px-6 py-2 rounded-full text-white text-lg font-semibold shadow-md hover:bg-[#2D9CDB] transition"
            >
              (51) 3177-6005
            </a>

            <a
              href="tel:+555131776004"
              className="bg-[#0C1956] border px-6 py-2 rounded-full text-white text-lg font-semibold shadow-md hover:bg-[#2D9CDB] transition"
            >
              (51) 3177-6004
            </a>
            </div>
            
          </div>

          {/* Redes */}
          <div className="flex items-center gap-8 text-4xl ">
            <Link
              href="https://www.instagram.com/skestruturas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              aria-label="Instagram"
              className="hover:text-blue-700 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://br.linkedin.com/company/sk-estruturas-met%C3%A1licas"
              target="_blank"
              aria-label="LinkedIn"
              className="transition border border-blue-200 hover:bg-blue-900 hover:text-white p-2 rounded-lg"
            >
              <FaLinkedin />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
