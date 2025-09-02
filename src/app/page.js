import Image from "next/image";
import { Scroll } from "lucide-react";

import Home from "./Home/page";
import Footer from "../../Components/Footer";
import Guarantees from "./guarantees/page";
import AboutUs from "./aboutus/page";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
// import Navbar from "../../Components/Navbar";
import Responsive_Best_App from "./BestMobileApp/page";
import Responsive_ServicePage from "./ServicesPage/page";
import Responsive_Testimonials from "./TestimonialsPage/page";
import Responsive_India from "./India/page";
import PuzzleTest from "./testclient/page";
import Responsive_ServicePage_Mobile from "./ServicesPage/page";
import Responsive_Calendar from "./BookAppointment/page";
import PuzzleScrollSection from "./puzzlescroll/page";


import Responsive_AngularTech from "./Tech-Angular/page";
import Responsive_AWSTech from "./Tech-AWS/page";
import Responsive_PyTech from "./Tech-Py/page";
import Responsive_FigmaTech from "./Tech-Figma/page";
import Responsive_AzureTech from "./Tech-Azure/page";
import Responsive_NodeTech from "./Tech-Node/page";
import Responsive_MongoTech from "./Tech-Mongo/page";
import Responsive_OracleTech from "./Tech-Oracle/page";
import Responsive_WebTech from "./Tech-Web/page";
import Responsive_PhotoShopTech from "./Tech-Photoshop/page";
import Responsive_JavaTech from "./Tech-Java/page";
import Responsive_GCPTech from "./Tech-GCP/page";
import Responsive_NextTech from "./Tech-Next/page";
import Responsive_ReactNTech from "./Tech-ReactN/page";
import Responsive_PHPTech from "./Tech-PHP/page";
import Responsive_VueJsTech from "./Tech-Vue/page";
// import Responsive_SingleProductPage from "@/app/SingleProduct/page";
import Responsive_IndusNews from "./Indus-News/page";
import Responsive_IndusWeb from "./Indus-News copy/page";
import Responsive_ProductsPage from "./Products/page";

import Contact from "./Contact/page";
import AndroidAppDevelopment from "./Services/Android-App-Development/page";
import Responsive_AdobeTech from "./Tech-Adobe/page";
import Navbar from "../../Components/Navbar";
import Responsive_SingleProductPage from "./SingleProduct/page";
import ClientCarousel from "./PoornaCarousal/page";

export default function App() {
  return (
    <>

    
      <Navbar />
      <Home/>
      <Responsive_ServicePage_Mobile />
      <ClientCarousel />
      <Guarantees />
      <PuzzleScrollSection/>
      <Responsive_Best_App />
      <Responsive_Testimonials />
      <Responsive_Calendar />
      <Responsive_India />
      <GetAQuoteForm />
      <Footer/>
      
      




      <Responsive_SingleProductPage />
      <Responsive_AdobeTech />
      <Responsive_ProductsPage />
      <Responsive_IndusNews />





      {/* <Responsive_AngularTech /> */}
      {/* <AndroidAppDevelopment /> */}

        {/* 
      
      <Contact /> 
      */}
      
    {/* 
      <Responsive_AdobeTech />
      <Responsive_AngularTech />
      <Responsive_AWSTech />
      <Responsive_PyTech />
      <Responsive_FigmaTech />
      <Responsive_AzureTech />
      <Responsive_NodeTech />
      <Responsive_MongoTech />
      <Responsive_OracleTech />
      <Responsive_WebTech />
      <Responsive_PhotoShopTech />
      <Responsive_JavaTech />
      <Responsive_GCPTech />
      <Responsive_NextTech />
      <Responsive_ReactNTech />
      <Responsive_PHPTech />
      <Responsive_VueJsTech />
      <Responsive_IndusWeb /> 
    */}

    </>
  );
}
