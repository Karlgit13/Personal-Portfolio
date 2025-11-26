import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaCloud, FaAws } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiSass,
  SiGit, SiGithub, SiDocker, SiVercel, SiNetlify,
  SiWebpack, SiVite, SiEslint, SiJest, SiFigma,
  SiRedux, SiGraphql, SiFirebase, SiNpm
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, level: 95, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
        { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 75, color: '#000000' },
        { name: 'Vue.js', icon: SiVuedotjs, level: 70, color: '#4FC08D' },
        { name: 'Redux', icon: SiRedux, level: 85, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
        { name: 'Express', icon: SiExpress, level: 85, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: '#4169E1' },
        { name: 'GraphQL', icon: SiGraphql, level: 70, color: '#E10098' },
        { name: 'Firebase', icon: SiFirebase, level: 75, color: '#FFCA28' },
        { name: 'AWS', icon: FaAws, level: 65, color: '#FF9900' },
      ],
    },
    {
      title: 'Styling & Design',
      icon: FaTools,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, level: 85, color: '#7952B3' },
        { name: 'Sass', icon: SiSass, level: 80, color: '#CC6699' },
        { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: FaCloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
        { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ED' },
        { name: 'Vercel', icon: SiVercel, level: 85, color: '#000000' },
        { name: 'Netlify', icon: SiNetlify, level: 80, color: '#00C7B7' },
        { name: 'Vite', icon: SiVite, level: 90, color: '#646CFF' },
        { name: 'Webpack', icon: SiWebpack, level: 75, color: '#8DD6F9' },
        { name: 'Jest', icon: SiJest, level: 80, color: '#C21325' },
        { name: 'ESLint', icon: SiEslint, level: 85, color: '#4B32C3' },
        { name: 'npm', icon: SiNpm, level: 85, color: '#CB3837' },
        { name: 'pnpm', icon: SiNpm, level: 90, color: '#F69220' },
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
            Comprehensive expertise across modern web development technologies
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
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="card group"
                  >
                    {/* Skill Icon and Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={24} style={{ color: skill.color }} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{skill.name}</h4>
                        <p className="text-xs text-gray-400">{skill.level}%</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 glass-effect rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
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

