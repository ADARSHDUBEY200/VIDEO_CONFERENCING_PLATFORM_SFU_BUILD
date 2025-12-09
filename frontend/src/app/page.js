import Navbar from "@/ui/Home/Navbar";
import Hero from "@/ui/Home/Hero";
import Cards from "@/ui/Home/Cards";
import Crauosel from "@/ui/Home/Crauosel";
import Footer from "@/ui/Home/Footer";
import ThreeDCarousel from "@/components/ui/3d_crauosel";
import Benefits from "@/ui/Home/Benefits";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Crauosel />
      <Benefits />
      <Footer />
    </>
  );
}
