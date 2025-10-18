import { Poppins } from "next/font/google";
import "./globals.css";
import LenisSmooth from "@/components/LenisSmooth";
import { DotPattern } from "@/components/ui/dot-pattern";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "AM Legacy Sports",
  description: "Empowering Football Talent and Strategic Investment Across Borders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LenisSmooth />
        <div className="fixed pointer-events-none -z-10 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <DotPattern
            glow={true}
          />
        </div>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
