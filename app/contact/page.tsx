import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-primary dark:text-white">
        Let&apos;s Build Something <br />
        <span className="text-secondary">Intelligent</span> Together.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-fg-muted dark:text-white/70">
        Whether you have a project in mind, need help with AI architecture, or just want to chat about the future of tech — my inbox is always open.
      </p>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row">
        <Link
          href="mailto:amankushwaha2323@gmail.com"
          className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
        >
          <Mail className="h-5 w-5" />
          <span>amankushwaha2323@gmail.com</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/aman-kushwaha17/"
          target="_blank"
          className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
        >
          <Linkedin className="h-5 w-5" />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://x.com/AmanKushwa61735"
          target="_blank"
          className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary/90 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
        >
          <Twitter className="h-5 w-5" />
          <span>Twitter / X</span>
        </Link>
      </div>

      <div className="mt-16 flex flex-col items-center gap-2">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl text-primary font-bold">
          A
        </span>
        <span className="font-bold text-primary dark:text-white">Aman Kushwaha</span>
      </div>
    </div>
  );
}
