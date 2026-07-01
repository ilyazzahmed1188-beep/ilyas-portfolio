import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formDataEncoded = new URLSearchParams({
    "form-name": "contact",
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }).toString();

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataEncoded,
    });

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    alert("Something went wrong. Try again.");
  }
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-6">Let's Work Together</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Email */}
          <a
            href="mailto:ilyazzahmed1188@gmail.com"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-white mb-2">Email</h3>
            <p className="text-white/50">ilyazzahmed1188@gmail.com</p>
          </a>

          {/* Availability */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-white mb-2">Availability</h3>
            <p className="text-white/50">Open for freelance projects</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-6"
             >
              <input type="hidden" name="form-name" value="contact" />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white/70 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/70 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/30"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-white/70 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/30 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-white text-black rounded-xl hover:bg-white/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}