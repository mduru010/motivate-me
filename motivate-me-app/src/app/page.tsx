import Image from "next/image";
import Hero from "./components/hero";
import Testimonial from "./components/testimonials";
import HeroTwo from "./components/hero2";
import Features from "./components/features";
import Navbar from "./components/navbar";

export default function Home() {
  return (
   <>
   <div className="bg-indigo-500">
   <HeroTwo></HeroTwo>
   <Testimonial></Testimonial>
   <Features></Features>
   </div>
   </>
  );
}
