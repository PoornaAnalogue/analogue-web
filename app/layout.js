import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
// import { BypassProvider } from "@/components/ByPassProvider";
import Navbar from "@/components/navbar-page";
import ModalPopUp from "@/components/modal-popup";
import CursorWrapper from "@/components/cursor-wrapper";


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
        <ModalPopUp />
        {/* <BypassProvider /> */}
        {/* <BypassProvider /> */}
        <CursorWrapper />
        <Navbar />
        {children}
        <Footer />
        {/* <BypassProvider /> */}
      </body>
    </html>
  );
}
