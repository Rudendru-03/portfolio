// pages/index.js
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import ChatBot from "../components/ChatBot";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ContactForm />
      <ChatBot />
    </div>
  );
}
