import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venezuela Dental — Suministros Odontologicos en Caracas",
  description:
    "Proveedor de instrumentos, materiales, equipos y productos de higiene dental en Venezuela. Atencion personalizada y envios a todo el pais.",
  keywords:
    "suministros odontologicos, dental venezuela, instrumentos dentales caracas, materiales odontologicos, equipos dentales",
  openGraph: {
    locale: "es_VE",
    siteName: "Venezuela Dental",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${plusJakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
