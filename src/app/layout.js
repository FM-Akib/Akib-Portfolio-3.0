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
        <Navbar />
        {/* <div className="md:px-16 bg-[#EFFBE3]"> */}
        {/* <div
          className="bg-contain "
          style={{ backgroundImage: `url(/assets/pattern.webp)` }} // Updated path
        > */}
          {/* <div className="bg-[#EFFBE3]/85 md:px-16"> */}
          <div className=" md:px-16">
          {children}
          </div>
        {/* </div> */}
      </body>
    </html>
  );
}
