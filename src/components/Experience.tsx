import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Trade Brains",
    type: "Full-time",
    duration: "September 2023 - February 2026",
    responsibilities: [
      "Lead design initiatives for Trade Brains Portal web and mobile applications",
      "Conduct user research and usability testing to improve platform experience",
      "Collaborate with product and engineering teams to ship new features",
      "Maintain and evolve the design system for consistency across products",
      "Design data visualization components for financial analytics dashboard"
    ],
    achievements: [
      "Redesigned core user flows resulting in 40% improvement in user engagement",
      "Established comprehensive design system adopted across all products",
      "Led mobile app design from concept to launch with 4.6+ rating"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "Trade Brains",
    type: "Internship",
    duration: "June 2023 - August 2023",
    responsibilities: [
      "Assisted in designing user interfaces for web and mobile platforms",
      "Created wireframes, mockups, and interactive prototypes",
      "Conducted competitive analysis and user research",
      "Collaborated with senior designers on feature improvements",
      "Participated in design critiques and sprint planning"
    ],
    achievements: [
      "Designed onboarding flow that improved user activation by 25%",
      "Created 50+ UI components for the design library",
      "Contributed to successful launch of mobile app beta"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-white mb-4">Experience</h2>
          <p className="text-white/50 text-lg max-w-2xl">
            My professional journey in UI/UX design
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative"
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent"></div>
              )}

              <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-black"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white">{exp.title}</h3>
                      <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-white/70 mb-2">{exp.company}</div>
                    <div className="flex flex-wrap items-center gap-2 text-white/50">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 rounded-xl flex items-center justify-center">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white/80 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white/80 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
