import BestAppIndiaPage from "@/app/home-page-main/best-app-in-india";
import CalendarPage from "@/app/home-page-main/calendar/calendar-page";
import ClientCarouselPage from "@/app/home-page-main/carousal-page";
import GuaranteesPage from "@/app/home-page-main/guarantees-page";
import HomePage from "@/app/home-page-main/hero-page";
import PuzzlePage from "@/app/home-page-main/puzzle-page";
import ServicesPage from "@/app/home-page-main/services-page";
import StartWorkPage from "@/app/home-page-main/start-work-with-us";
import TestimonialsPage from "@/app/home-page-main/testimonal-page";
import GetAQuoteForm from "@/components/get-quote-form";

export default function Navbar() {
  return (
    <>
    <HomePage />
    <ServicesPage />
    <ClientCarouselPage />
    <GuaranteesPage />
    <PuzzlePage />
    <StartWorkPage />
    <TestimonialsPage />
    <CalendarPage />
    <BestAppIndiaPage />
    <GetAQuoteForm />
    </>
     );
}