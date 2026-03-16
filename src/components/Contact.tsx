import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ntvarnikha@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Get In Touch
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-700 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, or
              technology challenges. Whether you have a question or just want to say hello,
              feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Mail className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Email</p>
                  <a
                    href="mailto:ntvarnikha@gmail.com"
                    className="text-slate-800 font-semibold hover:text-teal-600 transition-colors"
                  >
                    ntvarnikha@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Phone</p>
                  <a
                    href="tel:+919597622555"
                    className="text-slate-800 font-semibold hover:text-teal-600 transition-colors"
                  >
                    +91-9597622555
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin className="text-teal-600" size={24} />
                </div>
                <div>
                  <p className="text-slate-600 text-sm">Location</p>
                  <p className="text-slate-800 font-semibold">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:ntvarnikha@gmail.com"
                className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600">
            © 2025 Varnikha NT. Built with passion and precision.
          </p>
        </div>
      </footer>
    </section>
  );
}
