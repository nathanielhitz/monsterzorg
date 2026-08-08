import Contact from "@/components/Contact";
import Diensten from "@/components/Diensten";
import Ervaring from "@/components/Ervaring";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import MotionLayer from "@/components/MotionLayer";
import Nav from "@/components/Nav";
import Over from "@/components/Over";
import Waarom from "@/components/Waarom";
import ZwevendeContact from "@/components/ZwevendeContact";

export default function Home() {
  return (
    <>
      <JsonLd />
      <MotionLayer />
      <Nav />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <Over />
        <Diensten />
        <Ervaring />
        <Waarom />
        <Contact />
      </main>
      <Footer />
      <ZwevendeContact />
    </>
  );
}
