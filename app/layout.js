import { Poppins } from "next/font/google";
import "./globals.css";
import LenisSmooth from "@/components/LenisSmooth";
import { DotPattern } from "@/components/ui/dot-pattern";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { LayoutGroup, AnimatePresence } from "framer-motion";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "AM Legacy Sports",
  description:
    "Empowering Football Talent and Strategic Investment Across Borders",
};

export default function RootLayout({ children }) {
  console.log("object");
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/Hero.webp" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <LenisSmooth />

        {/* Background pattern */}
        <div className="fixed pointer-events-none -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <DotPattern glow={true} />
        </div>

        {/* 👇 Wrap your layout with Framer Motion context */}
        <LayoutGroup>
          <Header />
          <AnimatePresence mode="sync">
            <main className="min-h-screen">{children}</main>
          </AnimatePresence>
          <Footer />
        </LayoutGroup>
      </body>
    </html>
  );
}
