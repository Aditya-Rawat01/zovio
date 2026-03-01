"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, Globe } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            {/* Subtle Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        {/* Top Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <span className="text-sm font-medium text-muted uppercase tracking-[0.2em]">
                                Digital Agency
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.15] mb-6"
                        >

                            <span className="block text-foreground">We build digital</span>
                            <span className="block text-foreground">experiences that</span>
                            <span className="block heading-serif text-accent mt-2">drive growth.</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg text-muted max-w-lg mb-8 leading-relaxed"
                        >
                            Zovio is a strategic digital partner for ambitious brands.
                            We combine SEO expertise with thoughtful web development
                            to create measurable business results.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
                        >
                            <motion.a
                                href="#contact"
                                className="group flex items-center gap-3 px-6 py-3 bg-accent text-white font-medium hover:bg-accent-secondary transition-colors rounded-md"
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start a project
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </motion.a>
                            <motion.a
                                href="#impact"
                                className="flex items-center gap-2 px-6 py-3 text-foreground font-medium hover:text-accent transition-colors underline underline-offset-4"
                                whileHover={{ x: 4 }}
                            >
                                View our work
                            </motion.a>
                        </motion.div>

                        {/* Stats with Animated Counters */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-12 lg:mt-16 pt-8 border-t border-border grid grid-cols-3 gap-4 sm:gap-6 max-w-lg w-full"
                        >
                            {[
                                { value: "150+", label: "Projects delivered" },
                                { value: "98%", label: "Client retention" },
                                { value: "4+", label: "Years of excellence" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                >
                                    <div className="text-2xl font-medium text-foreground mb-1">
                                        <AnimatedCounter value={stat.value} duration={2} />
                                    </div>
                                    <div className="text-sm text-muted">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Better Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative">
                            {/* Main card with metrics */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-card border border-border p-8 mb-6 rounded-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-sm text-muted uppercase tracking-wider">Traffic Growth</span>
                                </div>
                                <div className="text-5xl font-medium text-foreground mb-2">
                                    <AnimatedCounter value="300%" duration={2.5} />
                                </div>
                                <div className="text-sm text-muted  mb-16">Average increase for our clients</div>

                                {/* Mini chart visualization */}
                                <div className="mt-6 flex items-end gap-1 h-16">
                                    {[20, 30, 35, 40, 45, 60, 80, 100].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                                            className="flex-1 bg-accent/90 hover:bg-accent/40 transition-colors"
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.8 },
                                    x: { duration: 0.8, delay: 0.8 },
                                }}
                                className="absolute -left-8 top-1/2 bg-surface border border-border p-4 shadow-lg rounded-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-accent/10 flex items-center justify-center">
                                        <Search className="w-4 h-4 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">SEO Score</div>
                                        <div className="text-xs text-muted">98/100</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="absolute -right-4 top-1/3 bg-surface border border-border p-4 shadow-lg rounded-md"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-accent/10 flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">Page Speed</div>
                                        <div className="text-xs text-muted">0.8s load</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
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
    );
}
