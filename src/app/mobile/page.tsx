'use client';
import Hero from '../../components/Hero';
import QuemSomos from '../quem-somos/page';
import Processos from '../processos/page';
import Valores from '../valores/page';
import Portfolio from '../portfolio/page';
import Clientes from '../clientes/page';

export default function MobilePage() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="quem-somos">
        <QuemSomos />
      </section>

      <section id="valores">
        <Valores />
      </section>

      <section id="processos">
        <Processos />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="clientes">
        <Clientes />
      </section>
    </div>
  );
}
