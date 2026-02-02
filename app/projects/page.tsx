"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "prompt-compiler",
    title: "PromptCompiler",
    subtitle: "AI-Powered Prompt Engineering Platform",
    description: "Production SaaS platform with 8-stage AI compilation pipeline, multi-agent orchestration, and tiered subscriptions. Built with FastAPI, Supabase, and LangGraph.",
    tags: ["Python", "FastAPI", "Supabase", "LangGraph", "Next.js", "SaaS"],
    liveLink: "https://prompt-compiler-frontend.vercel.app/",
    githubLink: "https://github.com/AmanKushwaha-17",
    detailsLink: "/projects/prompt-compiler",
    period: "Dec 2025 – Present",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "crypto-bot",
    title: "Hybrid Crypto Trading Bot",
    subtitle: "Binance Mainnet Data + Testnet Execution",
    description: "Machine learning-driven trading system for safe forward testing. Two-generation evolution: V1 (rapid prototyping) and V2 (production engine architecture) with deterministic exits and restart-safe state management.",
    tags: ["Python", "Machine Learning", "Binance API", "Risk Management", "System Design"],
    githubLink: "https://github.com/AmanKushwaha-17/Crypto-ML-Trading-Engine",
    detailsLink: "/projects/crypto-bot",
    period: "Aug 2025 – Nov 2025",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "code-assistant",
    title: "Code Analysis Assistant",
    subtitle: "RAG-Based Code Understanding System",
    description: "RAG system for natural language querying over large codebases using FAISS vector search, HuggingFace embeddings, and LLM reasoning for context-aware explanations.",
    tags: ["Python", "RAG", "FAISS", "HuggingFace", "LangChain", "NLP"],
    liveLink: "https://ragsystemforcode-09.streamlit.app/",
    githubLink: "https://github.com/AmanKushwaha-17/Coder_Rag",
    detailsLink: "/projects/code-assistant",
    period: "June 2025 – Aug 2025",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-surface-muted transition-colors duration-300 dark:bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-secondary font-bold text-lg">- Portfolio</span>
          <h1 className="mt-2 text-5xl font-bold text-primary dark:text-white">
            Featured Projects
          </h1>
          <p className="mt-4 text-lg text-fg-muted dark:text-white/70 max-w-2xl mx-auto">
            A showcase of production-grade systems spanning AI/ML, SaaS platforms, and algorithmic trading. Each project demonstrates end-to-end development from architecture to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated shadow-sm transition-all hover:shadow-xl dark:shadow-none"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative p-6">
                {/* Period Badge */}
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-secondary mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-fg-muted dark:text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-primary/10 dark:bg-white/10 px-3 py-1 text-xs font-medium text-primary dark:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-full bg-primary/10 dark:bg-white/10 px-3 py-1 text-xs font-medium text-primary dark:text-white/80">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  <Link
                    href={project.detailsLink}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-primary transition-all hover:bg-secondary/90"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>

                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 dark:border-white/20 px-4 py-2 text-sm font-medium text-primary dark:text-white transition-all hover:border-secondary hover:text-secondary"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 dark:border-white/20 px-4 py-2 text-sm font-medium text-primary dark:text-white transition-all hover:border-secondary hover:text-secondary"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-fg-muted dark:text-white/70 mb-6">
            Want to see more? Check out my open source contributions and products.
          </p>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-lg bg-primary dark:bg-secondary px-6 py-3 text-sm font-bold text-white dark:text-primary transition-all hover:opacity-90"
          >
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
