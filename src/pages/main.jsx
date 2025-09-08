import Aboutme from "./About";
import Education from "./Education";
import Experience from "./Projects";
import Footer from "./Footer";
import Hero from "./Hero";
import Skills from "./skills";
import Header from "./Header";

export default function Portfolio() {
      return (
        <>
        <Header />
        <main>
            <Hero />
            <Aboutme />
            <Experience />
            <Education />
            <Skills />
            <Footer />
        </main>
        </>
      );
}