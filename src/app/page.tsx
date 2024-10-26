
import Navbar from "./pages/navbar/page";
import Hero from "./pages/hero/page";
import Bar from "./pages/bar/page";
import NewArrival from "./pages/newarrival/page";
import Banner from "./pages/banner/page";
import Favorite from "./pages/favorite/page";
import Contact from "./pages/contact/page";
import Footer from "./pages/footer/page";
import Download from "./pages/download/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Bar/>
    <NewArrival/>
    <Banner/>
    <Favorite/>
    <Download/>
    <Contact/>
    <Footer/>
    </>
  );
}
