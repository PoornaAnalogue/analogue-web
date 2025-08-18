import IndustryPage from "@/Components/Industries/page";
import ProductsPage from "@/Components/Products/page";
import ProductTesting from "@/Components/Products/producttesting";
import HomeTesting from "@/Components/Products/producttesting";
import ServicePage from "@/Components/Services/page";
import SingleProductPage from "@/Components/SingleProduct/page";
import ObjectTechnologiesPagee from "@/Components/Technologies/page";
import Contact from "./Contact/page";
import Home from "./Home/page";
import Image from "next/image";
import Footer from "../../Components/Footer";
import Lottie from "lottie-react";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
import MyLottie from "../../Components/Lottie";
import Navbar from "../../Components/Navbar";


export default function App() {
  return (
    <>
    <Navbar />
{/* <MainHomeScreen /> */}

      <Home />
      <ServicePage />


      {/* <MainServicesPage /> */}

      {/* <ObjectTechnologiesPagee /> */}

      {/* <IndustryPage /> */}


      {/* <ProductTesting /> */}


      {/* <SingleProductPage />  */}

      <GetAQuoteForm />
      <Footer /> 
      

      {/* <Contact /> */}

{/* <PopUpForm /> */}

      {/* <PuzzleSection /> */}

      

    </>
  );
}
