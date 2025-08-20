import { Urbanist } from "next/font/google";
import "./globals.css";
import CustomCursor from "./CustomCursor";

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
    <html lang="en">
      <head><link rel="icon" href="/favicon.png" sizes="any" /></head>
      <body className={urbanist.className} >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}