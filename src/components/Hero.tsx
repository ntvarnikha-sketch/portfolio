import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Varnikha NT
            </h1>
            <h2 className="text-2xl md:text-3xl text-teal-600 font-semibold mb-6">
              Infrastructure Engineer
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Empowering enterprises through seamless device management & IT infrastructure excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a
                href="mailto:ntvarnikha@gmail.com"
                className="text-slate-600 hover:text-teal-600 transition-colors transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-teal-600 transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-teal-600 transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-teal-600" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
