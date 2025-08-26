
import Image from "next/image";
import IndustryPage from "@/Components/Industries/page";
import SingleProductPage from "@/Components/SingleProduct/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import Services from "./Services/Android-App-Development/page";
import Footer from "../../Components/Footer";

import Puzzle from "./puzzle/page";

import Guarantees from "./guarantees/page";
import PuzzleRes from "./puzzleres/page";
import AboutUs from "./aboutus/page";
import ClientCarousel from "./Clientcorousel/page";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
import Navbar from "../../Components/Navbar";
import Responsive_Best_App from "./BestMobileApp/page";
import Responsive_CalendarTest from "./BookAppointment/page";
// import ClientCarousel from "./Clientcorousel/page";
// import Guarantees from "./guarantees/page";
// import Puzzle from "./Puzzle/page";
import Carousel from "./carousel/page";
import Responsive_ServicePage from "./ServicesPage/page";
import Responsive_Testimonials from "./TestimonialsPage/page";

import Responsive_India from "./India/page";

import Responsive_AdobeTech from "@/app/Technologies/page";
import Responsive_ProductsPage from "@/app/Products/page";
import PuzzleTest from "./testclient/page";
import SingleProductPageTesting from "@/Components/SingleProduct/testing";
import { Scroll } from "lucide-react";
import PuzzleScrollSection from "./puzzlescroll/page";
import Trail from "./trail/page";
import Sample from "./sample/page";

import NewCarousel from "./carousel/page";

export default function App() {
  return (
    <>
     
    
    <Navbar />
      <Home/>
      <Responsive_ServicePage />
      <ClientCarousel />
      <Guarantees />
      {/* <PuzzleRes/> */}
      <PuzzleScrollSection/>
      <Responsive_Best_App />
      <Responsive_Testimonials />
      <Responsive_CalendarTest />
      <Responsive_India />
      <GetAQuoteForm />
      <Sample/>
      <Footer/>


    </>
  );
}
