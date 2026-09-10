import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Пятый цилиндр — автосервис в Самаре | Диагностика, ремонт, ТО",
  description: "Демо-проект автосервиса «Пятый цилиндр»: диагностика, ремонт и ТО автомобилей. Самара, пр-т Механиков, 18.",
  keywords: ["автосервис", "ремонт авто", "диагностика", "ТО", "кузовной ремонт", "Самара"],
  openGraph: {
    title: "Пятый цилиндр — автосервис в Самаре",
    description: "Диагностика, ремонт и ТО автомобилей без лишних обещаний.",
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
