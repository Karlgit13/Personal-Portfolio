import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiTailwindcss, SiVite, SiGit, SiHtml5, SiCss3, SiVercel, SiNpm 
} from 'react-icons/si';
// Project images will be generated from GitHub or placeholders

const Experience = () => {
  const techStack = [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'pnpm', icon: SiNpm, color: '#F69220' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
  ];

  const projects = [
    {
      title: 'Quiztopia - Serverless Quiz API',
      role: 'Backend Developer & Cloud Architect',
      period: '2024-2025',
      type: 'YH School Examination Project',
      description: 'A comprehensive serverless quiz application built on AWS infrastructure. Features include user authentication with JWT, quiz creation and management, real-time leaderboards, and geographic question tagging. Implements best practices for serverless architecture with API Gateway, Lambda functions, and DynamoDB.',
      image: null,
      liveUrl: null,
      githubUrl: 'https://github.com/Karlgit13/BackendFordjupning_Examination',
      technologies: [
        { name: 'AWS Lambda', color: '#FF9900' },
        { name: 'DynamoDB', color: '#4053D6' },
        { name: 'API Gateway', color: '#FF4F8B' },
        { name: 'Node.js', color: '#339933' },
        { name: 'JWT', color: '#000000' },
        { name: 'Serverless Framework', color: '#FD5750' },
      ],
      highlights: [
        'Serverless architecture with AWS Lambda & API Gateway',
        'JWT authentication & authorization middleware',
        'DynamoDB with GSI for optimized queries',
        'SSM Parameter Store for secure secret management',
        'Complete Postman collection for API testing',
        'Scalable leaderboard system with scoring',
      ],
    },
    {
      title: 'Movie Review API with MongoDB',
      role: 'Backend Developer',
      period: '2024-2025',
      type: 'YH School Examination Project',
      description: 'A robust RESTful API for movie reviews and ratings built with Express and MongoDB. Implements role-based access control (RBAC) with user and admin roles, comprehensive validation middleware, and sophisticated aggregation pipelines for rating calculations. Features secure authentication and clean architecture patterns.',
      image: null,
      liveUrl: null,
      githubUrl: 'https://github.com/Karlgit13/Databaser-Individuell-Examination',
      technologies: [
        { name: 'Node.js', color: '#339933' },
        { name: 'Express', color: '#000000' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'Mongoose', color: '#880000' },
        { name: 'JWT', color: '#000000' },
        { name: 'bcryptjs', color: '#7E4798' },
      ],
      highlights: [
        'Role-based access control (User & Admin)',
        'Advanced MongoDB aggregation for ratings',
        'Comprehensive middleware validation (ID, auth, roles)',
        'Secure password hashing with bcrypt',
        'Clean separation of concerns (routes, controllers, middleware)',
        'RESTful API design with proper HTTP methods',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-gradient-to-b from-transparent via-dark-900/50 to-transparent">
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
            <FaBriefcase className="text-blue-400" />
            <span className="text-sm font-medium text-gray-300">PORTFOLIO & PROJECTS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Experience</span> & Work
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
            Showcasing my best projects and technical expertise
          </motion.p>
        </div>

        {/* Current Employment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <FaBriefcase className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">Currently Employed</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/50">
                    Active
                  </span>
                </div>
                <p className="text-lg text-blue-400 font-semibold mb-3">
                  Fullstack Developer, System Architect & AI Engineer @ NordenAI
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Working <span className="text-purple-400 font-semibold">50%</span> at NordenAI while pursuing my 
                  JavaScript Developer diploma at Folkuniversitetet. Recently implemented and developed 
                  <span className="text-purple-400 font-semibold"> CI/CD pipelines</span> in production environment, 
                  improving deployment efficiency and reliability. Contributing to AI-powered solutions and 
                  system architecture design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm glass-effect text-blue-400">CI/CD Pipelines</span>
                  <span className="px-3 py-1 rounded-full text-sm glass-effect text-purple-400">System Architecture</span>
                  <span className="px-3 py-1 rounded-full text-sm glass-effect text-pink-400">AI Engineering</span>
                  <span className="px-3 py-1 rounded-full text-sm glass-effect text-green-400">Fullstack Development</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-effect px-6 py-3 rounded-full flex items-center gap-3 group cursor-pointer"
              >
                <tech.icon size={24} style={{ color: tech.color }} />
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card group"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image or Icon */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />
                    </>
                  ) : (
                    <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 flex items-center justify-center backdrop-blur-sm border border-white/10 rounded-xl">
                      <FaCode size={80} className="text-blue-400 opacity-50" />
                    </div>
                  )}
                </motion.div>

                {/* Project Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <FaCode className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-400">{project.role} • {project.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm font-medium glass-effect"
                            style={{ color: tech.color }}
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-400 mb-3">Key Highlights:</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <FaRocket className="text-blue-400 mt-1 flex-shrink-0" size={12} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary text-center"
                      >
                        <FaLaptopCode className="inline mr-2" />
                        Live API
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${project.liveUrl ? 'btn-secondary' : 'btn-primary'} text-center`}
                    >
                      <SiGit className="inline mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

