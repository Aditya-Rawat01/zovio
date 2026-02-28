"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Zovio offer?",
    answer:
      "Zovio specializes in comprehensive digital solutions including SEO optimization, custom website development, UI/UX design, content strategy, and digital marketing. We provide end-to-end services to establish and grow your online presence.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, but most clients start seeing improvements within 3-6 months. Significant results typically appear within 6-12 months, depending on your industry, competition, and current website status. We provide monthly reports to track progress.",
  },
  {
    question: "What makes Zovio different from other agencies?",
    answer:
      "We combine award-winning design with data-driven strategies. Our team consists of industry veterans who stay ahead of trends. We focus on measurable results, transparent communication, and building long-term partnerships rather than just completing projects.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Absolutely! We offer various maintenance packages to keep your website secure, updated, and performing optimally. This includes regular backups, security monitoring, content updates, and technical support. We believe in supporting our clients beyond launch.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs vary based on scope, complexity, and requirements. We offer tailored solutions to fit different budgets. Contact us for a free consultation where we&apos;ll discuss your needs and provide a detailed proposal with transparent pricing.",
  },
  {
    question: "Can you help with existing websites or only new builds?",
    answer:
      "We do both! Whether you need a complete redesign, performance optimization, SEO improvements, or new features for your existing site, we can help. We&apos;ll audit your current setup and recommend the best approach for your goals.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              Got Questions?
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
              Questions we&apos;re
              <span className="heading-serif text-accent block mt-2">often asked.</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted leading-relaxed mb-8"
            >
              Everything you need to know about working with Zovio. Can&apos;t
              find what you&apos;re looking for? Feel free to reach out to our
              team.
            </motion.p>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Still have questions?</h3>
                  <p className="text-sm text-muted mb-3">
                    Our team is here to help. Get in touch and we&apos;ll get
                    back to you within 24 hours.
                  </p>
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-accent hover:underline"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-surface flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
