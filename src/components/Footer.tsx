'use client';

import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('../bg_footer.jpg')" }}
    >
      {/* Overlay azul escuro */}
      <div className="w-full bg-blue-900/80">
        <div
          className="
            max-w-7xl mx-auto 
            px-6 md:px-12 
            pb-24 md:pb-56 pt-24 md:pt-48
            grid grid-cols-1 md:grid-cols-2 
            gap-16 md:gap-24
            text-center md:text-left
          "
        >
          {/* Coluna esquerda */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              SK ESTRUTURAS METÁLICAS
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Com duas décadas de atuação no mercado, a SK Estruturas Metálicas é
              especialista na fabricação e montagem de estruturas metálicas em todo
              o Sul do Brasil.
            </p>

            {/* Caixa de informações */}
            <div className="border border-white/60 rounded-xl p-6 flex flex-col space-y-4 max-w-md mx-auto md:mx-0 bg-white/5 backdrop-blur-sm">
              <div className="text-lg md:text-xl leading-relaxed">
                <strong>Telefones:</strong>{" "}
                <a href="tel:+555131776005" className="hover:underline px-1">
                  (51) 3177-6005
                </a>{" "}
                /{" "}
                <a href="tel:+555131776004" className="hover:underline px-1">
                  (51) 3177-6004
                </a>
              </div>

              <div className="border border-white/40 rounded-lg px-4 py-2 inline-block transition hover:bg-white/10">
                <strong>E-mail:</strong>{" "}
                <a
                  href="mailto:comercial@skestruturas.com.br"
                  className="hover:underline font-medium"
                >
                  comercial@skestruturas.com.br
                </a>
              </div>

              <div className="text-lg md:text-xl">
                <strong>Endereço:</strong> Rua Benno Johan Heinle, 207 – Industrial,
                Lindolfo Collor – RS
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              TRABALHE CONOSCO
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Confira as vagas disponíveis no nosso LinkedIn e envie seu currículo:
            </p>

            <div className="border text-[70%] md:text-[10px]  xl:text-lg border-white/40 rounded-lg px-4 py-3 inline-block transition hover:bg-white/10">
              <Link
                href="https://atracaodetalentos.totvs.app/skestruturasmetalicas"
                className="hover:underline "
                target="_blank"
              >
                https://atracaodetalentos.totvs.app/skestruturasmetalicas
              </Link>
            </div>

            <div className="border border-white/40 rounded-lg px-4 py-3 inline-block transition hover:bg-white/10">
              <a
                href="mailto:skestruturascurriculos@gmail.com"
                className="hover:underline font-medium"
              >
                Email para currículos: skestruturascurriculos@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div
          className="
            flex flex-col sm:flex-row justify-center sm:justify-between items-center 
            bg-white text-blue-900 
            gap-4 sm:gap-6 px-6 sm:px-12 py-5
          "
        >
          <p className="text-sm md:text-base font-medium text-center w-full">
            © {new Date().getFullYear()} SK Estruturas Metálicas — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 text-3xl sm:text-4xl">
            <Link
              href="https://www.instagram.com/skestruturas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              aria-label="Instagram"
              className="hover:text-blue-700 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="transition border border-blue-900 hover:bg-blue-900 hover:text-white p-2 rounded-lg"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
