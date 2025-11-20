import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileRedirect from "@/components/MobileRedirect";

// Fonte Aeonik Trial
const aeonik = localFont({
  src: [
    {
      path: "../../public/fonts/aeoniktrial-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/aeoniktrial-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "SK Estruturas Metálicas",
  description: "Site institucional da SK Estruturas Metálicas",
  icons: {
    icon: "/icon_logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${aeonik.variable} antialiased`}>
        

        <div className="absolute w-full top-0">
          <Header />
        </div>

        <WhatsAppButton />

        <main>{children}</main>

        <Footer />
        <MobileRedirect />
      </body>
    </html>
  );
}
