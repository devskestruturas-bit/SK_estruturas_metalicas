import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileRedirect from "@/components/MobileRedirect";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
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
      <body className={`${manrope.variable} antialiased`}>
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