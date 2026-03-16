import { Award, TrendingUp, Shield, BarChart } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Enterprise MDM Automation Dashboard',
      description: 'Developed comprehensive Power BI dashboards tracking Intune incident categories, change tasks, and service requests. Enabled leadership to monitor trends, volume, and SLA adherence in real-time.',
      icon: BarChart,
      tags: ['Power BI', 'Microsoft Intune', 'Analytics', 'Reporting'],
      achievements: ['Reduced reporting time by 70%', 'Improved SLA tracking visibility'],
    },
    {
      title: 'Multi-Platform Device Enrollment Optimization',
      description: 'Streamlined device enrollment processes across Android, iOS, macOS, and Windows platforms. Implemented root cause analysis protocols that significantly reduced enrollment failures.',
      icon: Shield,
      tags: ['Microsoft Intune', 'iOS', 'Android', 'macOS', 'JAMF'],
      achievements: ['Decreased enrollment failures by 45%', 'Enhanced user satisfaction scores'],
    },
    {
      title: 'Service Operations Excellence Initiative',
      description: 'Led operational improvements in incident management and service delivery. Created automated workflows and monitoring systems to ensure seamless IT service operations.',
      icon: TrendingUp,
      tags: ['Service Management', 'Process Improvement', 'Automation'],
      achievements: ['Maintained 98% SLA compliance', 'Improved ticket resolution time'],
    },
    {
      title: 'Compliance & Security Policy Framework',
      description: 'Designed and implemented comprehensive compliance policies and conditional access requirements across enterprise mobile devices, ensuring organizational security standards.',
      icon: Award,
      tags: ['Security', 'Compliance', 'Policy Management', 'Conditional Access'],
      achievements: ['100% compliance adherence', 'Zero security incidents'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Key Projects & Achievements
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-md">
                <project.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {project.title}
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-slate-600 mb-3">
                  Key Achievements:
                </p>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start text-slate-700 text-sm"
                    >
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-slate-50 rounded-lg">
              <Award className="text-teal-600 mx-auto mb-3" size={40} />
              <h4 className="font-bold text-slate-800 mb-1">Best Team Award</h4>
              <p className="text-slate-600 text-sm">2024 & 2025</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-slate-50 rounded-lg">
              <Award className="text-teal-600 mx-auto mb-3" size={40} />
              <h4 className="font-bold text-slate-800 mb-1">On-the-Spot Award</h4>
              <p className="text-slate-600 text-sm">2024 & 2025</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-slate-50 rounded-lg">
              <Award className="text-teal-600 mx-auto mb-3" size={40} />
              <h4 className="font-bold text-slate-800 mb-1">Service & Commitment</h4>
              <p className="text-slate-600 text-sm">2025</p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <h4 className="text-xl font-bold text-slate-800 mb-6">Recent Recognitions</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 border-l-4 border-teal-600 bg-gradient-to-r from-teal-50 to-transparent rounded-lg">
                <h5 className="font-bold text-slate-800 mb-2">Special Initiative Award</h5>
                <p className="text-slate-700 text-sm mb-2">February 2026</p>
                <p className="text-slate-600 text-sm leading-relaxed">Recognition for exceptional contributions to organizational initiatives and strategic improvements.</p>
              </div>
              <div className="p-5 border-l-4 border-teal-600 bg-gradient-to-r from-teal-50 to-transparent rounded-lg">
                <h5 className="font-bold text-slate-800 mb-2">AI Skills & App Development</h5>
                <p className="text-slate-700 text-sm mb-2">March 2026 Workshop</p>
                <p className="text-slate-600 text-sm leading-relaxed">Developed proficiency in AI technologies and created a user-friendly application leveraging AI capabilities for enhanced functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
