import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'karl.vareskog@icloud.com',
      link: 'mailto:karl.vareskog@icloud.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPhone,
      title: 'Mobile',
      value: '0733797567',
      link: 'tel:+46733797567',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Stockholm, Sweden',
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      username: '@Karlgit13',
      link: 'https://github.com/Karlgit13',
      color: '#181717',
      bgColor: 'from-gray-700 to-gray-900',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      username: 'Karl Vareskog',
      link: 'https://www.linkedin.com/in/karl-vareskog-ab6a432a7/',
      color: '#0A66C2',
      bgColor: 'from-blue-600 to-blue-800',
    },
    {
      icon: FaDiscord,
      name: 'Discord',
      username: 'Contact me',
      link: 'https://discordapp.com/users/1181218436446179338',
      color: '#5865F2',
      bgColor: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-transparent via-dark-900/50 to-transparent">
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
            Get In <span className="gradient-text">Touch</span>
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
            Feel free to reach out for professional inquiries or networking opportunities.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Me</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Email:{' '}
              <a 
                href="mailto:karl.vareskog@icloud.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                karl.vareskog@icloud.com
              </a>
              <br />
              Mobile/Number: 0733797567
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card group cursor-pointer"
                  onClick={() => item.link && window.open(item.link, '_self')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.title}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`card group flex items-center gap-4 bg-gradient-to-r ${social.bgColor} p-6`}
                >
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{social.name}</h4>
                    <p className="text-white/80 text-sm">{social.username}</p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-white text-2xl"
                  >
                    →
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 glass-effect rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold text-white mb-3">
                💡 Academic Achievement
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Maintaining excellent academic performance with <span className="text-blue-400 font-semibold">7 highest grades (VG)</span> and 
                <span className="text-purple-400 font-semibold"> 2 second-highest grades (G)</span> while working professionally 
                at NordenAI as a Fullstack Developer, System Architect & AI Engineer. Check out my latest projects 
                on GitHub showcasing serverless architectures, database design, CI/CD, and modern backend development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

