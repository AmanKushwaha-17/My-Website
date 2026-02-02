"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        title: "AI & Machine Learning",
        description: "NLP, Scikit-learn, generative AI, fine-tuning, retrieval-augmented generation (RAG), FAISS, Pandas, NumPy, and experimentation with LLM pipelines.",
        icon: "🤖",
    },
    {
        title: "Web & API Development",
        description: "Backend-focused web development using Python and Node.js, REST APIs, basic React/Next.js interfaces, and Tailwind for simple frontends.",
        icon: "💻",
    },
    {
        title: "Backend & Systems",
        description: "Python, FastAPI, Supabase, MongoDB, data pipelines, and building ML-driven systems as part of academic and personal projects.",
        icon: "⚙️",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-surface-muted transition-colors duration-300 dark:bg-background">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <span className="text-secondary font-bold text-lg">- Skills</span>
                        <h2 className="mt-2 text-4xl font-bold text-primary dark:text-white">Technical Skills</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl bg-surface p-8 shadow-sm transition-all hover:shadow-xl dark:bg-surface-elevated dark:shadow-none dark:hover:bg-primary/10 border border-transparent dark:border-white/5"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-2xl text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">{service.title}</h3>
                            <p className="mb-6 text-fg-muted dark:text-gray-400">{service.description}</p>
                            <Link href="#experience" className="inline-flex items-center gap-2 text-sm font-bold text-primary dark:text-secondary opacity-0 transition group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                View Projects <span className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
