"use client";
import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

// Define the timeline steps
const timelineSteps = [
  {
    id: 1,
    title: "Planning",
    description: "Initial concept development, market research, and game design document creation. This phase involves brainstorming ideas, defining the core gameplay mechanics, and establishing the overall vision for One Armed Cook.",
    date: "Q1 2025",
    badge: "Planning Phase"
  },
  {
    id: 2,
    title: "Pre-Production",
    description: "Creating prototypes, establishing art style, and developing core mechanics. During this phase, we'll build playable prototypes to test our core gameplay concepts, define the visual identity of the game, and refine the player experience based on initial feedback.",
    date: "Q2 2025",
    badge: "Design & Prototyping"
  },
  {
    id: 3,
    title: "Testing",
    description: "Alpha and beta testing with focus groups to refine gameplay and fix issues. We'll invite select players to try early versions of the game, gather detailed feedback, and make iterative improvements to ensure the gameplay is fun, intuitive, and engaging.",
    date: "Q3 2025",
    badge: "Quality Assurance"
  },
  {
    id: 4,
    title: "Development",
    description: "Implementing feedback, polishing features, and preparing for launch. This critical phase involves finalizing all game elements, optimizing performance, adding final polish to visuals and audio, and ensuring the game meets Roblox platform requirements.",
    date: "Q4 2025",
    badge: "Final Development"
  },
  {
    id: 5,
    title: "Release",
    description: "Official launch of One Armed Cook on the Roblox platform. After months of development and refinement, we'll release our game to the Roblox community, implement a marketing strategy to reach our target audience, and establish a plan for post-launch support and updates.",
    date: "Q1 2026",
    badge: "Launch"
  }
];

const VerticalTimeline = () => {
  return (
    <section
      id="roadmap"
      className="section-padding relative overflow-hidden min-h-screen"
    >
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[var(--primary-blue)]">Development</span> Roadmap
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our development timeline for One Armed Cook
          </p>
        </div>

        <TracingBeam className="px-4">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {timelineSteps.map((step, index) => (
              <div key={`content-${index}`} className="mb-16">
                <h2 className="bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-[var(--primary-blue)] rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {step.badge}
                </h2>

                <p className="text-2xl font-semibold mb-4 text-white">
                  {step.title} <span className="text-[var(--primary-blue)] ml-2">{step.date}</span>
                </p>

                <div className="text-gray-300 prose prose-sm dark:prose-invert">
                  <p>{step.description}</p>
                </div>

                {index < timelineSteps.length - 1 && (
                  <div className="mt-8 border-b border-white/10"></div>
                )}
              </div>
            ))}

            <div className="mb-16">
              <h2 className="bg-[var(--primary-blue)]/10 border border-[var(--primary-blue)]/20 text-[var(--primary-blue)] rounded-full text-sm w-fit px-4 py-1 mb-4">
                Beyond Launch
              </h2>

              <p className="text-2xl font-semibold mb-4 text-white">
                Future Plans <span className="text-[var(--primary-blue)] ml-2">Q2 2026+</span>
              </p>

              <div className="text-gray-300 prose prose-sm dark:prose-invert">
                <p>
                  Our commitment to One Armed Cook extends well beyond the initial release. We plan to support the game with regular updates, new content, and community-driven improvements. Based on player feedback and engagement metrics, we'll develop new features, cooking challenges, and potentially new game modes to keep the experience fresh and exciting.
                </p>
                <p>
                  We're also exploring opportunities for cross-promotion with other Roblox games and creators, as well as potential merchandising options if the game gains significant popularity. Our long-term vision is to build a sustainable franchise that brings joy to players while establishing One Sided as a recognized name in the Roblox development community.
                </p>
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default VerticalTimeline;
