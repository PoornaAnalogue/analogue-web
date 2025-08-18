import Image from "next/image";
// import MainPage from "@/Components/Home/page";
import IndustryPage from "@/Components/Industries/page";
// import Navbar from "@/Components/Navbar";
import ProductsPage from "@/Components/Products/page";
import ProductTesting from "@/Components/Products/producttesting";
import HomeTesting from "@/Components/Products/producttesting";
import SingleProductPage from "@/Components/SingleProduct/page";
import ObjectTechnologiesPagee from "@/Components/Technologies/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import Services from "./Services/Android-App-Development/page";
// import MainServicesPage from "./Services/Android-App-Development/page";
import Footer from "../../Components/Footer";
import Lottie from "lottie-react";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
import MyLottie from "../../Components/Lottie";
import Navbar from "../../Components/Navbar";





import Responsive_Testimonials from "./TestimonialsPage/page";
import Responsive_ServicePage from "./ServicesPage/page";
import Responsive_Best_App from "./BestMobileApp/page";
import Responsive_India from "./India/page";
import Responsive_CalendarTest from "@/app/BookAppointment/page";


export default function App() {
  return (
    <>
      {/* Madhavika */}
      {/* <Responsive_Testimonials /> */}
      {/* <Responsive_Best_App /> */}
      {/* <Responsive_CalendarTest /> */}
      {/* <Responsive_India /> */}


      {/* <ObjectTechnologiesPagee /> */}
      {/* <IndustryPage /> */}


      {/* <ProductTesting /> */}
      {/* <SingleProductPage />  */}




      {/* Remaining */}
      <Navbar />
      <Home />
      <Responsive_ServicePage />

      <Footer />
      {/* <MainServicesPage /> */}
      {/* <Contact /> */}

  

      

      
      





      

    </>
  );
}
