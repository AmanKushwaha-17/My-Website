"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Rocket,
    GitBranch,
    Package,
    GraduationCap,
    ChevronDown,
    ChevronUp
} from "lucide-react";

const projects = [
    {
        period: "Dec 2025 – Present",
        role: "AI-Powered Prompt Engineering Platform",
        title: "PromptCompiler",
        description: "Built production SaaS platform converting user intent into structured prompts using 8-stage AI compilation pipeline with multi-agent orchestration and LangGraph state management.",
        link: "https://prompt-compiler-frontend.vercel.app/",
        github: "https://github.com/AmanKushwaha-17",
        detailsLink: "/projects/prompt-compiler",
        bullets: [
            "Engineered RESTful FastAPI backend with 4 core endpoints; implemented JWT/JWKS authentication, atomic usage tracking, and tiered subscription enforcement (5/100/unlimited prompts monthly)",
            "Integrated Groq LLM for semantic analysis with domain-specific compilation workflows for Content Creation (Instagram, YouTube, Blogs) with platform-aware constraints",
            "Built with Python, FastAPI, Supabase (PostgreSQL + Auth), Groq API, LangGraph, Next.js, Docker, Uvicorn"
        ],
        tags: ["Python", "FastAPI", "Supabase", "Groq API", "LangGraph", "Next.js", "Docker", "SaaS"]
    },
    {
        period: "Aug 2025 – Nov 2025",
        role: "Binance Mainnet Data + Testnet Execution",
        title: "Hybrid Crypto Trading Bot",
        description: "Machine learning-driven trading system for safe forward testing on Binance Futures. Evolved from rapid prototyping (V1) into a production-grade engine-based system (V2) with clean architecture, deterministic exits, and restart-safe state management.",
        github: "https://github.com/AmanKushwaha-17/Crypto-ML-Trading-Engine",
        detailsLink: "/projects/crypto-bot",
        bullets: [
            "V1: Hybrid bot with ML predictions, Telegram alerts, and performance analytics (Sharpe, Profit Factor, Drawdown)",
            "V2: Modular engine architecture with strict separation: Engine, Risk Manager, Strategy (ML entry-only), Execution, State Persistence",
            "Deterministic time-based exits to reduce overfitting; ATR-based volatility filtering; crash-safe state persistence for VM deployment"
        ],
        tags: ["Python", "Machine Learning", "Binance API", "Risk Management", "System Design", "Trading"]
    },
    {
        period: "June 2025 – Aug 2025",
        role: "RAG-Based Code Understanding System",
        title: "Code Analysis Assistant",
        description: "Built RAG-based system for natural language querying over large codebases using FAISS vector search with HuggingFace embeddings and session-level isolation.",
        link: "https://ragsystemforcode-09.streamlit.app/",
        github: "https://github.com/AmanKushwaha-17/Coder_Rag",
        detailsLink: "/projects/code-assistant",
        bullets: [
            "Created scalable ingestion pipeline supporting 10+ programming languages; integrated LLM-based reasoning to generate context-aware explanations of code logic and architecture",
            "Built with Python, FAISS, HuggingFace Transformers, LangChain, Groq LLM, Vector Databases"
        ],
        tags: ["Python", "RAG", "FAISS", "HuggingFace", "LangChain", "Groq LLM", "NLP"]
    },
];

const openSource = [
    {
        period: "Dec 15, 2025",
        role: "FiLM Conditioning Module (Merged PR)",
        title: "OpenClimateFix — Graph Weather",
        description: "Contributed a Feature-wise Linear Modulation (FiLM) module for conditioning neural networks on lead-time metadata. Implemented generator and applier layers, added unit tests, and iterated based on maintainer feedback before merge.",
        link: "https://github.com/openclimatefix/graph_weather/pull/184",
        bullets: [
            "Implemented MetNet-style conditioning via one-hot lead-time vectors",
            "Added shape-safe unit tests",
            "Refactored module layout after review",
            "Wrote Google-style docstrings"
        ],
        tags: ["Python", "PyTorch", "ML", "Testing", "Open Source"]
    }
];

const products = [
    {
        period: "2025",
        role: "MQL5 Expert Advisor",
        title: "Gold Vision Scalper Pro",
        description: "A professional Expert Advisor designed for breakout trading on multiple instruments, specializing in buy-side momentum with dynamic position sizing. Features include automated position management, risk-based lot calculations, and a professional visual interface.",
        link: "https://www.mql5.com/en/market/product/130834?source=Site+Profile+Seller"
    },
    {
        period: "2026",
        role: "MQL5 Indicator",
        title: "Session Visualizer",
        description: "Professional session time visualizer that eliminates guesswork with real-time visual session tracking. Features color-coded Asian, London, and NY sessions, a smart info panel with countdowns, and market closed detection.",
        link: "https://www.mql5.com/en/market/product/162755?source=Site+Profile+Seller"
    }
];


const education = [
    {
        period: "2023 - 2027",
        role: "B.Tech in Computer Science (Data Science)",
        institution: "JSS Academy of Technical Education, Noida",
        description: "GPA: 7.55 / 10.00",
    },
    {
        period: "2021 - 2022",
        role: "Intermediate (PCM)",
        institution: "Rani Laxmi Bai Memorial School",
        description: "Percentage: 90.2%",
    },
    {
        period: "2019 - 2020",
        role: "High School",
        institution: "Rani Laxmi Bai Memorial School",
        description: "Percentage: 95.8%",
    },
];

export function Experience() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isEducationOpen, setIsEducationOpen] = useState(false);

    return (
        <section id="experience" className="bg-surface py-24 transition-colors duration-300 dark:bg-surface-elevated/50">
            <div className="mx-auto max-w-4xl px-6">
                <div className="mb-20 text-center">
                    <span className="font-bold text-secondary">- Portfolio</span>
                    <h2 className="mt-2 text-4xl font-bold text-primary dark:text-white">
                        Projects & Experience
                    </h2>
                </div>

                <div className="flex flex-col gap-20">
                    {/* 1. Projects - Collapsible */}
                    <div className="relative border-l-2 border-primary/20 pl-8 dark:border-white/10">
                        <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary">
                            <Rocket size={14} />
                        </span>

                        <button
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            className="group mb-8 flex w-full items-center justify-between text-left"
                        >
                            <h3 className="text-2xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
                                Major Projects
                            </h3>
                            <div className={`rounded-full bg-primary/5 p-2 transition-transform duration-300 dark:bg-white/10 ${isProjectsOpen ? 'rotate-180' : ''}`}>
                                <ChevronDown className="h-5 w-5 text-primary dark:text-white" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isProjectsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-8 pb-2">
                                        {projects.map((item, index) => {
                                            const Content = () => (
                                                <>
                                                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                                        <Link href={item.detailsLink} className="group/title">
                                                            <h4 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2 group-hover/title:text-secondary transition-colors cursor-pointer">
                                                                {item.title}
                                                                <span className="text-secondary text-xs">↗</span>
                                                            </h4>
                                                        </Link>
                                                        <span className="text-xs font-medium text-fg-muted dark:text-white/60">{item.period}</span>
                                                    </div>
                                                    <p className="mb-3 text-sm font-semibold text-secondary">{item.role}</p>
                                                    <p className="text-sm text-fg-muted dark:text-white/80 leading-relaxed">{item.description}</p>

                                                    {item.bullets && (
                                                        <ul className="mt-4 list-disc pl-4 space-y-1">
                                                            {item.bullets.map((bullet, i) => (
                                                                <li key={i} className="text-sm text-fg-muted dark:text-white/70">{bullet}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {item.tags && (
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            {item.tags.map((tag, i) => (
                                                                <span key={i} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary dark:bg-white/10 dark:text-white/80">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {(item.link || item.github) && (
                                                        <div className="mt-4 flex gap-3">
                                                            {item.link && (
                                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-secondary hover:underline" onClick={(e) => e.stopPropagation()}>
                                                                    Live Demo →
                                                                </a>
                                                            )}
                                                            {item.github && (
                                                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary dark:text-white/80 hover:underline" onClick={(e) => e.stopPropagation()}>
                                                                    GitHub →
                                                                </a>
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            );

                                            return (item.link || item.github) ? (
                                                <div key={index} className="group relative rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 hover:border-secondary/50 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-secondary/50">
                                                    <Content />
                                                </div>
                                            ) : (
                                                <div key={index} className="group relative rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                                                    <Content />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 2. Open Source - Collapsible */}
                    <div className="relative border-l-2 border-primary/20 pl-8 dark:border-white/10">
                        <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary">
                            <GitBranch size={14} />
                        </span>

                        <button
                            onClick={() => setIsOpenSourceOpen(!isOpenSourceOpen)}
                            className="group mb-8 flex w-full items-center justify-between text-left"
                        >
                            <h3 className="text-2xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
                                Open Source Work
                            </h3>
                            <div className={`rounded-full bg-primary/5 p-2 transition-transform duration-300 dark:bg-white/10 ${isOpenSourceOpen ? 'rotate-180' : ''}`}>
                                <ChevronDown className="h-5 w-5 text-primary dark:text-white" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isOpenSourceOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-8 pb-2">
                                        {openSource.map((item, index) => {
                                            const Content = () => (
                                                <>
                                                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                                        <h4 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
                                                            {item.title}
                                                            {item.link && <span className="text-secondary text-xs">↗</span>}
                                                        </h4>
                                                        <span className="text-xs font-medium text-fg-muted dark:text-white/60">{item.period}</span>
                                                    </div>
                                                    <p className="mb-3 text-sm font-semibold text-secondary">{item.role}</p>
                                                    <p className="text-sm text-fg-muted dark:text-white/80 leading-relaxed">{item.description}</p>

                                                    {item.bullets && (
                                                        <ul className="mt-4 list-disc pl-4 space-y-1">
                                                            {item.bullets.map((bullet, i) => (
                                                                <li key={i} className="text-sm text-fg-muted dark:text-white/70">{bullet}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {item.tags && (
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            {item.tags.map((tag, i) => (
                                                                <span key={i} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary dark:bg-white/10 dark:text-white/80">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            );

                                            return item.link ? (
                                                <a
                                                    key={index}
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative block rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 hover:border-secondary/50 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-secondary/50"
                                                >
                                                    <Content />
                                                </a>
                                            ) : (
                                                <div key={index} className="group relative rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                                                    <Content />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 3. Products - Collapsible */}
                    <div className="relative border-l-2 border-primary/20 pl-8 dark:border-white/10">
                        <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary">
                            <Package size={14} />
                        </span>

                        <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="group mb-8 flex w-full items-center justify-between text-left"
                        >
                            <h3 className="text-2xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
                                Products
                            </h3>
                            <div className={`rounded-full bg-primary/5 p-2 transition-transform duration-300 dark:bg-white/10 ${isProductsOpen ? 'rotate-180' : ''}`}>
                                <ChevronDown className="h-5 w-5 text-primary dark:text-white" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isProductsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-8 pb-2">
                                        {products.map((item, index) => {
                                            const Content = () => (
                                                <>
                                                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                                        <h4 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
                                                            {item.title}
                                                            {item.link && <span className="text-secondary text-xs">↗</span>}
                                                        </h4>
                                                        <span className="text-xs font-medium text-fg-muted dark:text-white/60">{item.period}</span>
                                                    </div>
                                                    <p className="mb-3 text-sm font-semibold text-secondary">{item.role}</p>
                                                    <p className="text-sm text-fg-muted dark:text-white/80 leading-relaxed">{item.description}</p>
                                                </>
                                            );

                                            return item.link ? (
                                                <a
                                                    key={index}
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative block rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 hover:border-secondary/50 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-secondary/50"
                                                >
                                                    <Content />
                                                </a>
                                            ) : (
                                                <div key={index} className="group relative rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                                                    <Content />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 4. Education - Collapsible */}
                    <div className="relative border-l-2 border-primary/20 pl-8 dark:border-white/10">
                        <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-primary">
                            <GraduationCap size={14} />
                        </span>

                        <button
                            onClick={() => setIsEducationOpen(!isEducationOpen)}
                            className="group mb-8 flex w-full items-center justify-between text-left"
                        >
                            <h3 className="text-2xl font-bold text-primary dark:text-white group-hover:text-secondary transition-colors">
                                Education
                            </h3>
                            <div className={`rounded-full bg-primary/5 p-2 transition-transform duration-300 dark:bg-white/10 ${isEducationOpen ? 'rotate-180' : ''}`}>
                                <ChevronDown className="h-5 w-5 text-primary dark:text-white" />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isEducationOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-8 pb-2">
                                        {education.map((item, index) => (
                                            <div key={index} className="group relative rounded-2xl border border-dashed border-primary/20 bg-primary/5 p-6 transition-all hover:bg-primary/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                                                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                                    <h4 className="text-lg font-bold text-primary dark:text-white">{item.institution}</h4>
                                                    <span className="text-xs font-medium text-fg-muted dark:text-white/60">{item.period}</span>
                                                </div>
                                                <p className="text-sm font-semibold text-fg-muted dark:text-white/80">{item.role}</p>
                                                <p className="mt-1 text-xs text-secondary">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
