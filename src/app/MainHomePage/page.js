import Responsive_Best_App from "@/app/BestMobileApp/page";
import Responsive_Calendar from "@/app/BookAppointment/page";
import ClientCarousel from "@/app/Clientcorousel/page";
import Game from "@/app/game/page";
import GameTest from "@/app/game/puztest";
import Guarantees from "@/app/guarantees/page";
import Home from "@/app/Home/page";
import Responsive_India from "@/app/India/page";
import Responsive_India_Test from "@/app/India/testindia";
import Responsive_ServicePage_Mobile from "@/app/ServicesPage/page";
import Responsive_ServicePage_MobileTest from "@/app/ServicesPage/testing";
import Responsive_Testimonials from "@/app/TestimonialsPage/page";
import GetAQuoteForm from "@/Components/GetAQuoteForm";

export default function MainHomePage() {
  return (
    <>
      <Home />
      {/* <Responsive_ServicePage_Mobile /> */}
      <Responsive_ServicePage_MobileTest />
      <ClientCarousel />
      <Guarantees />
      {/* <Game /> */}
            {/* <GameTest /> */}
            <GameTest />

      <Responsive_Best_App />
      <Responsive_Testimonials />
      <Responsive_Calendar />
      {/* <Responsive_India /> */}
      <Responsive_India_Test />
      <GetAQuoteForm />
    </>
  );
}
