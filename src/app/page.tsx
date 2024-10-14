import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import ChatBot from "./components/ChatBot";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen px-24 py-2 gap-16"> {/* Remove padding */}
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start">
        <Hero />
        <About />
        <Skills />
        <SocialLinks />
        <Portfolio />
        <ContactForm />
        <ChatBot />
      </main>
    </div>
  );
}
