"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="overflow-hidden bg-primary py-24 text-white dark:bg-surface">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
                {/* Left Image - User Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-md"
                >
                    <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-surface shadow-2xl bg-surface-muted">
                        <Image
                            src="/aman_kushwaha.png"
                            alt="Aman Kushwaha"
                            width={400}
                            height={500}
                            className="h-auto w-full object-cover"
                        />
                    </div>

                    {/* Decorative elements behind */}
                    <div className="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-white/20 -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-white/5 -z-10"></div>


                </motion.div>

                {/* Right Content */}
                <div className="flex-1">
                    <span className="font-bold text-secondary">- About Me</span>
                    <h2 className="mt-2 text-4xl font-bold text-white">Who is Aman Kushwaha?</h2>
                    <div className="mt-6 text-lg leading-relaxed text-white/80 space-y-4">
                        <p>
                            I am a B.Tech student in Computer Science (Data Science) at JSS Academy of Technical Education, Noida, focused on building practical AI systems and backend platforms.
                        </p>
                        <p>
                            I enjoy experimenting with machine learning models, developing RAG-based applications, and creating automation tools for learning and analysis. My projects include trading system prototypes, adaptive learning platforms, and AI-powered code understanding tools built as part of academic and personal exploration.
                        </p>
                        <p>
                            I am actively learning production-grade engineering practices and working toward becoming a strong AI & backend engineer through hands-on development.
                        </p>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-full bg-secondary px-8 py-3 font-bold text-primary transition hover:opacity-90">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
