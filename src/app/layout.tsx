import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoService - Профессиональный автосервис | Диагностика, ремонт, ТО",
  description: "Профессиональный автосервис с 15-летним опытом. Диагностика, капитальный ремонт, ТО и кузовные работы. Гарантия 100%.",
  keywords: ["автосервис", "ремонт авто", "диагностика", "ТО", "кузовной ремонт"],
  openGraph: {
    title: "AutoService - Профессиональный автосервис",
    description: "Полный спектр услуг по обслуживанию и ремонту автомобилей.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}