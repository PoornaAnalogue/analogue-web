import { Urbanist } from "next/font/google";
import "./globals.css";
import CustomCursor from "./CustomCursor";
import Footer from "@/Components/Footer";
import ModalPopUp from "@/Components/Modal-PopUp";
import Navbar from "@/Components/Navbar";

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
      <head><link rel="icon" href="/favicon.png" sizes="any" /></head>
      <body className={urbanist.className} >
        {/* <ModalPopUp /> */}
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}