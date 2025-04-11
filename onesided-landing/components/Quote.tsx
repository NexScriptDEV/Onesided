import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define the quotes
const quotes = [
  {
    id: 1,
    text: "Our goal is to create games that are not just fun to play, but also leave a lasting impression on players.",
    author: "One Sided Team"
  },
  {
    id: 2,
    text: "We believe that great games come from passion, creativity, and a deep understanding of what players enjoy.",
    author: "One Sided Team"
  },
  {
    id: 3,
    text: "As indie developers, we have the freedom to take risks and create unique experiences that larger studios might not pursue.",
    author: "One Sided Team"
  }
];

const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Randomly select a quote on page load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-6xl text-[var(--primary-blue)] mb-6">"</div>
          <blockquote className="text-2xl md:text-3xl font-medium mb-8">
            {currentQuote.text}
          </blockquote>
          <cite className="text-xl text-gray-300 block">— {currentQuote.author}</cite>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300">
              At One Sided, our mission is to create memorable gaming experiences that challenge conventions and bring joy to players.
              We're committed to quality, innovation, and building a community around our games.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
