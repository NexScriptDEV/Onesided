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
    icon: '📝'
  },
  {
    id: 2,
    title: 'Pre-Production',
    description: 'Creating prototypes, establishing art style, and developing core mechanics.',
    date: 'Q2 2025',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'Testing',
    description: 'Alpha and beta testing with focus groups to refine gameplay and fix issues.',
    date: 'Q3 2025',
    icon: '🧪'
  },
  {
    id: 4,
    title: 'Continuation of Development',
    description: 'Implementing feedback, polishing features, and preparing for launch.',
    date: 'Q4 2025',
    icon: '⚙️'
  },
  {
    id: 5,
    title: 'Release',
    description: 'Official launch of One Armed Cook on the Roblox platform.',
    date: 'Q1 2026',
    icon: '🚀'
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

    // Initialize horizontal scroll effect and zoom effect
    if (roadmapRef.current && sectionRef.current) {
      const roadmapWidth = roadmapRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Create a timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Start when the top of the section hits 80% from the top of viewport
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

      // First zoom in the roadmap cards
      tl.to(roadmapRef.current.querySelectorAll('.roadmap-card'), {
        scale: 1.1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      }, 0);

      // Then start the horizontal scrolling
      tl.to(roadmapRef.current, {
        x: -(roadmapWidth - viewportWidth + 100), // Add some padding
        ease: 'none',
        duration: 3 // Longer duration for smoother scrolling
      }, 0.5); // Start after the zoom effect
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
    <section
      id="roadmap"
      ref={sectionRef}
      className="section-padding relative overflow-hidden min-h-screen"
    >
      <div className="container-width relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[var(--primary-blue)]">Road</span> Map
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our development timeline for our upcoming game: One Armed Cook
          </p>
          <div className="mt-6 text-gray-400 flex items-center justify-center animate-pulse-glow">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span>Scroll down to navigate timeline</span>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={roadmapRef}
            className="flex space-x-12 py-8 min-w-max"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {roadmapSteps.map((step) => (
              <motion.div
                key={step.id}
                className="roadmap-card bg-black/30 backdrop-blur-sm rounded-xl p-8 w-96 flex-shrink-0 border-l-4 border-[var(--primary-blue)] blue-glow"
                variants={itemVariants}
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4 animate-float">{step.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-[var(--primary-blue)] text-lg">{step.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
