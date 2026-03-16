import { Smartphone, Shield, BarChart3, Settings, Users, Lightbulb } from 'lucide-react';

export function Skills() {
  const technicalSkills = [
    {
      category: 'Device Management',
      icon: Smartphone,
      skills: [
        'Microsoft Intune',
        'Android Enterprise & Work Profile',
        'iOS/iPadOS Enrollment & ABM',
        'macOS Device Management (JAMF)',
        'MDM Compliance & Policies',
      ],
    },
    {
      category: 'IT Operations',
      icon: Settings,
      skills: [
        'Incident Management',
        'Change Management',
        'Service Request Handling',
        'SLA Management',
        'Root Cause Analysis',
      ],
    },
    {
      category: 'Analytics & Reporting',
      icon: BarChart3,
      skills: [
        'Business Intelligence (Power BI)',
        'Operational Dashboards',
        'Performance Metrics',
        'Report Generation',
        'Trend Analysis',
      ],
    },
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: Lightbulb },
    { name: 'Problem-Solving', icon: Settings },
    { name: 'Communication', icon: Users },
    { name: 'Team Collaboration', icon: Users },
    { name: 'Time Management', icon: Shield },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {technicalSkills.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="flex items-start text-slate-700"
                    >
                      <span className="text-teal-600 mr-2">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  <skill.icon className="text-teal-600 mb-3" size={32} />
                  <span className="text-slate-700 text-center text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
