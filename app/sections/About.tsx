"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../components/buttonComponent";

const values = [
  {
    title: "Strategy First",
    description:
      "Every decision is backed by research and aligned with your business objectives.",
  },
  {
    title: "Meticulous Craft",
    description:
      "We sweat the details. Quality and precision in every aspect of our work.",
  },
  {
    title: "Partnership",
    description:
      "We embed ourselves in your team. Your goals become our mission.",
  },
  {
    title: "Results Driven",
    description:
      "We measure success by the impact we create for your business.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-surface/30"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-4 block"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-8"
            >
              A team of strategists,
              <span className="heading-serif text-accent block mt-2">designers, and builders.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted leading-relaxed mb-6"
            >
              Founded in 2020, Zovio was built on a simple premise: the digital 
              landscape is crowded, but most brands are invisible. We exist to 
              change that.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted leading-relaxed mb-8"
            >
              We are a tight-knit team of specialists who believe in the power 
              of thoughtful design and strategic thinking. No fluff, no jargon—
              just focused work that delivers measurable results.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              
            >
              <Button className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all" name="Work with us" sectionId="contact" children={<ArrowUpRight className="w-4 h-4" />}/>
              
            </motion.div>
          </div>

          {/* Right Content - Values List */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-8 lg:mt-0"
            >
              Our Principles
            </motion.p>
            <div className="space-y-0">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="py-6 border-t border-border first:border-t-0"
                >
                  <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
