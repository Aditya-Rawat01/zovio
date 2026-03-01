"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "SEO Optimization", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Content Strategy", href: "#" },
    { name: "Digital Marketing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#impact" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "FAQ", href: "#faq" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-24 border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
              Ready to start your
              <span className="heading-serif text-accent block mt-2">next project?</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted mb-10 max-w-xl mx-auto"
            >
              Let&apos;s discuss how we can help you achieve your digital goals. 
              Reach out and we&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="mailto:hello@zovio.agency"
                className="group flex items-center rounded-md gap-2 px-6 py-3 bg-accent text-white font-medium hover:bg-accent-secondary transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
              href="tel:+91 9667128213"
                className="flex items-center gap-2 px-6 py-3 text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4"
                whileHover={{ x: 4 }}
              >
                Schedule a call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="col-span-2 md:col-span-4 lg:col-span-2"
            >
              <a href="#home" className="inline-block mb-6">
                <span className="text-2xl font-medium text-foreground">Zovio</span>
              </a>
              <p className="text-muted mb-6 max-w-sm leading-relaxed">
                A digital agency focused on SEO and web development. 
                We help brands grow through strategic thinking and meticulous craft.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@zovio.agency"
                  className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@zovio.agency</span>
                </a>
                <a
                  href="tel:+919667128213"
                  className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 9667128213</span>
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted"
            >
              © {new Date().getFullYear()} Zovio. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-muted hover:text-foreground hover:bg-border transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
