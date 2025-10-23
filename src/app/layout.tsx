import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Configuração do Roboto Flex
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100","300","400","500","700","900"], // se quiser, pode ajustar os pesos
});

export const metadata: Metadata = {
  title: "SK Estruturas Metálicas",
  description: "Site institucional da SK Estruturas Metálicas",
   icons: {
    icon: '/icon_logo.png', // <- aqui!
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoFlex.variable} antialiased`}>
        {/* Cabeçalho fixo */}
        <div className="absolute w-full top-0">
          <Header />
        </div>
        <WhatsAppButton />

        {/* Conteúdo das páginas */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}
