import Image from "next/image";
import IndustryPage from "@/Components/Industries/page";
import SingleProductPage from "@/Components/SingleProduct/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import Services from "./Services/Android-App-Development/page";
import Footer from "../../Components/Footer";
import Lottie from "lottie-react";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
import MyLottie from "../../Components/Lottie";
import Navbar from "../../Components/Navbar";


import Responsive_Testimonials from "./TestimonialsPage/page";
import Responsive_ServicePage from "./ServicesPage/page";
import Responsive_Best_App from "./BestMobileApp/page";
import Responsive_India from "./India/page";
import Responsive_CalendarTest from "./BookAppointment/page";

import Responsive_AdobeTech from "@/app/Technologies/page";
import Responsive_ProductsPage from "@/app/Products/page";

import ClientCarousel from "./Clientcorousel/page";
import Guarantees from "./guarantees/page";
import Puzzle from "./puzzle/page";
import PuzzleTest from "./testclient/page";
import SingleProductPageTesting from "@/Components/SingleProduct/testing";


export default function App() {
  return (
    <>
    {/* <Nav */}
      {/* Madhavika */}
      <Responsive_Testimonials />
      <Responsive_ServicePage />
      <Responsive_Best_App />
      <Responsive_CalendarTest />
      <Responsive_India />
      

      {/* <Responsive_AdobeTech />  */}
      {/* <Responsive_ProductsPage /> */}

      
      {/* <IndustryPage /> */}
      {/* <SingleProductPage />  */}
      {/* <SingleProductPageTesting /> */}
      {/* <PuzzleTest /> */}




      {/* Remaining */}
      {/* <Navbar />
      <Home />
      <Responsive_ServicePage />
       <ClientCarousel/>
       <Guarantees />
       <Puzzle />
       <Responsive_Best_App />
       <Responsive_Testimonials />
       <Responsive_CalendarTest />
       <Responsive_India />
       <GetAQuoteForm /> 
       
      <Footer /> */}


    </>
  );
}
