import MainPage from "@/Components/Home/page";
import IndustryPage from "@/Components/Industries/page";
import Navbar from "@/Components/Navbar";
import ProductsPage from "@/Components/Products/page";
import ProductTesting from "@/Components/Products/producttesting";
// import ProductTesting from "@/Components/Products/producttesting";
import HomeTesting from "@/Components/Products/producttesting";
import ServicePage from "@/Components/Services/page";
import SingleProductPage from "@/Components/SingleProduct/page";
import ObjectTechnologiesPagee from "@/Components/Technologies/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import Services from "./Services/Android-App-Development/page";
// import ServicePage from "./Testing/page";
import Image from "next/image";
import MainServicesPage from "./Services/Android-App-Development/page";
import Footer from "../../Components/Footer";

import Puzzle from "./puzzle/page";

import Guarantees from "./guarantees/page";
import PuzzleRes from "./puzzleres/page";
import AboutUs from "./aboutus/page";
import ClientCarousel from "./Clientcorousel/page";

export default function App() {
  return (
    <>
      <Home />

      <ServicePage />

     
      <ClientCarousel/>
      <Guarantees />
      <PuzzleRes/>
      {/* <Puzzle /> */}
      <Footer />
      <MainServicesPage />
      <ObjectTechnologiesPagee />
      <IndustryPage />
      <ProductTesting />
     
      <SingleProductPage />
      <Contact />
      <AboutUs/>
    </>
  );
}
