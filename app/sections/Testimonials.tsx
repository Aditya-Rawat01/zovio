"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    content:
      "Zovio transformed our online presence. Within three months, organic traffic increased by 400% and we ranked #1 for our key terms. Their strategic approach is unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    content:
      "The website Zovio built converts visitors at 3x our previous rate. They understand the intersection of design and performance better than anyone we've worked with.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Elevate Co",
    content:
      "Working with Zovio felt like having an extension of our own team. Responsive, thoughtful, and genuinely invested in our success. We've seen a 250% ROI.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2]">
              What our clients
              <span className="heading-serif text-accent block mt-2">say about us.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted text-lg leading-relaxed">
              We let our work speak for itself, but sometimes it helps to hear 
              from those who have experienced it firsthand. Here&apos;s what 
              industry leaders say about partnering with Zovio.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 border border-border hover:border-accent/30 transition-colors">
                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

