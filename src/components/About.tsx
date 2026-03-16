import { Award, BookOpen, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              I'm a dedicated Infrastructure Engineer with over 3 years of specialized experience in
              enterprise device management and IT service operations. Currently at Tata Consultancy Services,
              I manage comprehensive Microsoft Intune deployments across Android, iOS, macOS, and Windows platforms,
              ensuring seamless device enrollment and configuration for enterprise environments.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              My journey in technology has been enriched by diverse experiences - from analyzing complex
              legal data to teaching mathematics, which has honed my analytical thinking and communication skills.
              This unique background enables me to approach technical challenges with both precision and clarity,
              making complex IT solutions accessible to all stakeholders.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              I'm passionate about leveraging automation and data-driven insights to optimize IT operations.
              Currently pursuing my MBA in Business Data Analytics, I combine technical expertise with business
              intelligence to drive operational excellence and deliver measurable value to organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">3+ Years</h3>
              <p className="text-slate-600">IT Infrastructure Experience</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">5+ Awards</h3>
              <p className="text-slate-600">Excellence Recognition</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">MBA</h3>
              <p className="text-slate-600">Business Data Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
