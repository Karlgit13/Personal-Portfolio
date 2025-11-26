import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaHeart } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend development, creating seamless end-to-end solutions.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaBrain,
      title: 'AI & Innovation',
      description: 'Passionate about integrating AI technologies to create intelligent, user-centric applications.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaRocket,
      title: 'Modern Tech Stack',
      description: 'Utilizing cutting-edge technologies like React, Node.js, MongoDB, and modern frameworks.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaHeart,
      title: 'User Experience',
      description: 'Creating elegant, intuitive interfaces that bridge human creativity with machine intelligence.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="section-container">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Profile and Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              <motion.img
                src={profileImage}
                alt="Karl Vareskog"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Hi, I'm <span className="gradient-text">Karl Vareskog</span>
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm passionate about everything related to development and coding — whether it's front-end or 
              back-end, JavaScript frameworks, AI engineering, or just tinkering with new technologies.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Currently working as a <span className="text-blue-400 font-semibold">Fullstack Developer, System Architect, and AI Engineer</span> at 
              <span className="text-purple-400 font-semibold"> NordenAI</span> (50%) while simultaneously 
              studying at Folkuniversitetet in Gothenburg, Sweden. Recently implemented and developed 
              <span className="text-purple-400 font-semibold"> CI/CD pipelines</span> in production.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Achieving exceptional academic results with <span className="text-pink-400 font-semibold">7 highest grades</span> and 
              <span className="text-pink-400 font-semibold"> 2nd highest in 2 courses</span>. On track to graduate and receive my 
              post-secondary diploma on <span className="text-pink-400 font-semibold">June 12, 2026</span>.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="glass-effect px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-semibold">Stockholm, Sweden</p>
              </div>
              <div className="glass-effect px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-400">Current Role</p>
                <p className="text-white font-semibold">Fullstack/AI @ NordenAI</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

