import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RobloxStudioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="studio" className="section-padding relative overflow-hidden">
      {/* Blue glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-1/2 rounded-full bg-[var(--primary-blue)] opacity-5 blur-3xl blue-glow"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            ref={ref}
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-gray-800 rounded-lg">
              <span className="text-gray-500 text-xl">Roblox Studio Logo</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[var(--primary-blue)]">Roblox</span> Studio
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Roblox Studio is our primary development environment, providing powerful tools that allow us to bring our creative visions to life.
              With its robust features and flexibility, we're able to create immersive experiences that push the boundaries of what's possible on the platform.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-[var(--primary-blue)] p-2 rounded-full mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Lua Programming</h3>
                  <p className="text-gray-300">We leverage Lua to create complex game mechanics and systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[var(--primary-blue)] p-2 rounded-full mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3D Modeling & Design</h3>
                  <p className="text-gray-300">We create custom assets and environments to give our games a unique look.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[var(--primary-blue)] p-2 rounded-full mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Collaborative Development</h3>
                  <p className="text-gray-300">Studio's team features allow us to work together seamlessly.</p>
                </div>
              </div>
            </div>

            <a
              href="https://create.roblox.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[var(--primary-blue)] text-white rounded-lg font-medium hover:bg-[var(--secondary-blue)] transition-colors"
            >
              Learn About Roblox Studio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RobloxStudioSection;
