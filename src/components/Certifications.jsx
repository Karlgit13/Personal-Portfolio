import { motion } from 'framer-motion';
import { FaCertificate, FaAws, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiGooglecloud, SiJavascript, SiNextdotjs, SiTypescript, SiJest } from 'react-icons/si';
import FrontEndCert from '../assets/FrontEndCert.jpg';
import JSCert from '../assets/JavaScript_FreeCodeCamp.png';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cloud Infrastructure & Deployment',
      provider: 'Multi-Cloud Solutions (AWS, Azure, Render)',
      year: '2025',
      icon: FaAws,
      color: 'from-orange-500 to-yellow-500',
      tags: ['EC2/Lambda', 'Azure Functions', 'Render Blueprints', 'Docker'],
      verified: true,
      statusText: 'Production Experience',
      image: null,
    },
    {
      title: 'Applied LLM & Gemini Architecture',
      provider: 'Google Cloud & AI Studio',
      year: '2024',
      icon: SiGooglecloud,
      color: 'from-red-500 to-pink-500',
      tags: ['Gemini 1.5 Pro', 'NotebookLM', 'Google AI Studio', 'Antigravity'],
      verified: true,
      image: null,
    },
    {
      title: 'Modern Fullstack Architecture',
      provider: 'Next.js Ecosystem',
      year: '2024',
      icon: SiNextdotjs,
      color: 'from-black to-gray-700',
      tags: ['App Router', 'Server Components', 'SSR/SSG', 'Optimization'],
      verified: true,
      statusText: 'Advanced Proficiency',
      image: null,
    },
    {
      title: 'TypeScript Engineering Mastery',
      provider: 'Advanced Static Typing',
      year: '2024',
      icon: SiTypescript,
      color: 'from-blue-600 to-blue-500',
      tags: ['Strict Mode', 'Zod Validation', 'Generic Patterns', 'Type Safety'],
      verified: true,
      statusText: 'Core Skill',
      image: null,
    },
    {
      title: 'Software Quality & Best Practices',
      provider: 'Testing & Architecture Standards',
      year: '2024',
      icon: SiJest,
      color: 'from-pink-600 to-rose-500',
      tags: ['Jest/Vitest', 'Mocking Strategies', 'TDD & CI', 'Clean Code'],
      verified: true,
      statusText: 'Professional Standard',
      image: null,
    },
    {
      title: 'Node.js Application Developer',
      provider: 'OpenJS Foundation',
      year: '2024',
      icon: FaNodeJs,
      color: 'from-green-600 to-teal-500',
      tags: ['Express.js', 'REST APIs', 'Authentication', 'Security'],
      verified: true,
      image: null,
    },
    {
      title: 'Backend Data Engineering',
      provider: 'Relational (SQL) & NoSQL Architectures',
      year: '2023',
      icon: SiMongodb,
      color: 'from-green-500 to-emerald-500',
      tags: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Azure SQL', 'Redux'],
      verified: true,
      image: null,
    },
    {
      title: 'Meta Frontend Developer',
      provider: 'Meta (Facebook)',
      year: '2023',
      icon: FaReact,
      color: 'from-blue-500 to-cyan-500',
      tags: ['React', 'Redux', 'Testing', 'Performance'],
      verified: true,
      verificationUrl: 'https://coursera.org/share/8ed07deb3e7546974a4dc4e59910049e',
      image: FrontEndCert,
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      provider: 'FreeCodeCamp',
      year: '2023',
      icon: SiJavascript,
      color: 'from-yellow-500 to-orange-500',
      tags: ['ES6+', 'Algorithms', 'Data Structures', 'Functional Programming'],
      verified: true,
      verificationUrl: 'https://www.freecodecamp.org/certification/Karlgit13/javascript-algorithms-and-data-structures-v8',
      image: JSCert,
    },
  ];

  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full mb-4"
          >
            <FaCertificate className="text-blue-400" />
            <span className="text-sm font-medium text-gray-300">CERTIFICATIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="gradient-text">Credentials</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Industry-recognized certifications validating expertise across the tech stack
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="glass-effect px-3 py-1 rounded-full text-xs font-semibold text-gray-300">
                  {cert.year}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="text-blue-400 font-semibold mb-4">{cert.provider}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full glass-effect text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Verified Badge */}
              {cert.verified && (
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{cert.statusText || 'Verified'}</span>
                </div>
              )}

              {/* View Certificate Link */}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
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

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Certificate Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {certifications.filter(cert => cert.image).map((cert, index) => (
            <motion.a
              key={index}
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="card overflow-hidden"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto rounded-lg"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;

