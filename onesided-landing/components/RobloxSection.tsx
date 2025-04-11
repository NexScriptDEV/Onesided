import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RobloxSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // These would typically come from an API call to Roblox
  const stats = {
    livePlayers: '234.5K',
    totalPlayers: '4.2B',
    ourGamesPlayers: '25.7K'
  };

  return (
    <section id="roblox" className="section-padding relative overflow-hidden">
      {/* Gray glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-1/2 rounded-full bg-[var(--gray-blue)] opacity-5 blur-3xl gray-glow"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-gray-800 rounded-lg">
              <span className="text-gray-500 text-xl">Roblox Logo</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[var(--primary-blue)]">Roblox</span> Platform
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Roblox is an immersive platform where millions of people come together to create and share experiences in user-generated 3D worlds.
              As developers on this platform, we're able to reach a massive audience and create games that resonate with players worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--card-bg)] p-6 rounded-lg">
                <h3 className="text-[var(--primary-blue)] text-lg font-semibold mb-2">Live Players</h3>
                <p className="text-3xl font-bold">{stats.livePlayers}</p>
              </div>
              <div className="bg-[var(--card-bg)] p-6 rounded-lg">
                <h3 className="text-[var(--primary-blue)] text-lg font-semibold mb-2">Total This Year</h3>
                <p className="text-3xl font-bold">{stats.totalPlayers}</p>
              </div>
              <div className="bg-[var(--card-bg)] p-6 rounded-lg">
                <h3 className="text-[var(--primary-blue)] text-lg font-semibold mb-2">Our Games</h3>
                <p className="text-3xl font-bold">{stats.ourGamesPlayers}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RobloxSection;
