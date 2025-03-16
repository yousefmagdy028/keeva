import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import Servers from "./components/Servers"
import CreativeText from "./components/CreativeText";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import BlogSection from "./components/Blog";
import LetsTalk from "./components/LetsTalk";
import Footer from "./components/Footer";
export const metadata = {
  title: "Keeva",
}

export default function Home() {
  return (
    <div >
      <Navbar />
      <Dashboard />
      <HeroSection />
      <Info/>
      <Servers/>
      <CreativeText/>
      <Contact/>
      <Portfolio/>
      <BlogSection/>
      <LetsTalk/>
      <Footer/>
    </div>
  );
}
