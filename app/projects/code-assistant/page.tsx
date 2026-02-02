"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function CodeAssistantPage() {
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
                        Code Analysis Assistant 🔍
                    </h1>
                    <p className="text-xl text-secondary mb-6">
                        RAG-Based Code Understanding System
                    </p>
                    <p className="text-lg text-fg-muted dark:text-white/80 mb-8">
                        A powerful RAG (Retrieval-Augmented Generation) system that helps you analyze and understand your codebase using AI. Upload your code files and chat with an intelligent assistant that can answer questions about your code structure, functions, and architecture.
                    </p>

                    {/* Links */}
                    <div className="flex gap-4 mb-12">
                        <a
                            href="https://ragsystemforcode-09.streamlit.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary/90"
                        >
                            <ExternalLink size={18} />
                            Try Live Demo
                        </a>
                        <a
                            href="https://github.com/AmanKushwaha-17/Coder_Rag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary dark:text-white dark:border-white/20 transition-all hover:border-secondary hover:text-secondary"
                        >
                            <Github size={18} />
                            View on GitHub
                        </a>
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">✨ Features</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                icon: "🔍",
                                title: "Smart Code Analysis",
                                description: "Ask questions about your codebase and get detailed explanations powered by AI"
                            },
                            {
                                icon: "📁",
                                title: "Multi-format Support",
                                description: "Upload Python, JavaScript, Java, C++, HTML, CSS, and more"
                            },
                            {
                                icon: "🤖",
                                title: "Intelligent Routing",
                                description: "Smart query classification distinguishing greetings from code analysis requests"
                            },
                            {
                                icon: "🔒",
                                title: "User Isolation",
                                description: "Complete data privacy - each user gets separate storage with session-level isolation"
                            },
                            {
                                icon: "⚡",
                                title: "Fast Processing",
                                description: "Powered by Groq's high-speed LLMs (Llama 3) for instant responses"
                            },
                            {
                                icon: "💬",
                                title: "Interactive Chat",
                                description: "Natural conversation interface with your codebase using LangChain orchestration"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-dashed border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6 transition-all hover:bg-primary/5 dark:hover:bg-white/5"
                            >
                                <div className="text-3xl mb-3">{feature.icon}</div>
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

                {/* How To Use */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">🎯 Usage Guide</h2>
                    <div className="space-y-6">
                        {[
                            {
                                step: "1️⃣ API Setup",
                                description: "Configure your GROQ API key",
                                details: [
                                    "Visit Groq Console and sign up/login",
                                    "Navigate to API Keys section and create a new key",
                                    "Enter the key in the app sidebar (stored only in your session)"
                                ]
                            },
                            {
                                step: "2️⃣ Upload Code Files",
                                description: "Add your codebase to the system",
                                details: [
                                    "Use the Codebase Manager panel on the right",
                                    "Upload individual files, folders, or ZIP archives",
                                    "Supported: .py, .js, .java, .cpp, .c, .html, .css, .txt, .md, .json, .xml, .yaml, .yml"
                                ]
                            },
                            {
                                step: "3️⃣ Process & Embed",
                                description: "Create vector embeddings for fast retrieval",
                                details: [
                                    "Click 'Auto Process & Embed' button",
                                    "Files are split into chunks using language-aware parsing",
                                    "Embeddings stored in FAISS vector database for similarity search"
                                ]
                            },
                            {
                                step: "4️⃣ Initialize System",
                                description: "Load AI models and prepare for queries",
                                details: [
                                    "Click 'Initialize System' in the sidebar",
                                    "Connects LangChain to Groq LLM",
                                    "Loads HuggingFace Sentence Transformers for embeddings"
                                ]
                            },
                            {
                                step: "5️⃣ Start Chatting",
                                description: "Ask questions and get AI-powered answers",
                                details: [
                                    "Type questions in the chat interface",
                                    "System retrieves relevant code snippets using FAISS",
                                    "LLM generates detailed analysis with code references"
                                ]
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-dashed border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6"
                            >
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                                    {item.step}
                                </h3>
                                <p className="text-sm text-secondary font-semibold mb-3">
                                    {item.description}
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-fg-muted dark:text-white/70">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Example Questions */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Example Questions</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <ul className="space-y-3">
                            {[
                                "What does the main function do in app.py?",
                                "How is authentication handled in this project?",
                                "Show me all the API endpoints",
                                "Explain the database connection setup",
                                "What dependencies does this project use?"
                            ].map((question, i) => (
                                <li key={i} className="flex items-start gap-3 text-fg-muted dark:text-white/80">
                                    <span className="text-secondary font-bold">•</span>
                                    <span className="italic">&ldquo;{question}&rdquo;</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* Privacy & Security */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">🔒 Privacy & Security</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <ul className="space-y-3 text-fg-muted dark:text-white/80">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span><strong>User Isolation:</strong> Each user gets separate data storage directories</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span><strong>Session-based:</strong> Data tied to browser session for temporary analysis</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span><strong>Auto-cleanup:</strong> User data automatically deleted after 24 hours</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span><strong>No Data Sharing:</strong> Complete isolation between users, no cross-contamination</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span><strong>Local Processing:</strong> File processing happens in your environment</span>
                            </li>
                        </ul>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">🛠️ Tech Stack</h2>
                    <div className="space-y-4 mb-6">
                        <div className="rounded-xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6">
                            <h3 className="text-lg font-bold text-secondary mb-3">Frontend</h3>
                            <p className="text-fg-muted dark:text-white/80">Streamlit - Interactive web framework for Python applications</p>
                        </div>
                        <div className="rounded-xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6">
                            <h3 className="text-lg font-bold text-secondary mb-3">AI Framework</h3>
                            <p className="text-fg-muted dark:text-white/80">LangChain - AI orchestration and chain management</p>
                        </div>
                        <div className="rounded-xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6">
                            <h3 className="text-lg font-bold text-secondary mb-3">LLM Provider</h3>
                            <p className="text-fg-muted dark:text-white/80">Groq - High-speed inference with Llama 3 models</p>
                        </div>
                        <div className="rounded-xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6">
                            <h3 className="text-lg font-bold text-secondary mb-3">Vector Database</h3>
                            <p className="text-fg-muted dark:text-white/80">FAISS - Fast similarity search for code embeddings</p>
                        </div>
                        <div className="rounded-xl border border-primary/20 dark:border-white/10 bg-surface dark:bg-surface-elevated p-6">
                            <h3 className="text-lg font-bold text-secondary mb-3">Embeddings</h3>
                            <p className="text-fg-muted dark:text-white/80">HuggingFace Sentence Transformers - Semantic code understanding</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {[
                            "Python", "Streamlit", "LangChain", "Groq API",
                            "FAISS", "HuggingFace Transformers", "RAG", "NLP",
                            "Vector Search", "Llama 3"
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
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Project Timeline</h2>
                    <div className="rounded-2xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 p-8">
                        <p className="text-lg font-semibold text-secondary mb-2">June 2025 – Aug 2025</p>
                        <p className="text-fg-muted dark:text-white/80">
                            Completed full-stack RAG system with Streamlit interface, LangChain orchestration, FAISS vector search, and Groq LLM integration. Successfully deployed with user isolation, session management, and multi-format code file support.
                        </p>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
