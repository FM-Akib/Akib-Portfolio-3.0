import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akib's portfolio",
  description: "Mohammad Fahim Munatasir Akib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar/>
        <div className="md:px-16">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
