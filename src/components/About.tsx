import { ImageWithFallback } from "./figma/ImageWithFallback";
import Ilyas_Ahmed from "../assets/Ilyas_Ahmed.jpeg";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
            <ImageWithFallback
              src={Ilyas_Ahmed}
              alt="Design workspace"
              className="rounded-2xl w-full h-[auto] object-cover relative z-10 border border-white/10"
            />
          </div>
          
          <div>
            <h2 className="text-white mb-8">About Me</h2>
            
            <p className="text-white/60 mb-6 text-lg leading-relaxed">
              I'm Ilyas Ahmed, a UI/UX designer passionate about creating meaningful digital 
              experiences that solve real problems. With 2.8 years of experience at Trade Brains, 
              I focus on user-centered design and pixel-perfect execution for fintech products.
            </p>
            
            <p className="text-white/60 mb-6 text-lg leading-relaxed">
              My design philosophy centers around simplicity, functionality, and 
              creating delightful moments that make users smile. I specialize in 
              designing data-driven interfaces that make complex financial information accessible.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <div className="text-4xl text-white mb-2">2.8</div>
                <div className="text-white/50">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl text-white mb-2">50K+</div>
                <div className="text-white/50">Active Users Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}