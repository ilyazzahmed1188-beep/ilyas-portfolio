import { ArrowDown, Linkedin, Twitter, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-black relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      
      <div className="max-w-5xl text-center relative z-10">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 backdrop-blur-sm">
            UI/UX Designer • 2.8 Years Experience
          </span>
        </div>
        
        <h1 className="text-white mb-6 text-5xl md:text-7xl lg:text-8xl">
          Hi, I'm Ilyas Ahmed
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Crafting Digital Experiences
          </span>
        </h1>
        
        <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
          Designing intuitive interfaces that blend aesthetics with functionality
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#work"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/ilyas-ahmed-b8798521b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown size={24} className="mx-auto text-white/30" />
        </div>
      </div>
    </section>
  );
}