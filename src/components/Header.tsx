'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from "next/link";

const MotionMenu = dynamic(() => import('./MotionMenu'), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then((m) => m.FaInstagram), { ssr: false });
const FaLinkedin = dynamic(() => import('react-icons/fa').then((m) => m.FaLinkedin), { ssr: false });
const FaBars = dynamic(() => import('react-icons/fa').then((m) => m.FaBars), { ssr: false });
const FaTimes = dynamic(() => import('react-icons/fa').then((m) => m.FaTimes), { ssr: false });

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menu = [
    { label: 'Home', path: '/' },
    { label: 'Quem Somos', path: '/quem-somos' },
    { label: 'Valores', path: '/valores' },
    { label: 'Processos', path: '/processos' },
    { label: 'Portfólio', path: '/portfolio' },
    { label: 'Clientes', path: '/clientes' },
    { label: 'Trabalhe Conosco', path: '/trabalhe-conosco' },
  ];

  const notHome = pathname !== '/';

  const handleMenuClick = (item: { label: string; path: string }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Se clicar em "Trabalhe Conosco" → desce até o footer
    if (item.label === 'Trabalhe Conosco') {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }

    if (isMobile) {
      // No mobile → scroll suave até a seção correspondente
      const sectionId = item.path.replace('/', ''); // "/valores" -> "valores"
      const section = document.getElementById(sectionId || 'hero');

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      } else {
        // fallback: caso esteja fora da Home unificada
        router.push('/');
        setTimeout(() => {
          const sec = document.getElementById(sectionId || 'hero');
          sec?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }
    } else {
      // No desktop → comportamento normal
      router.push(item.path);
      setMenuOpen(false);
    }
  };

  return (
    <>
      {menuOpen && (
        <MotionMenu menu={menu} router={router} setMenuOpen={setMenuOpen} />
      )}

      <header className="fixed w-full z-50">
        <div
          className={`flex w-full items-center justify-between transition-colors ${
            scrolled || menuOpen || notHome ? 'bg-white shadow-md' : 'bg-white/30'
          }`}
        >
          {/* LOGO */}
          <div className="flex w-3/5 md:w-1/4 lg:w-1/4 xl:w-2/5 items-center pl-[12%] md:pl-[4%] xl:pl-[12%]">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="SK Estruturas Metálicas"
                width={220}
                height={60}
                className="object-contain xl:w-[220px] lg:w-[220px] md:w-[220px]"
                priority={false}
              />
            </Link>
          </div>

          {/* NAV DESKTOP */}
          <div className="hidden md:flex w-3/5 md:w-3/4 lg:w-3/4 xl:w-3/5 flex-col py-0 md:py-4 lg:pt-0">
            {/* Top bar */}
            <div className="hidden lg:flex relative justify-between items-center bg-[#0A3274] [clip-path:polygon(0%_0%,100%_0%,100%_100%,5%_100%)] text-white text-sm xl:text-[13px] lg:text-[12px] px-6 py-2 xl:py-1.5">
              <div className="flex pl-12 xl:pl-8 lg:pl-4 items-center gap-4 lg:gap-3">
                <a href="mailto:comercial@skestruturas.com.br" className="hover:underline">
                  comercial@skestruturas.com.br
                </a>
                <div className="h-6 w-px bg-white opacity-50"></div>
                <a href="tel:+555131776005" className="hover:underline">
                  (51) 3177-6005
                </a>
                <div className="h-6 w-px bg-white opacity-50"></div>
                <a href="tel:+555131776004" className="hover:underline">
                  (51) 3177-6004
                </a>
              </div>
              <div className="flex items-center gap-3 text-lg pr-[12%] md:pr-[4%] xl:pr-[12%]">
                <Link
                  href="https://www.instagram.com/skestruturas"
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
                  className="transition border border-blue-900 hover:bg-blue-900 hover:text-white p-2 rounded-lg"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* Navegação principal */}
            <nav className={`flex items-end justify-end font-semibold py-3 pr-[12%] md:pr-[4%] 2xl:pr-[12%] transition-colors duration-500 ${
              scrolled || notHome ? 'text-blue-900' : 'text-white'
            }`}>
              {menu.map((item, i) => {
                const active = pathname === item.path;
                return (
                  <div
                    key={i}
                    onClick={() => handleMenuClick(item)}
                    className="px-6 xl:px-4 md:px-3 lg:px-3 cursor-pointer text-base 2xl:text-[18px] xl:text-[15px] lg:text-[16px] md:text-[11px]"
                  >
                    <span className="relative inline-block group">
                      {item.label}
                      <span
                        className={`absolute left-0 -bottom-[3px] h-[2px] transition-all duration-300 bg-[#0A3274] ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </span>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center relative pr-10 py-8">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl transition-colors duration-300 ${
                menuOpen ? 'text-blue-900' : scrolled || notHome ? 'text-blue-900' : 'text-white'
              }`}
            >
              {menuOpen ? <FaTimes className="text-blue-900" /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
