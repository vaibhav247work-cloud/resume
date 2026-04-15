import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CanvasContainer from "./components/CanvasContainer";

function App() {
  return (
    <div className="relative bg-slate-950 overflow-hidden font-sans noise-bg">
      {/* Ambient background glows */}
      <div className="fixed top-[-20%] left-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/5 blur-[150px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="fixed bottom-[-20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-emerald-600/4 blur-[150px] pointer-events-none z-0 animate-pulse-glow-slow" />
      <div className="fixed top-[40%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-600/3 blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      
      <CanvasContainer />
      <Navbar />
      <main className="flex flex-col relative z-10 w-full">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>
      
      <footer className="w-full text-center py-10 relative z-10 border-t border-slate-800/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-3">
            <a href="#home" className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-black text-xs tracking-tight leading-none">VK</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Vaibhav Sham Kapadne. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Crafted with React, Vite, Tailwind & Three.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
