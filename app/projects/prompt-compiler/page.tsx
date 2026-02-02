"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function PromptCompilerPage() {
    return (
        <div className="min-h-screen bg-surface transition-colors duration-300 dark:bg-background">
            <div className="mx-auto max-w-4xl px-6 py-24">
                {/* Back Button */}
                <Link
                    href="/#experience"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-white/80 hover:text-secondary transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold text-primary dark:text-white mb-4">
                        PromptCompiler
                    </h1>
                    <p className="text-xl text-secondary mb-6">
                        AI-Powered Prompt Engineering Platform
                    </p>
                    <p className="text-lg text-fg-muted dark:text-white/80 mb-8">
                        Production SaaS platform converting user intent into structured prompts using 8-stage AI compilation pipeline with multi-agent orchestration and LangGraph state management.
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 mb-12">
                        <a
                            href="https://prompt-compiler-frontend.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary/90"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                        <a
                            href="https://github.com/AmanKushwaha-17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary dark:text-white dark:border-white/20 transition-all hover:border-secondary hover:text-secondary"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Overview Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Overview</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <p className="text-fg-muted dark:text-white/80 leading-relaxed mb-4">
                            PromptCompiler is a production-grade SaaS platform that transforms simple user intentions into sophisticated, optimized prompts for AI systems. It employs an 8-stage compilation pipeline powered by multi-agent orchestration to ensure every generated prompt is contextually appropriate, platform-aware, and optimized for maximum effectiveness.
                        </p>
                        <p className="text-fg-muted dark:text-white/80 leading-relaxed">
                            The platform features tiered subscription models with usage-based limits, secure JWT authentication, and domain-specific workflows tailored for content creation across Instagram, YouTube, and blog platforms.
                        </p>
                    </div>
                </motion.section>

                {/* Key Features */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Key Features</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: "8-Stage AI Pipeline",
                                description: "Intent parsing → context extraction → domain detection → constraint application → template selection → LLM generation → validation → final assembly"
                            },
                            {
                                title: "Multi-Agent Orchestration",
                                description: "LangGraph-powered state management coordinating specialized agents for semantic analysis, domain-specific optimization, and quality validation"
                            },
                            {
                                title: "Secure Authentication",
                                description: "JWT/JWKS-based authentication with Supabase integration, ensuring secure user sessions and data privacy"
                            },
                            {
                                title: "Tiered Subscriptions",
                                description: "Free (5 prompts/month), Pro (100 prompts/month), Enterprise (unlimited) with atomic usage tracking and enforcement"
                            },
                            {
                                title: "Domain-Specific Workflows",
                                description: "Platform-aware constraint systems for Instagram, YouTube, and blog content with character limits, tone matching, and SEO optimization"
                            },
                            {
                                title: "RESTful API",
                                description: "FastAPI backend with 4 core endpoints: compile, usage tracking, subscription management, and health monitoring"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-dashed border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6 transition-all hover:bg-primary/5 dark:hover:bg-white/5"
                            >
                                <h3 className="text-lg font-bold text-primary dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-fg-muted dark:text-white/70">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Technical Implementation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Technical Implementation</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <h3 className="text-xl font-bold text-secondary mb-4">Backend Architecture</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-fg-muted dark:text-white/80">
                            <li>FastAPI server with async request handling for low-latency responses</li>
                            <li>Supabase PostgreSQL for user data, subscription tiers, and usage metrics</li>
                            <li>JWT/JWKS authentication flow with secure token validation</li>
                            <li>Atomic usage tracking with database transactions to prevent race conditions</li>
                            <li>LangGraph state machines for multi-agent coordination</li>
                            <li>Groq LLM integration for high-speed prompt generation</li>
                        </ul>

                        <h3 className="text-xl font-bold text-secondary mb-4">Frontend Stack</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6 text-fg-muted dark:text-white/80">
                            <li>Next.js with TypeScript for type-safe React development</li>
                            <li>Responsive UI with Tailwind CSS and dark mode support</li>
                            <li>Real-time usage display with subscription-aware UI components</li>
                            <li>Error boundary handling for graceful fallbacks</li>
                        </ul>

                        <h3 className="text-xl font-bold text-secondary mb-4">DevOps & Deployment</h3>
                        <ul className="list-disc pl-6 space-y-2 text-fg-muted dark:text-white/80">
                            <li>Docker containerization with multi-stage builds for optimized images</li>
                            <li>Uvicorn ASGI server for production-grade performance</li>
                            <li>Environment-based configuration for dev/staging/production</li>
                            <li>Vercel deployment for frontend with edge caching</li>
                        </ul>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                            "Python", "FastAPI", "Supabase", "PostgreSQL", "Groq API",
                            "LangGraph", "Next.js", "TypeScript", "React", "Tailwind CSS",
                            "Docker", "Uvicorn", "JWT", "REST API", "SaaS"
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-primary dark:bg-white/10 dark:text-white/90"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Project Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Project Timeline</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <p className="text-lg font-semibold text-secondary mb-2">Dec 2025 – Present</p>
                        <p className="text-fg-muted dark:text-white/80">
                            Ongoing development and feature enhancements based on user feedback and platform evolution.
                        </p>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
