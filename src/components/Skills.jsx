import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaCloud, FaAws, FaLayerGroup, FaNetworkWired, FaBrain } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPostgresql,
  SiHtml5, SiCss3, SiTailwindcss,
  SiGit, SiGithub, SiDocker,
  SiVite, SiJest, SiAmazondynamodb,
  SiGooglecloud, SiGithubactions, SiTerraform
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Expert / Daily Drivers',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      description: 'Core technologies I use daily to build scalable applications',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      ],
    },
    {
      title: 'Proficient / Cloud & Infrastructure',
      icon: FaServer,
      color: 'from-orange-500 to-red-500',
      description: 'Reliable tools for deployment, testing, and backend architecture',
      skills: [
        { name: 'AWS Cloud Services', icon: FaAws, color: '#FF9900' },
        { name: 'DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git & GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Jest / Vitest', icon: SiJest, color: '#C21325' },
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      title: 'Exposure / Ecosystem',
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      description: 'Broadening my scope with cloud patterns and AI integration',
      skills: [
        { name: 'Azure', icon: VscAzure, color: '#0078D4' },
        { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
        { name: 'System Architecture', icon: FaNetworkWired, color: '#E10098' },
        { name: 'Microservices', icon: FaLayerGroup, color: '#880000' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
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
            Technical <span className="gradient-text">Skills</span>
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
            A tiered breakdown of my technical expertise and daily drivers
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white whitespace-nowrap">{category.title}</h3>
                </div>
                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent ml-4" />
                <p className="text-gray-400 text-sm md:text-right max-w-md italic border-l-2 border-gray-700 pl-4 md:border-none md:pl-0">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-effect p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                        <skill.icon size={24} style={{ color: skill.color }} />
                      </div>
                      <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies
              and best practices in web development. Currently exploring advanced topics in AI integration,
              serverless architectures, and progressive web applications.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
