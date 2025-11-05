import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileRedirect from "@/components/MobileRedirect";

// Configuração da fonte
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "SK Estruturas Metálicas",
  description: "Site institucional da SK Estruturas Metálicas",
  icons: {
    icon: "/icon_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoFlex.variable} antialiased`}>
        {/* Redirecionamento para mobile */}
        <MobileRedirect />

        {/* Cabeçalho fixo */}
        <div className="absolute w-full top-0">
          <Header />
        </div>

        {/* Botão WhatsApp flutuante */}
        <WhatsAppButton />

        {/* Conteúdo principal */}
        <main>{children}</main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}
