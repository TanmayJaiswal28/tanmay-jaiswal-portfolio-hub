
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto border border-gray-300 my-8">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
