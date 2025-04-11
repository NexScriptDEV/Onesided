import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

const Hero = () => {
  const typedElementRef = useRef<HTMLSpanElement>(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedElementRef.current) {
      typedInstanceRef.current = new Typed(typedElementRef.current, {
        strings: [
          'Creating unique Roblox experiences.',
          'Two developers, one vision.',
          'Building the future of indie Roblox games.',
          'Join us on our journey!'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blue glow in the middle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-primary-blue opacity-10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container-width relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto reveal-up"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-blue animate-pulse-glow inline-block">One</span>{" "}
            <span className="inline-block animate-float">Sided</span>
          </motion.h1>

          <div className="h-16 md:h-12 mb-8">
            <span ref={typedElementRef} className="text-xl md:text-2xl text-gray-300"></span>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We are two solo developers coming together to make awesome indie games on Roblox.
            Our focus is on creating unique, high-quality experiences that stand out.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary-blue text-white rounded-lg font-medium hover:bg-secondary-blue transition-colors blue-glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px 5px rgba(0, 162, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Our Projects
            </motion.a>
            <motion.a
              href="#roadmap"
              className="px-8 py-3 bg-transparent border border-primary-blue text-primary-blue rounded-lg font-medium hover:bg-primary-blue/10 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px 2px rgba(0, 162, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Roadmap
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
