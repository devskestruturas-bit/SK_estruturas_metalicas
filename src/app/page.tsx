// src/app/page.tsx
'use client'
import Hero from "@/components/Hero";
import QuemSomos from "@/app/quem-somos/page";
import Valores from "@/app/valores/page";
import Processos from "@/app/processos/page";
import Portfolio from "@/app/portfolio/page";
import Clientes from "@/app/clientes/page";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="quem-somos"><QuemSomos /></div>
      <div id="valores"><Valores /></div>
      <div id="processos"><Processos /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="clientes"><Clientes /></div>
    </>
  );
}
