const skills = [
  { name: "User Research", level: 95 },
  { name: "Wireframing", level: 90 },
  { name: "Prototyping", level: 92 },
  { name: "Visual Design", level: 88 },
  { name: "Design Systems", level: 85 },
  { name: "Interaction Design", level: 90 },
];

const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Principle",
  "Framer",
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Skills */}
          <div>
            <h2 className="text-white mb-12">Skills</h2>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-white/50">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-white mb-12">Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="text-white/80">{tool}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl">
              <h3 className="text-white mb-3">Design Philosophy</h3>
              <p className="text-white/60 leading-relaxed">
                I believe great design is invisible. It's about solving problems 
                elegantly and creating experiences that feel natural and effortless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}