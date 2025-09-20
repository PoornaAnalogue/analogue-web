import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import CursorWrapper from "@/Components/CursorWrapper";
import ModalPopUp from "@/Components/Modal-PopUp";
import { BypassProvider } from "@/Components/ByPassProvider";
import Home from "@/app/Home/page";
import LandingHero from "@/Components/NewDesign";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Analogue IT Solutions",
  description: "Best Mobile App Development Company in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={urbanist.className}>
        {/* <ModalPopUp /> */}
        {/* <BypassProvider /> */}
        <CursorWrapper />
        {/* <LandingHero /> */}
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
        {/* <BypassProvider /> */}
      </body>
    </html>
  );
}
