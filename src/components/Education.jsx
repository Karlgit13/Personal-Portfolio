import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'JavaScript-Fullstack-Developer',
      institution: 'Higher Vocational Education (YH)',
      location: 'Folkuniversitetet, Gothenburg, Sweden',
      period: 'Currently enrolled - graduating June 2026',
      status: 'In Progress',
      description: 'I\'m currently enrolled in an official Swedish Higher Vocational Education program (Yrkeshögskola) to become a JavaScript Developer at Folkuniversitetet in Gothenburg, Sweden. Achieving exceptional results with 8 highest grades (VG) and 2 second-highest grades (G). Completed CI/CD Deployment course (VG). Currently working on Degree Project. Also implemented professional CI/CD pipelines at NordenAI.',
      highlights: [
        'HTML och CSS - 30 yhp (G)',
        'JavaScript - 40 yhp (VG)',
        'TypeScript - 15 yhp (VG)',
        'Agila metoder - 15 yhp (G)',
        'Frontend ramverk, 35 yhp (VG)',
        'Backend grunder - 35 yhp (VG)',
        'Databaser, 25 yhp (VG)',
        'Backend fördjupning - 30 yhp (VG)',
        'CI/CD Deployment - 50 yhp (VG)',
        'Degree Project (In Progress)',
      ],
      color: 'from-blue-500 to-purple-500',
    },
    {
      degree: 'Certified Front-End Developer',
      institution: 'Meta Front-End Developer Professional Certificate',
      location: 'Coursera',
      period: 'Completed 2023',
      status: 'Completed',
      description: 'Comprehensive professional certificate program covering modern front-end development practices and technologies.',
      highlights: [
        'HTML, CSS, and JavaScript fundamentals',
        'React.js and component-based architecture',
        'Responsive web design and mobile-first approach',
        'Version control with Git and GitHub',
        'UI/UX design principles',
        'Front-end testing and debugging',
      ],
      color: 'from-purple-500 to-pink-500',
      verificationUrl: 'https://coursera.org/share/8ed07deb3e7546974a4dc4e59910049e',
    },
    {
      degree: 'JavaScript Algorithms and Data Structures',
      institution: 'FreeCodeCamp',
      location: 'Online',
      period: 'Completed 2023',
      status: 'Completed',
      description: 'In-depth certification focusing on JavaScript fundamentals, algorithms, and data structures.',
      highlights: [
        'Advanced JavaScript concepts',
        'ES6+ features and modern syntax',
        'Algorithm design and optimization',
        'Data structures implementation',
        'Functional programming',
        'Object-oriented programming',
      ],
      color: 'from-green-500 to-emerald-500',
      verificationUrl: 'https://www.freecodecamp.org/certification/Karlgit13/javascript-algorithms-and-data-structures-v8',
    },
  ];

  return (
    <section id="education" className="section-container bg-gradient-to-b from-transparent via-dark-900/50 to-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Continuous learning and professional development in modern web technologies
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <FaGraduationCap className="text-white" size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-400 font-semibold">{edu.institution}</p>
                    </div>
                    <div className={`mt-2 md:mt-0 inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${edu.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                        : 'bg-green-500/20 text-green-400 border border-green-500/50'
                      }`}>
                      {edu.status}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-pink-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FaBook className="text-blue-400" />
                      <span className="text-white font-semibold">Key Topics:</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-gray-400 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Link */}
                  {edu.verificationUrl && (
                    <a
                      href={edu.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                    >
                      View Certificate
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

