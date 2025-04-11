import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'One Armed Cook',
    description: 'A cooking simulator where you play as a chef with one arm, creating challenging and fun gameplay.',
    image: '/images/project-placeholder.jpg',
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Project Placeholder',
    description: 'An upcoming project that will showcase our unique style and creativity.',
    image: '/images/project-placeholder.jpg',
    status: 'planned'
  },
  {
    id: 3,
    title: 'Project Placeholder',
    description: 'Another exciting project in our pipeline that will push the boundaries of Roblox games.',
    image: '/images/project-placeholder.jpg',
    status: 'planned'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Gray glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-1/2 rounded-full bg-[var(--gray-blue)] opacity-5 blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-[var(--primary-blue)]">Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing what we are working on, have completed, and why our style is unique.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/5"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full bg-gray-800">
                {/* Placeholder div instead of Image until actual images are added */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500">
                  <span>Project Image</span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-500' :
                    project.status === 'in-progress' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}>
                    {project.status === 'completed' ? 'Completed' :
                     project.status === 'in-progress' ? 'In Progress' :
                     'Planned'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-300 mb-6">
            At One Sided, we pride ourselves on creating games that are both visually stunning and mechanically engaging.
            Our unique approach combines innovative gameplay mechanics with polished visuals to create memorable experiences.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-[var(--primary-blue)] text-white rounded-lg font-medium hover:bg-[var(--secondary-blue)] transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
