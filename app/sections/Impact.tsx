"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const services = [
  {
    number: "01",
    title: "SEO Strategy",
    description:
      "Data-driven search optimization that puts your brand in front of the right audience at the right time.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Performance-focused websites built with modern technologies and conversion-centered design principles.",
  },
  {
    number: "03",
    title: "Growth Marketing",
    description:
      "Comprehensive digital strategies that turn your online presence into a sustainable growth engine.",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2]">
              Strategic digital solutions
              <span className="heading-serif text-accent block mt-2">for measurable growth.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted text-lg leading-relaxed">
              In an increasingly digital world, your online presence is your 
              most valuable business asset. We help ambitious brands harness 
              its full potential through strategic thinking and meticulous execution.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-0 border-t border-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group py-8 border-b border-border hover:bg-surface/50 transition-colors cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-sm text-muted font-medium">{service.number}</span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "300%", label: "Average traffic increase" },
            { value: "0.8s", label: "Average page load time" },
            { value: "10x", label: "Average ROI achieved" },
            { value: "98%", label: "Client satisfaction rate" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="border-l-2 border-accent/20 pl-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-medium text-foreground mb-2">
                <AnimatedCounter value={stat.value} duration={2.5} />
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
