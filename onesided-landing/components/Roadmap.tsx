import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Define the roadmap steps
const roadmapSteps = [
  {
    id: 1,
    title: 'Planning',
    description: 'Initial concept development, market research, and game design document creation.',
    date: 'Q1 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Pre-Production',
    description: 'Creating prototypes, establishing art style, and developing core mechanics.',
    date: 'Q2 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Testing',
    description: 'Alpha and beta testing with focus groups to refine gameplay and fix issues.',
    date: 'Q3 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Development',
    description: 'Implementing feedback, polishing features, and preparing for launch.',
    date: 'Q4 2025',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Release',
    description: 'Official launch of One Armed Cook on the Roblox platform.',
    date: 'Q1 2026',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const Roadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const controls = useAnimation();
  const roadmapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize horizontal scroll effect
    if (roadmapRef.current && sectionRef.current) {
      const roadmapWidth = roadmapRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Create a timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%', // Start when the top of the section hits 70% from the top of viewport
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
            // Add a class to highlight the section when entering
            if (sectionRef.current) {
              sectionRef.current.classList.add('roadmap-active');
            }
          },
          onLeaveBack: () => {
            // Remove the class when scrolling back up
            if (sectionRef.current) {
              sectionRef.current.classList.remove('roadmap-active');
            }
          }
        }
      });

      // Smooth horizontal scrolling without the zoom effect
      tl.to(roadmapRef.current, {
        x: -(roadmapWidth - viewportWidth + 100), // Add some padding
        ease: 'power1.inOut',
        duration: 3 // Longer duration for smoother scrolling
      }, 0);
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="section-padding relative overflow-hidden min-h-screen"
    >
      <div className="container-width relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[var(--primary-blue)]">Development</span> Roadmap
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our development timeline for One Armed Cook
          </p>
          <div className="mt-6 text-gray-400 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span>Scroll to explore our timeline</span>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Timeline connector line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--primary-blue)]/30 to-transparent z-0"></div>

          <motion.div
            ref={roadmapRef}
            className="flex space-x-16 py-12 min-w-max relative"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {roadmapSteps.map((step) => (
              <motion.div
                key={step.id}
                className="roadmap-card relative bg-black/40 backdrop-blur-sm rounded-lg p-6 w-80 flex-shrink-0 border border-white/10 roadmap-subtle-glow hover:shadow-lg hover:border-[var(--primary-blue)]/20 transition-all duration-300"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute -top-[25px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[var(--primary-blue)] z-10 timeline-dot animate-pulse-glow-subtle"></div>

                <div className="flex items-start mb-4">
                  <div className="p-2 mr-4 rounded-md bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-[var(--primary-blue)] font-medium">{step.date}</p>
                  </div>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
