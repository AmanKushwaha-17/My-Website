"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-24 sm:pt-48 sm:pb-32 bg-background transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="inline-block rounded-lg border border-primary/20 px-4 py-2 font-medium text-primary dark:text-secondary dark:border-secondary/20 bg-primary/5 dark:bg-secondary/10">
              Hello, I&apos;m Aman
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl"
          >
            B.Tech Data Science<br />
            Student Building<br />
            <span className="text-secondary">AI Systems</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-fg-muted dark:text-gray-300"
          >
            B.Tech (Data Science) student exploring machine learning, RAG systems, and trading-system engineering through hands-on projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#experience"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
            >
              View My Projects
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition group-hover:bg-secondary dark:bg-primary dark:text-white">
                ▶
              </span>
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-8 py-3.5 font-bold text-white transition hover:bg-primary/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex flex-1 items-center justify-center lg:justify-end"
        >
          {/* Abstract blobs background */}
          <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 select-none opacity-40 blur-3xl">
            <div className="absolute inset-0 bg-primary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            {/* Main AI Abstract Image */}
            <div className="relative h-[450px] w-[450px] overflow-hidden rounded-full border-4 border-surface shadow-2xl ring-4 ring-primary/20 xs:h-[500px] xs:w-[500px] bg-surface-muted">
              <Image
                src="/logo.png"
                alt="Aman Kushwaha - AI Systems Developer"
                fill
                priority
                className="object-cover"
              />
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
