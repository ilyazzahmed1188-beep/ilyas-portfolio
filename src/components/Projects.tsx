import { useParams, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from "../assets/tradebrains-1.png";
import heroImg2 from "../assets/tradebrainsapp-1.png";
const projects = [
  {
    id: 1,
    title: "Trade Brains Portal Website",
    category: "Web Platform",
    description: "A data-driven web platform for stock research and portfolio management designed to help investors make informed decisions.",
    image: heroImg,
    tags: ["UX/UI Design" , "Web Design", "Fintech", "Data Visualization"],
  },
  {
    id: 2,
    title: "Trade Brains Portal App",
    category: "Mobile App",
    description: "A data-driven Mobile app for stock research and portfolio management designed to help investors make informed decisions.",
    image: heroImg2,
    tags: ["UX/UI Design", "Mobile Design", "iOS/Android", "Fintech", "Data Visualization"],
  },
  {
    id: 3,
    hidden: true,
    title: "Designing Scalable Financial Dashboards using Ant Design & Chart.js",
    category: "Dashboard / Design System",
    description: "Scalable financial dashboard designed using Ant Design with improved data visualization through Chart.js for better insights and decision-making.",
    image: "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDIzMTU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UI/UX Design", "Dashboard", "Design System", "Data Visualization"],
  },
  {
    id: 4,
    hidden: true,
    title: "QuickBite - Food Delivery",
    category: "Mobile & Web",
    description: "Seamless food ordering platform with real-time tracking, personalized recommendations, and easy checkout",
    image: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY0MjkyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["UX Research", "E-commerce", "Multi-platform"],
  },
];



export function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="work" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-white mb-4">Selected Work</h2>
          <p className="text-white/50 text-lg max-w-2xl">
            A collection of projects showcasing my design thinking and execution
          </p>
        </div>

        <div className="space-y-24">
          {projects
  .filter((project) => !project.hidden)
  .map((project, index) => (
             <div
              key={project.id}
             className="group cursor-pointer"
             onClick={() => {
  console.log("CLICK WORKING");
  navigate(`/project/${project.id}`);
}}
              >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image - alternating sides */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-white/50 mb-3 block">{project.category}</span>
                  <h3 className="text-white mb-4 flex items-center gap-3 group-hover:text-white/80 transition-colors">
                    {project.title}
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>
                  <p className="text-white/60 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}