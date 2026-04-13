"use client";

import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Clock } from "lucide-react";
import { Button } from "../components/buttonComponent";
import iron from "../../public/iron-oats.png";
import atlas from "../../public/atlas.png";
import vela from "../../public/vela.png"
import arima from "../../public/arima.png"
import Image from "next/image";
const projects = [
  {
    id: 1,
    title: "Atlas Moving",
    category: "Brand Design",
    description:
      "Created brand design and identity for Moving company named Atlas.",
    tags: ["Brand Identity", "Web Dev", "Moving"],
    url: "https://atlas.zoviodigital.in/",
    image: atlas,
    stats: { "Traffic growth": "+340%", Achievement: "#1 for 12 keywords" },
  },
  {
    id: 2,
    title: "Iron and Oats",
    category: "Brand & Web Design",
    description:
      "Complete brand identity and web presence for Iron and Oats Gym & Cafe.",
    tags: ["Branding", "Web Design", "Fitness"],
    url: "https://iron-and-oats.zoviodigital.in",
    image: iron,
    stats: { "Traffic growth": "+210%", Achievement: "0.7s load time" },
  },
  {
    id: 3,
    title: "Vela Coffee",
    category: "Performance & Content",
    description:
      "End-to-end brand and web experience for a modern coffee roastery focused on slow rituals and global sourcing.",
    tags: ["Local SEO", "Content", "Coffee"],
    url: "https://vela-coffee.zoviodigital.in",
    image: vela,
    stats: { "Traffic growth": "+180%", Achievement: "Top 3 GMB" },
  },
  {
    id: 4,
    title: "Arima Estate",
    category: "Real Estate",
    description:
      "Hyperlocal SEO strategy for a real estate agency — dominated Google Maps pack across 3 cities.",
    tags: ["Web Dev", "Performance", "Estate"],
    url: "https://arima.zoviodigital.in",
    image: arima,
    stats: { "Traffic growth": "+290%", Achievement: "99/100 PSI" },
  }
  
];

const categories = [
  "All",
  "Web Dev",
  "Branding",
  "SEO",
  "E-Commerce",
  "Performance",
];

const featured = projects[0];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero — two-column, matches homepage layout ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 border-b border-border">
        {/* Grid — same opacity/style as homepage */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div className="flex flex-col items-start">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-8"
              >
                Our Work
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.15] mb-6"
              >
                <span className="block text-foreground">Results that</span>
                <span
                  className="block text-accent mt-2"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  speak for themselves.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-muted max-w-lg mb-8 leading-relaxed"
              >
                Every project is built around one question: what does success
                actually look like for this client? Here's what we've achieved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-md no-underline text-sm"
              >
                <Button
                  className="w-full h-full flex items-center justify-center gap-2"
                  sectionId="projects"
                  name="Browse all work"
                  children={<ArrowUpRight className="w-4 h-4" />}
                />
              </motion.div>

              {/* Stats row — identical pattern to homepage */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 lg:mt-16 pt-8 border-t border-border grid grid-cols-3 gap-4 sm:gap-6 max-w-lg w-full"
              >
                {[
                  { value: "150+", label: "Projects delivered" },
                  { value: "$2.4M+", label: "Revenue driven" },
                  { value: "98%", label: "Client retention" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <div
                      className="text-2xl font-medium text-foreground mb-1"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — featured project card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-card border border-border rounded-md overflow-hidden"
              >
                {/* Project screenshot */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    width={2000}
                    height={2000}
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {featured.category}
                  </div>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-accent no-underline"
                  >
                    Visit Site <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-semibold text-foreground">
                      {featured.title}
                    </h3>
                    <span className="text-xs text-muted border border-border rounded-full px-2 py-0.5">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {featured.description}
                  </p>

                  {/* Animated bar chart */}
                  <div className="flex items-end gap-1 h-10 mb-5">
                    {[25, 32, 38, 42, 50, 62, 78, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
                        className="flex-1 bg-accent/80 hover:bg-accent transition-colors origin-bottom rounded-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="flex gap-6 pt-4 border-t border-border">
                    {Object.entries(featured.stats).map(([label, value]) => (
                      <div key={label}>
                        <div className="text-sm font-semibold text-accent">
                          {value}
                        </div>
                        <div className="text-xs mt-0.5 text-muted">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -left-8 top-1/3 bg-surface border border-border p-4 shadow-lg rounded-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/10 flex items-center justify-center rounded-sm">
                    <Star className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      98% Retention
                    </div>
                    <div className="text-xs text-muted">Happy clients</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:block absolute bottom-8 left-6 lg:left-8"
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-px h-12 bg-border"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              style={{ originY: 0 }}
            />
            <span className="text-xs text-muted uppercase tracking-widest [writing-mode:vertical-lr]">
              Scroll
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── Filter Bar ── */}
      <section id="projects" className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-start flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-accent text-white border-accent"
                  : "bg-surface text-muted border-border hover:border-accent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border"
                style={{
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  transform:
                    hoveredId === project.id
                      ? "translateY(-4px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredId === project.id
                      ? "0 20px 60px -10px rgba(0,0,0,0.25)"
                      : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    width={2000}
                    height={2000}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 0.5s ease",
                      transform:
                        hoveredId === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      opacity: hoveredId === project.id ? 1 : 0,
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-accent no-underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h2
                    className="text-lg font-semibold mb-2 text-foreground"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1 mb-5 text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-surface text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 pt-5 border-t border-border">
                    {Object.entries(project.stats).map(([label, value]) => (
                      <div key={label}>
                        <div className="text-sm font-semibold text-accent">
                          {value}
                        </div>
                        <div className="text-xs mt-0.5 text-muted">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
