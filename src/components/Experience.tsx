import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Infrastructure Engineer',
      company: 'Tata Consultancy Services',
      period: '2022 - 2025',
      highlights: [
        'Managed Microsoft Intune deployments across Android, iOS, iPadOS, macOS (JAMF), and Windows platforms',
        'Handled incident tickets including device enrollment failures, work profile issues, and app deployment problems',
        'Performed root cause analysis for failed enrollments, token expiry checks, and compliance errors',
        'Prepared and published weekly reports enabling leadership to track trends, volume, and SLA adherence',
        'Maintained high service quality through timely updates, SLA adherence, and user satisfaction',
        'Managed app assignments, configuration profiles, compliance policies, and conditional access requirements',
      ],
    },
    {
      title: 'Service Operations Analyst',
      company: 'Tata Consultancy Services',
      period: '2024 - Present',
      highlights: [
        'Monitored daily service operations and ensured smooth functioning of processes and support activities',
        'Generated operational reports to track performance, aging tickets, SLA adherence, and service metrics',
        'Drove swift resolution of high severity incidents by collaborating with technical SMEs and service owners',
        'Ensured seamless IT service operations by analyzing trends and preparing operational dashboards',
        'Supported internal audits, compliance checks, and continuous improvement initiatives',
        'Maintained strong communication with stakeholders on ongoing issues and operational status',
      ],
    },
    {
      title: 'Consultant - Legal Data & Case Processing',
      company: 'Scope e-knowledge center Pvt. Ltd.',
      period: '2017 - 2020',
      highlights: [
        'Analyzed U.S. legal case documents including vehicle collision, harassment, and insurance disputes',
        'Prepared comprehensive case summaries including incident descriptions, legal arguments, and outcomes',
        'Ensured 100% data accuracy by following strict QC guidelines and verifying case facts',
        'Demonstrated strong analytical and documentation skills while handling complex legal terminology',
        'Met daily and weekly productivity targets while maintaining data confidentiality and compliance',
      ],
    },
    {
      title: 'Mathematics Teacher',
      company: 'August Zion Matriculation School',
      period: '2021 - 2022',
      highlights: [
        'Delivered engaging mathematics lessons across various grade levels aligned with academic curriculum',
        'Simplified complex mathematical concepts through practical examples and interactive teaching methods',
        'Monitored student progress and provided targeted support to address learning gaps',
        'Integrated digital tools and presentations to make mathematics more accessible and engaging',
        'Maintained discipline, student engagement, and a positive educational environment',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200"></div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`mb-12 flex flex-col md:flex-row gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>
                <div className="relative md:w-1/2">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow"></div>
                  <div className="ml-8 md:ml-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-100">
                    <div className="flex items-center gap-2 text-teal-600 mb-2">
                      <Calendar size={18} />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Briefcase size={18} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start text-slate-700 text-sm"
                        >
                          <span className="text-teal-600 mr-2 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
