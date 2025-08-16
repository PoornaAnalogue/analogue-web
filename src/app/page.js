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
import Lottie from "lottie-react";
import GetAQuoteForm from "../../Components/GetAQuoteForm";
import MyLottie from "../../Components/Lottie";
import PuzzleSection from "./Puzzle/page";
import MainHomeScreen from "../../Components/MainHomeScreen";
import PopUpForm from "../../Components/PopUpForm";
import MorphingHeading from "../../Components/trail";


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
      

      {/* <Contact /> */}
      <GetAQuoteForm />
      <Footer /> 
      <MorphingHeading />
{/* <PopUpForm /> */}

      {/* <PuzzleSection /> */}

      

    </>
  );
}
